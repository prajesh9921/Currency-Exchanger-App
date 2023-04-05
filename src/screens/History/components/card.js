import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HistoryCard = ({ from, to, rate, amount, result }) => {
  return (
    <View style={styles.card}>
      <View style={styles.fromCard}>
        <Text>{from}</Text>
        <Text style={styles.currency}>{amount}</Text>
      </View>
      <View style={styles.exchange}>
        <FontAwesome name="exchange" size={30} color="white" />
        <Text style={styles.rate}>
          1 {from} = {rate} {to}
        </Text>
      </View>
      <View style={styles.to}>
        <Text>{to}</Text>
        <Text style={styles.currency}>{result}</Text>
      </View>
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
  currency: { fontSize: 20, fontWeight: "bold" },
  rate: { fontSize: 12 },
  to: { flex: 1, alignItems: "flex-end" },
  fromCard: { flex: 1 },
  exchange: { alignItems: "center" },
});

export default HistoryCard;
