import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function AddScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <ThemedText style={styles.title}>Recipe</ThemedText>
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
    paddingTop: 10,
    fontSize: 30,
  },
});
