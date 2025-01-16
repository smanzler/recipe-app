import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, TextInput, View } from "react-native";

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Add Recipe</ThemedText>
      <TextInput style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20
  },
  title: {
    fontSize: 30
  },
  input: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  }
});
