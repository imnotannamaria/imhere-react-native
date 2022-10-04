import React from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  const participants = ['Anna', 'Joanne', 'Beyonce', 'Carol', 'Diana']

  function handleParticipantAdd() {
    if(participants.includes(participants[participants.length - 1])){
      return Alert.alert('Erro', 'Por favor, digite o nome do participante.')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o/a participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert(`Você removeu o/a ${name}`)
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
          placeholderTextColor='#6B6B6B'
          // keyboardType='numeric'
        /> 

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            + 
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
