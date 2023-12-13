import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

import styles from "../Morador/style";

const MoradorScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ImageBackground
      source={require("../../assets/LOGO.gif")} // Substitua pelo caminho real do seu LOGO.gif
      style={styles.container}
    >
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("HistoricoScreen")}
        >
          <Icon name="hourglass" size={50} color="white" />
          <Text style={styles.bottomButtonText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("ConvidarScreen")}
        >
          <Icon name="upload" size={50} color="white" />
          <Text style={styles.bottomButtonText}>Convidar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("OcorrenciaScreen")}
        >
          <Icon name="warning" size={50} color="white" />
          <Text style={styles.bottomButtonText}>Ocorrência</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default MoradorScreen;
