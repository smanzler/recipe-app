import { ThemedText } from "@/components/ThemedText";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function AddScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <ThemedText style={styles.title}>Add Recipe</ThemedText>
        <TextInput style={styles.input} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 20,
  },
  title: {
    fontSize: 30,
  },
  input: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
  },
});
