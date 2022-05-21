import React from "react";
import { View, Text } from "react-native";
import Swiper from "../components/Swiper";

export default function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Swiper />
    </View>
  );
}
