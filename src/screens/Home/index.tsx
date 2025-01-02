import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { Participant } from "../../components/Participant";
export function Home() {

    const participats = [
        'Ariel Monterroso',
        'Carlos González',
        'Carla Anleu',
        'Jorge Orozco',
        'Adrian Smith',
        'Maria Fernanda',]

    function handleParticipantAdd() {
        console.log('Adicionar nuevo ')
    }

    function handleParticipantRemove() {
        console.log('Eliminar nuevo ')
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

            <Participant name='Ariel Monterroso' onRemove={handleParticipantRemove}/>
            <Participant name='Carlos González' onRemove={handleParticipantRemove}/>


        </View>
    );
}