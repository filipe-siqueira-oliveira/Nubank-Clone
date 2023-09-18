import { View, Text, ScrollView } from "react-native";
import React from "react"; 

const CardsList = () => {
  return (
    <ScrollView horizontal className="pb-2">
      <View className="h-2 w-8" />
      <View className="w-72 h-20 bg-nuGray mr-4 rounded-xl flex-row items-center px-8 space-x-4 mt-5 ">
        <Text className="text-md text-nuText">
          Pix no crédito:{" "}
          <Text className="text-md text-[#FFF]">
            transfira sem usar o saldo da conta.
          </Text>
        </Text>
      </View>
      <View className="w-72 h-20 bg-nuGray mr-4 rounded-xl flex-row items-center px-8 space-x-4 mt-5 ">
        <Text className="text-md text-nuText ">
          Novidade!{" "}
          <Text className="text-md text-[#FFF]">Ganhe cashback na Amazon.</Text>
        </Text>
      </View>
      <View className="w-72 h-20 bg-nuGray mr-4 rounded-xl flex-row items-center px-8 space-x-4 mt-5 ">
        <Text className="text-md text-nuText">
          Convide amigos para o Nubank{" "}
          <Text className="text-md text-[#FFF]">
            e desbloqueie brasões incríveis.
          </Text>
        </Text>
      </View>
      <View className="h-2 w-4" />
    </ScrollView>
  );
};

export default CardsList;
