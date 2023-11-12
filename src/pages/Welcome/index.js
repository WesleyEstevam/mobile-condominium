import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInDown"
        delay={500}
        style={styles.containerLogo}
      >
        <Image
          source={require("../../assets/LOGO_TRANSPARENTE.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </Animatable.View>

      <Animatable.View
        delay={1000}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Seu Lar em Qualquer Lugar!</Text>
        <Text style={styles.text}>Faça o Login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
