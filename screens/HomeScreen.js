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

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Header */}
        <View className="bg-nuBg w-full h-44">
          <View className="h-5 w-5 bg-[#FFF] rounded-full absolute top-4 left-16 z-50 border-2 border-nuBg" />
          <TouchableOpacity className="h-16 w-16 bg-nuText rounded-full justify-center items-center absolute left-4 top-4 pl-1">
            <MaterialIcons name="add-photo-alternate" size={34} color="white" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-end mt-8 mx-8">
            <View className="flex-row space-x-8">
              <TouchableOpacity>
                <Entypo name="eye-with-line" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="help-circle" size={26} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="user-check" size={26} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <Text className="mt-14 mx-8 text-2xl font-bold text-[#FFF]">
            Olá, Filipe
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
