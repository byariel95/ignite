import { View, Text, TextInput, TouchableOpacity, FlatList,Alert } from "react-native";
import { styles } from './styles'
import { Participant } from "../../components/Participant";
export function Home() {

    const participats = [
        'Ariel Monterroso',
        'Carlos González',
        'Carla Anleu',
        'Jorge Orozco',
        'Adrian Smith',
        'Maria Fernanda',
        'Juan Perez',
        'Ana Maria',
        'Luisa Maria',
        'Pedro Perez',
        'Maria Perez',
        'Juan Estuardo',
        "Ana Luisa",
        "Carlos Perez",
    ]

    function handleParticipantAdd() {
        if(participats.includes('Juan Perez')){
           return Alert.alert('Participante existente', 'El participante ya fue agregado')
        }
    }

    function handleParticipantRemove(participant: string) {
        Alert.alert('Remove', `Estas seguro de eliminar el participante: ${participant}?`, [
            {
                text: 'Si',
                onPress: () => Alert.alert('Eliminado')
            },
            {
                text: 'No',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nombre del Evento
            </Text>
            <Text style={styles.eventDate}>
                Calle 24, 19 de Noviembre de 2024
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre del participante"
                    placeholderTextColor={'#6B6B6B'}
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
                data={participats}
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