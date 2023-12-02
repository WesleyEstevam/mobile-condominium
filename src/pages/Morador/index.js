import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

import styles from "../Morador/style";

export default function MoradorScreen() {
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
          onPress={() => handleNavigation("HistoricoScreen")}
        >
          <Icon name="hourglass" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("ConvidarScreen")}
        >
          <Icon name="upload" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("OcorrenciaScreen")}
        >
          <Icon name="warning" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
