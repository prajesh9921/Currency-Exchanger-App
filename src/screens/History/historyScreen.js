import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import HistoryCard from "./components/card";

const HistoryScreen = () => {
  const values = useSelector((state) => state.History.value);

  return (
    <View style={{ padding: 20, backgroundColor: "black", flex: 1 }}>
      <Text style={styles.title}>History</Text>
      <ScrollView>
        {values.map((item, index) => {
          return (
            <HistoryCard
              key={index}
              from={item.from}
              to={item.to}
              rate={item.rate}
              amount={item.amt}
              result={item.result}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginBottom: 30,
  },
});

export default HistoryScreen;
