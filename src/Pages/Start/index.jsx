import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Start() {
  return (
    <View>
      <ScrollView showVerticalScrollIndicator={false}>
        <View>
          <Image source={required("../../assets/icons/logo3.png")} />
          <Text>Usuário</Text>
        </View>
      </ScrollView>
    </View>
  );
}
