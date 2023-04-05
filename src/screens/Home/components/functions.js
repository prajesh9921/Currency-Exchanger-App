import AsyncStorage from "@react-native-async-storage/async-storage";

const StoreData = async (amount,FromValue, result, ToValue) => {
    const value = {
      amt: amount,
      from: FromValue,
      rate: result.rate,
      result: result.res,
      to: ToValue,
    };
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("object", jsonValue);
    } catch (e) {
      console.log("error setting data in async storage", e);
    }
  };

  export default StoreData;