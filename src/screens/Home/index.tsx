import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}
      >
        Segunda, 4 de Agosto de 2022.
      </Text>
    </View>
  )
}
