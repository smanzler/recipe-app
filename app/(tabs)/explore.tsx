import { StyleSheet, Image, Platform, SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ThemedText>Explore</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
