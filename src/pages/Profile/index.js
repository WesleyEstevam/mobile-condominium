import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "../Profile/styles";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { tipoOcorrencia, descricaoOcorrencia, identificacao, timestamp } =
    route.params || {};

  const [respostas, setRespostas] = useState([]);

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  useEffect(() => {
    if (tipoOcorrencia && descricaoOcorrencia && identificacao) {
      setRespostas((prevRespostas) => [
        {
          tipoOcorrencia,
          descricaoOcorrencia,
          identificacao,
          timestamp,
        },
        ...prevRespostas,
      ]);
    }
  }, [tipoOcorrencia, descricaoOcorrencia, identificacao, timestamp]);

  return (
    <View style={styles.container}>
      <FlatList
        data={respostas.slice().reverse()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.informationsContainer,
              {
                backgroundColor: "lightgreen",
                marginBottom: 10,
                width: "100%",
              },
            ]}
          >
            <Text style={styles.informationTextBold}>
              {item.tipoOcorrencia}
            </Text>

            <Text style={styles.informationText}>
              {item.descricaoOcorrencia}
            </Text>

            <Text style={styles.informationTextBold}>{item.identificacao}</Text>

            <Text style={styles.informationText}>{item.timestamp}</Text>
          </View>
        )}
      />

      <View
        style={[
          styles.bottomButtonsContainer,
          { backgroundColor: "green", zIndex: 1 },
        ]}
      >
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("PainelScreen")}
        >
          <Icon name="folder1" size={50} color="white" />
          <Text style={styles.bottomButtonText}>Painel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("InfoScreen")}
        >
          <Icon name="book" size={50} color="white" />
          <Text style={styles.bottomButtonText}>Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => handleNavigation("ConferirScreen")}
        >
          <Icon name="addusergroup" size={50} color="white" />
          <Text style={styles.bottomButtonText}>Conferir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
