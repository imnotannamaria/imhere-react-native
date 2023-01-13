import React, { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState('');

  function handleParticipantAdd() {
    if(participantsName.trim() === '') {
      Alert.alert('Nome do participante vazio', 'Por favor, digite o nome do participante')

      return;
    }

    if(participants.includes(participantsName)) {
      Alert.alert('Nome do participante já existe', 'Por favor, digite outro nome')

      return;
    }

    setParticipants([...participants, participantsName]);

    setParticipantsName('');

    Alert.alert('Participant added!')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o/a participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}
      > 
        Segunda, 4 de Agosto de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do participante'
          onChangeText={setParticipantsName}
          placeholderTextColor='#6B6B6B'
          value={participantsName}
          // keyboardType='numeric'
        /> 

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            <AntDesign name="adduser" size={24} />
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => Math.random().toString()}
        data={participants}
        renderItem={({ item }) => (
          <Participant 
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém por aqui, por que não adiciona alguém?
          </Text>
        )}
      />
    </View>
  )
}
