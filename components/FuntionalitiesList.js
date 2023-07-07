import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const FuntionalitiesList = () => {
  return (
    <ScrollView horizontal className="px-3 mt-8 space-x-3 pb-2">
      <View className="h-2 w-2" />
      <View className="space-y-4 items-center justify-center">
        <TouchableOpacity className="h-16 w-16 bg-nuGray rounded-full items-center justify-center pl-1">
          <MaterialIcons name="attach-money" size={35} color="#e5e5e5" />
        </TouchableOpacity>
        <Text className="text-[#FFF] text-md font-bold">Área Pix</Text>
      </View>
      <View className="space-y-4 items-center justify-center">
        <TouchableOpacity className="h-16 w-16 bg-nuGray rounded-full items-center justify-center">
          <MaterialCommunityIcons name="barcode" size={30} color="#e5e5e5" />
        </TouchableOpacity>
        <Text className="text-[#FFF] text-md font-bold">Pagar</Text>
      </View>
      <View className="space-y-4 items-center justify-center">
        <TouchableOpacity className="h-16 w-16 bg-nuGray rounded-full items-center justify-center pl-2">
          <MaterialCommunityIcons
            name="bank-transfer"
            size={35}
            color="#e5e5e5"
          />
        </TouchableOpacity>
        <Text className="text-[#FFF] text-md font-bold">Transferir</Text>
      </View>
      <View className="space-y-4 items-center justify-center">
        <TouchableOpacity className="h-16 w-16 bg-nuGray rounded-full items-center justify-center">
          <FontAwesome name="mobile-phone" size={35} color="#e5e5e5" />
        </TouchableOpacity>
        <Text className="text-[#FFF] text-md font-bold">Recarga</Text>
      </View>
      <View className="space-y-4 items-center justify-center">
        <TouchableOpacity className="h-16 w-16 bg-nuGray rounded-full items-center justify-center">
          <FontAwesome5 name="money-bill-alt" size={26} color="#e5e5e5" />
        </TouchableOpacity>
        <Text className="text-[#FFF] text-md font-bold">Depositar</Text>
      </View>
      <View className="space-y-4 items-center justify-center">
        <TouchableOpacity className="h-16 w-16 bg-nuGray rounded-full items-center justify-center">
          <Feather name="heart" size={26} color="#e5e5e5" />
        </TouchableOpacity>
        <Text className="text-[#FFF] text-md font-bold">Doação</Text>
      </View>
      <View className="space-y-4 items-center justify-center">
        <TouchableOpacity className="h-16 w-16 bg-nuGray rounded-full items-center justify-center">
          <AntDesign name="barschart" size={30} color="#e5e5e5" />
        </TouchableOpacity>
        <Text className="text-[#FFF] text-md font-bold">Investir</Text>
      </View>
      <View className="w-8 h-4 bg-[#000]" />
    </ScrollView>
  );
};

export default FuntionalitiesList;
