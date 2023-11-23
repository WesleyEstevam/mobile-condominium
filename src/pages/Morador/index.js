import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";

import styles from "../Morador/style";

export default function MoradorScreen() {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  const AddCircleOutlineIcon = () => (
    <Svg width="50" height="50" viewBox="0 0 50 50">
      <Circle
        cx="25"
        cy="25"
        r="24"
        stroke="white"
        strokeWidth="2"
        fill="transparent"
      />
      <SvgText
        x="50%"
        y="50%"
        textAnchor="middle"
        fontSize="40"
        dy="13"
        fill="white"
      >
        +
      </SvgText>
    </Svg>
  );

  const AlertaIcon = () => (
    <Svg width="50" height="50" viewBox="0 0 50 50">
      <Circle
        cx="25"
        cy="25"
        r="24"
        stroke="white"
        strokeWidth="2"
        fill="transparent"
      />
      <SvgText
        x="50%"
        y="50%"
        textAnchor="middle"
        fontSize="30"
        dy="11"
        fill="white"
      >
        !
      </SvgText>
    </Svg>
  );

  return (
    <View style={styles.container}>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("Adicionar")}
        >
          <Text style={styles.bottomButtonText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("Verificar")}
        >
          <AddCircleOutlineIcon />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("Alerta")}
        >
          <AlertaIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}
