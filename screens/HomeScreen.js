import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FuntionalitiesList from "../components/FuntionalitiesList";
import CardsList from "../components/CardsList";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Header */}
        <View className="bg-nuBg w-full h-40">
          <View className="h-4 w-4 bg-[#FFF] rounded-full absolute top-5 left-14 z-50 border-2 border-nuBg" />
          <TouchableOpacity className="h-12 w-12 bg-[#8331c4] rounded-full justify-center items-center absolute left-5 top-5 pl-1">
            <MaterialIcons name="add-photo-alternate" size={28} color="white" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-end mt-8 mx-8">
            <View className="flex-row space-x-8">
              <TouchableOpacity>
                <Entypo name="eye-with-line" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="help-circle" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="user-check" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <Text className="mt-14 mx-8 text-xl font-bold text-[#FFF]">
            Olá, Filipe
          </Text>
        </View>

        {/* Body */}
        <View className="w-full h-auto bg-[#000] py-8">
          <TouchableOpacity className="flex-row justify-between mx-8">
            <View className="space-y-1">
              <Text className="text-xl font-bold text-[#FFF]">Conta</Text>
              <Text className="text-xl font-bold text-[#FFF]">
                R$ 30.734,76
              </Text>
            </View>
            <View>
              <Entypo name="chevron-right" size={26} color="#e5e5e5" />
            </View>
          </TouchableOpacity>

          {/* Funtionalities */}
          <FuntionalitiesList />

          <TouchableOpacity className="w-auto h-14 bg-nuGray mx-8 rounded-xl flex-row items-center px-5 space-x-4 mt-6">
            <MaterialCommunityIcons
              name="credit-card-chip-outline"
              size={30}
              color="#e5e5e5"
            />
            <Text className="text-md font-bold text-[#FFF]">Meus cartões</Text>
          </TouchableOpacity>

          <CardsList />

          {/* Divider */}
          <View style={{ height: 2 }} className="w-full bg-nuGray mt-4" />

          <TouchableOpacity className="flex-row justify-between mx-8 my-8">
            <View className="space-y-4">
              <Text className="text-xl font-bold text-[#FFF]">
                Cartão de crédito
              </Text>
              <View className="space-y-1">
                <Text className="text-lg text-[#FFF]">Fatura atual</Text>
                <Text className="text-xl font-bold text-[#FFF]">
                  R$ 30.734,76
                </Text>
              </View>
              <Text className="text-md text-[#e5e5e5]">
                Limite disponível de R$ 313,92
              </Text>
            </View>
            <View>
              <Entypo name="chevron-right" size={26} color="#e5e5e5" />
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <View style={{ height: 2 }} className="w-full bg-nuGray" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
