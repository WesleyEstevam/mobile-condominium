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
          onPress={() => handleNavigation("Visitantes")}
        >
          <Text style={styles.sidebarButtonText}>Visitantes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("Moradores")}
        >
          <Text style={styles.sidebarButtonText}>Moradores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("Prestadores")}
        >
          <Text style={styles.sidebarButtonText}>Prestadores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("Ocorrencia")}
        >
          <Text style={styles.sidebarButtonText}>Ocorrências</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("Imoveis")}
        >
          <Text style={styles.sidebarButtonText}>Imóveis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("Veiculos")}
        >
          <Text style={styles.sidebarButtonText}>Veículos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("Cameras")}
        >
          <Text style={styles.sidebarButtonText}>Câmeras</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => handleNavigation("EntradasSaidas")}
        >
          <Text style={styles.sidebarButtonText}>Entradas e Saídas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
