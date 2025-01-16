import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './styles'
import { Participant } from "../../components/Participant";
import { useState } from "react";
import "dayjs/locale/es-mx"
import dayjs from "dayjs";
export function Home() {
    const [participants, setParticipant] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')


    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participante existente', 'El participante ya fue agregado')
        }
        setParticipant(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remove', `Estas seguro de eliminar el participante: ${name}?`, [
            {
                text: 'Si',
                onPress: () => setParticipant(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'No',
                style: 'cancel'
            }
        ])
    }

    function getCurrentDate() {
        const date = dayjs()
        const locale = dayjs(date).locale('es-mx').format('dddd D  MMMM YYYY')
        return locale
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nombre del Evento
            </Text>
            <Text style={styles.eventDate}>
                Nuevo Leon, {getCurrentDate()}
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre del participante"
                    placeholderTextColor={'#6B6B6B'}
                    onChangeText={setParticipantName}
                    value={participantName}
                />
                <TouchableOpacity style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participats.map((participant, index) => (
                        <Participant
                            key={index}
                            name={participant}
                            onRemove={() => handleParticipantRemove(participant)}
                        />
                    ))
                }
            </ScrollView> */}
            <FlatList
                data={participants}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>No hay participantes agregados</Text>
                )}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
            />
        </View>
    );
}