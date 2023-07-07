import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const KnowMoreList = () => {
  return (
    <View>
      <Text className="text-xl font-bold text-[#FFF] mx-8 mt-8">
        Descubra mais
      </Text>
      <ScrollView horizontal className="pb-2 my-6">
        <View className="h-2 w-8" />
        <View>
          <Image
            className="h-32 w-72 mr-6 rounded-t-lg"
            source={{
              uri: "https://blog.nubank.com.br/wp-content/uploads/2021/07/novo-app-Nubank-2021-header.jpg",
            }}
          />
          <View className="bg-nuGray h-44 w-72 rounded-b-lg">
            <View className="space-y-3 mx-6 my-6">
              <Text className="text-[#e5e5e5] font-bold text-md">
                N Possibilidades
              </Text>
              <Text className="text-[#e5e5e5]  text-md">
                Veja as soluções que o Nu tem para simplificar sua vida
              </Text>
            </View>
            <TouchableOpacity className="bg-nuBg h-10 w-32 items-center justify-center rounded-full mx-6">
              <Text className="text-lg font-bold text-[#FFF]">Saiba mais</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            className="h-32 w-72 mr-6 rounded-t-lg"
            source={{
              uri: "https://1bilhao.com.br/wp-content/uploads/2021/04/capa-nubank-instabilidade-dezembro_1400x875_5dee97922404e.jpg",
            }}
          />
          <View className="bg-nuGray h-44 w-72 rounded-b-lg">
            <View className="space-y-3 mx-6 my-6">
              <Text className="text-[#e5e5e5] font-bold text-md">
                Indique o Nu para amigos
              </Text>
              <Text className="text-[#e5e5e5]  text-md">
                Espalhe como é simples estar no controle.
              </Text>
            </View>
            <TouchableOpacity className="bg-nuBg h-10 w-32 items-center justify-center rounded-full mx-6">
              <Text className="text-lg font-bold text-[#FFF]">Saiba mais</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            className="h-32 w-72 mr-6 rounded-t-lg"
            source={{
              uri: "https://www.remessaonline.com.br/blog/wp-content/uploads/2021/05/nubank-e-confiavel.jpg.optimal.jpg",
            }}
          />
          <View className="bg-nuGray h-44 w-72 rounded-b-lg">
            <View className="space-y-3 mx-6 my-6">
              <Text className="text-[#e5e5e5] font-bold text-md">
                Traga seus dados
              </Text>
              <Text className="text-[#e5e5e5]  text-md">
                Mais chances de limites e produtos com a sua cara
              </Text>
            </View>
            <TouchableOpacity className="bg-nuBg h-10 w-32 items-center justify-center rounded-full mx-6">
              <Text className="text-lg font-bold text-[#FFF]">Saiba mais</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            className="h-32 w-72 mr-6 rounded-t-lg"
            source={{
              uri: "https://img.olhardigital.com.br/wp-content/uploads/2021/09/Nubank.jpg",
            }}
          />
          <View className="bg-nuGray h-44 w-72 rounded-b-lg">
            <View className="space-y-3 mx-6 my-6">
              <Text className="text-[#e5e5e5] font-bold text-md">
                Termos de uso
              </Text>
              <Text className="text-[#e5e5e5]  text-md">
                Explicamos o que diz esse documento do Nubank.
              </Text>
            </View>
            <TouchableOpacity className="bg-nuBg h-10 w-32 items-center justify-center rounded-full mx-6">
              <Text className="text-lg font-bold text-[#FFF]">Saiba mais</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-2 w-4" />
      </ScrollView>
    </View>
  );
};

export default KnowMoreList;
