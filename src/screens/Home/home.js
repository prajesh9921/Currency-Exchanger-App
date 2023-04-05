import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import CurrencyCard from "./components/currencyCard";
import ResultCard from "./components/resultCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadData } from "../../features/history";
import { setData } from "../../features/data";
import { floadData } from "../../features/favorite";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { Keyboard } from "react-native";
import { CurrencyData } from "../../features/currency";
import { useIsFocused } from "@react-navigation/native";
import StoreData from "./components/functions";

const Home = () => {
  const [FromValue, setFromValue] = useState();
  const [ToValue, setToValue] = useState();
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [heart, setHeart] = useState(false);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("object");
        const response = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (response != null) {
          setResult({
            rate: response.rate,
            res: response.result,
          });
          dispatch(setData(response));
          setAmount(response.amt);
          const val = { from: response.from, to: response.to };
          dispatch(CurrencyData(val));
        }
      } catch (e) {
        console.log("Error getting data from async storage", e);
      }
    };
    getData();
  }, [isFocused]);

  const SetFavorite = () => {
    if (FromValue || ToValue) {
      if (heart === false) {
        setHeart(true);
        const val = { from: FromValue, to: ToValue };
        dispatch(floadData(val));
      }
    } else {
      console.warn("Feilds are empty");
    }
  };

  // Function To Fetch API Data

  const getAmount = async () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "HDAqhWY8xMRN97p4WX8Rlr6JPWz1d7Db");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    try {
      Keyboard.dismiss();
      if (
        FromValue === ToValue ||
        isNaN(amount) ||
        !FromValue ||
        !ToValue ||
        !amount
      ) {
        console.log(FromValue, ToValue);
        console.warn(
          "Make sure amount is not empty, currency are not same or empty"
        );
      } else {
        setIsLoading(true);
        const response = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${ToValue}&from=${FromValue}&amount=${amount}`,
          requestOptions
        );
        const json = await response.json();
        console.log(json);
        setResult({
          rate: json.info.rate,
          res: json.result,
        });
        const data = {
          amt: amount,
          from: FromValue,
          rate: json.info.rate,
          result: json.result,
          to: ToValue,
        };
        dispatch(setData(data));
        setIsLoading(false);
        //// END OF SET LOADING
        const value = {
          from: FromValue,
          to: ToValue,
          amt: amount,
          result: json.info.rate.toFixed(2),
          rate: json.result,
        };
        dispatch(loadData(value));
        setHeart(false);
        StoreData(amount, FromValue, result, ToValue);
      }
    } catch (error) {
      console.log("error in convert button", error);
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.screen_title}>Currency Converter</Text>
          <Image
            style={{ height: 200, width: 250, alignSelf: "center" }}
            source={require("../../../assets/Currency-pana.png")}
          />
          {isLoading ? (
            <View>
              <ActivityIndicator size="large" />
            </View>
          ) : !result ? null : (
            <ResultCard />
          )}
          <CurrencyCard
            toValue={setToValue}
            fromValue={setFromValue}
            amt={setAmount}
            fav={SetFavorite}
            val={amount}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={{ flex: 1 }} onPress={getAmount}>
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>CONVERT</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={SetFavorite}>
              <AntDesign
                name={heart ? "heart" : "hearto"}
                size={25}
                color="white"
                style={{}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "black",
    flex: 1,
  },
  screen_title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: "#f6deff",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
  },
  buttonTextStyle: { fontSize: 15, fontWeight: "bold" },
});

export default Home;
