import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

const ResultCard = () => {

    const values = useSelector(state => state.Data.value);

    return (
      <View style={styles.resultContainer}>
        <Text style={styles.text1}>
          <Text style={styles.text1FromVal}>1 {values.from} </Text>
          is equal to
          <Text style={styles.text1FromVal}> {values.rate.toFixed(2)} {values.to}</Text>
        </Text>
        <Text style={styles.text2}>
          {values.amt}<Text style={styles.text2FromVal}> {values.from} </Text>= {values.result.toFixed(2)}
          <Text style={styles.text2FromVal}> {values.to}</Text>
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: "#ddfffd",
    borderRadius: 10,
    padding: 20,
  },
  text1: { fontSize: 18 },
  text1FromVal: { fontWeight: "bold", fontSize: 18 },

  text2: { fontSize: 30, fontWeight: "bold", marginTop: 10 },
  text2FromVal: { fontSize: 15, fontWeight: "normal" },
});

export default ResultCard;
