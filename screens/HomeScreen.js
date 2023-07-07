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
import { FontAwesome5 } from "@expo/vector-icons";

import FuntionalitiesList from "../components/FuntionalitiesList";
import CardsList from "../components/CardsList";
import KnowMoreList from "../components/KnowMoreList";

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
          {/* Account */}
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
          {/* My cards */}
          <TouchableOpacity className="w-auto h-14 bg-nuGray mx-8 rounded-xl flex-row items-center px-5 space-x-4 mt-6">
            <MaterialCommunityIcons
              name="credit-card-chip-outline"
              size={30}
              color="#e5e5e5"
            />
            <Text className="text-md font-bold text-[#FFF]">Meus cartões</Text>
          </TouchableOpacity>
          {/* Cards List */}
          <CardsList />
          {/* Divider */}
          <View style={{ height: 2 }} className="w-full bg-nuGray mt-4" />
          {/* Credit Card */}
          <TouchableOpacity className="flex-row justify-between mx-8 my-8">
            <View className="space-y-4">
              <Text className="text-xl font-bold text-[#FFF]">
                Cartão de crédito
              </Text>
              <View className="space-y-1">
                <Text className="text-lg text-[#FFF]">Fatura atual</Text>
                <Text className="text-xl font-bold text-[#FFF]">R$ 886,08</Text>
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
          <View className="mt-8">
            <Text className="mx-8 text-xl font-bold text-[#FFF]">
              Acompanhe também
            </Text>
            <TouchableOpacity className="w-auto h-20 bg-nuGray mx-8 rounded-xl flex-row items-center px-5 space-x-4 mt-6 justify-between">
              <View className="flex-row items-center justify-center space-x-4">
                <FontAwesome5 name="coins" size={24} color="#e5e5e5" />
                <Text>
                  <Text className="text-md font-bold text-[#FFF]">
                    Assistente de
                  </Text>
                  {"\n"}
                  <Text className="text-md font-bold text-[#FFF]">
                    pagamentos
                  </Text>
                </Text>
              </View>
              <Text className="text-[#FFF] h-auto w-auto bg-nuBg font-bold px-1 rounded-xl">
                Novo
              </Text>
            </TouchableOpacity>
          </View>
          {/* Divider */}
          <View style={{ height: 2 }} className="w-full bg-nuGray mt-6" />
          {/* Emprestimos */}
          <TouchableOpacity className="flex-row justify-between mx-8 mt-8">
            <View className="space-y-4">
              <View className="flex-row justify-between">
                <Text className="text-xl font-bold text-[#FFF]">
                  Empréstimo
                </Text>
                <Entypo name="chevron-right" size={26} color="#e5e5e5" />
              </View>
              <Text className="text-md font-bold text-[#e5e5e5]">
                Aviso criado! Vamos te avisar aqui no app se um empréstimo ficar
                disponível.
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <View style={{ height: 2 }} className="w-full bg-nuGray mt-8" />

          {/* More */}
          <KnowMoreList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
