import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Recipe</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 30
  }
});
