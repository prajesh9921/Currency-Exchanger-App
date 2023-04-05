import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const FavCard = ({ from, to }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.from}>{from}</Text>
      <FontAwesome name="exchange" size={30} color="white" />
      <Text style={styles.to}>{to}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f6deff",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  to: { fontSize: 20, fontWeight: "bold" },
  from: { fontSize: 20, fontWeight: "bold" },
});

export default FavCard;
