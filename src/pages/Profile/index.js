import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

import styles from "../Profile/styles";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.bottomButtonsContainer, { backgroundColor: "green" }]}
      >
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("PainelScreen")}
        >
          <Icon name="folder1" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("InfoScreen")}
        >
          <Icon name="book" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => {
            // Código para abrir a câmera aqui
            // Pode usar bibliotecas como react-native-camera para isso
            // Certifique-se de instalar a biblioteca antes de usar
          }}
        >
          <Icon name="camerao" size={50} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
}
