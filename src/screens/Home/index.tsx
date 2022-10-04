import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {

  function handleParticipantAdd() {
    console.log('Adicionou')
  }

  function handleParticipantRemove() {
    console.log('Removeu')
  }
  
  return (
    <View style={styles.container}>
      <StatusBar translucent style="light"/>
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

      <Participant 
        name='Anna Maria' 
        onRemove={handleParticipantRemove}
      />
      <Participant 
        name='Na Maria' 
        onRemove={handleParticipantRemove}
      />
    </View>
  )
}
