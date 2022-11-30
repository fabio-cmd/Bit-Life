import React from "react";
import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

export default function LifeStatus() {
  /*Status:
    100 - Máximo
    50 - Médio
    25 - Baixo
    00 - Curto (Acabou o Game)
    No robô, nós temos primeiro felicidade e depois Saúde xx-xx
  */
  return (
    <View style={StyleSheet.container}>
      <Lottie
        source={require("../../../assets/education/education-100.json")}
        autoPlay
        loop
        style={styles.educacaoAnimacao}
      />
      <Lottie
        source={require("../../../assets/money/money-100.json")}
        autoPlay
        loop
        style={styles.financasAnimacao}
      />
      <Lottie
        source={require("../../../assets/robot/robot-100-100.json")}
        autoPlay
        loop
        style={styles.roboAnimacao}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  educacaoAnimacao: {
    position: "absolute",
    width: 100,
    marginTOp: 50,
    marginLeft: -20,
  },
  financasAnimacao: {
    position: "absolute",
    width: 100,
    marginTOp: 50,
    marginLeft: 70,
  },
  roboAnimacao: {
    width: 190,
    marginTOp: 30,
  },
});
