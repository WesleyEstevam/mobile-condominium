import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import sidebarImage from "../../assets/LOGO_TRANSPARENTE.png";

export default function Profile() {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Image source={sidebarImage} style={styles.sidebarImage} />

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("PainelScreen")}
        >
          <Text style={styles.sidebarButtonText}>Painel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("Visitas")}
        >
          <Text style={styles.sidebarButtonText}>Visitas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("Reservas")}
        >
          <Text style={styles.sidebarButtonText}>Reservas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("Ocorrência")}
        >
          <Text style={styles.sidebarButtonText}>Ocorrência</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
