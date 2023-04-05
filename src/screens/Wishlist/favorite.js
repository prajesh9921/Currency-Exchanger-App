import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { useSelector } from "react-redux";
import FavCard from "./components/favCard";
import { useIsFocused } from "@react-navigation/native";

const Favorite = () => {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const values = useSelector((state) => state.Favorite.value);

  useEffect(() => {
    function removeDuplicates() {
      let newArray = [];
      let uniqueObject = {};
      for (let i in values) {
        objTitle = values[i]["from"];
        uniqueObject[objTitle] = values[i];
      }
      for (i in uniqueObject) {
        newArray.push(uniqueObject[i]);
      }
      setData(newArray);
    }

    removeDuplicates();
  }, [isFocused]);

  return (
    <View style={{ padding: 20, backgroundColor: "black", flex: 1 }}>
      <Text style={styles.title}>History</Text>
      <ScrollView>
        {!data ? (
          <Text>Loading...</Text>
        ) : (
          data.map((item, index) => {
            return <FavCard key={index} from={item.from} to={item.to} />;
          })
        )}
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

export default Favorite;
