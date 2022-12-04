import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollVIew,
} from "react-native-gesture-handler";

export default function AppExplation() {
  function handleSetShowHome() {
    console.log("hhahaha");
  }
  return (
    <View style={styles.container}>
      <ScrollVIew>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Antes, deixa{"\n"} eu te explicar...</Text>
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai pdoer escolher {"\n"} seus 4 hábitos de
            forma individual.
          </Text>
          <DefaulButton
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            height={50}
          />
        </View>
      </ScrollVIew>
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundolor: "rgba(21, 21, 21 0.98)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 40,
  },
  descriptionCta: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
});
