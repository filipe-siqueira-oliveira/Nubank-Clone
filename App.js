import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";

import TabBar from "./components/TabBar";

import HomeScreen from "./screens/HomeScreen";
import MoneyAndSecuresScreen from "./screens/MoneyAndSecuresScreen";
import ShoppingScreen from "./screens/ShoppingScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <TabBar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="MoneyAndSecures"
          component={MoneyAndSecuresScreen}
        />
        <Stack.Screen name="Shopping" component={ShoppingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
