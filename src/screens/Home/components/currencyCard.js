import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Dropdown from "./dropdown";
import { AntDesign } from "@expo/vector-icons";
import favorite from "../../../features/favorite";
import { useSelector } from "react-redux";

const CurrencyCard = ({ toValue, fromValue, amt, val}) => {

  const DropdownTitle = useSelector(state => state.Currency.value); 

  return (
    <View style={styles.container}>
        <TextInput
          value={val}
          style={styles.currency_card_TextInput}
          placeholder="Amount"
          keyboardType="numeric"
          onChangeText={(val) => amt(val)}
        />
      <View style={styles.card_style}>
        <Text style={styles.currency_card_title}>From: </Text>
        <Dropdown setValue={fromValue} title={DropdownTitle.from}/>
      </View>
      <View style={styles.card_style}>
        <Text style={styles.currency_card_title}>To: </Text>
        <Dropdown setValue={toValue} title={DropdownTitle.to}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fee8ab",
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
  },
  currency_card_title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  currency_card_TextInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    borderRadius: 10,
    marginBottom: 10,
  },
  card_style: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default CurrencyCard
