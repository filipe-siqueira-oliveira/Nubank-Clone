import { View, TouchableHighlight, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TabBar = () => {
  const navigation = useNavigation();
  const [isSwapSelected, setIsSwapSelected] = useState(true);
  const [isMoneySelected, setIsMoneySelected] = useState(false);
  const [isShoppingBagSelected, setIsShoppingBagSelected] = useState(false);

  const handleSwapPress = () => {
    navigation.navigate("Home");
    setIsSwapSelected(true);
    setIsMoneySelected(false);
    setIsShoppingBagSelected(false);
  };

  const handleMoneyPress = () => {
    navigation.navigate("MoneyAndSecures");
    setIsSwapSelected(false);
    setIsMoneySelected(true);
    setIsShoppingBagSelected(false);
  };

  const handleShoppingBagPress = () => {
    navigation.navigate("Shopping");
    setIsSwapSelected(false);
    setIsMoneySelected(false);
    setIsShoppingBagSelected(true);
  };

  return (
    <View
      style={{ backgroundColor: "rgba(22,22,22,0.97)" }}
      className="flex-row h-20 w-56 shadow-lg  rounded-full items-center justify-around absolute z-50 bottom-2 left-20"
    >
      <TouchableHighlight
        onPress={handleSwapPress}
        style={[styles.buttons, isSwapSelected && styles.selectedButton]}
        underlayColor="transparent"
      >
        <AntDesign name="swap" size={30} color="#e5e5e5" />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={handleMoneyPress}
        style={[styles.buttons, isMoneySelected && styles.selectedButton]}
        underlayColor="transparent"
      >
        <MaterialIcons name="money" size={30} color="#e5e5e5" />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={handleShoppingBagPress}
        style={[styles.buttons, isShoppingBagSelected && styles.selectedButton]}
        underlayColor="transparent"
      >
        <Feather name="shopping-bag" size={28} color="#e5e5e5" />
      </TouchableHighlight>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  buttons: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#591e8c",
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
