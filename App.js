import Home from "./src/screens/Home/home";
import Favorite from "./src/screens/Wishlist/favorite";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import HistoryReducer from "./src/features/history";
import HistoryScreen from "./src/screens/History/historyScreen";
import FavoriteReducer from "./src/features/favorite";
import CurrencyReducer from "./src/features/currency";
import DataReducer from "./src/features/data";

const Tab = createBottomTabNavigator();

const store = configureStore({
  reducer: {
    History: HistoryReducer,
    Favorite: FavoriteReducer,
    Currency: CurrencyReducer,
    Data: DataReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "favorite") {
                iconName = focused ? "star" : "star";
              } else if (route.name === "history") {
                iconName = focused ? "history" : "history";
              }
              return (
                <Icon
                  name={iconName}
                  size={25}
                  color={focused ? "#f6deff" : "#ddfffd"}
                />
              );
            },
          })}
          tabBarOptions={{
            activeBackgroundColor: "black",
            inactiveBackgroundColor: "black",
            activeTintColor: "#f6deff",
            inactiveTintColor: "#ddfffd",
            style: { borderTopWidth: 0 },
          }}
        >
          <Tab.Screen
            name="home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Tab.Screen
            name="favorite"
            component={Favorite}
            options={{ title: "Favorite" }}
          />
          <Tab.Screen
            name="history"
            component={HistoryScreen}
            options={{ title: "History" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// #f6deff - light blue
// #fee8ab - light green
// #ddfffd - blue
// black
