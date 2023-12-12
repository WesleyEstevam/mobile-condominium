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

  // Obter os parâmetros passados
  const { tipoOcorrencia, descricaoOcorrencia, identificacao, timestamp } =
    route.params || {};

  // Estado para armazenar os formulários preenchidos
  const [respostas, setRespostas] = useState([]);

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  useEffect(() => {
    // Adicione o formulário atual à lista quando a tela for montada
    if (tipoOcorrencia && descricaoOcorrencia && identificacao) {
      setRespostas((prevRespostas) => [
        {
          tipoOcorrencia,
          descricaoOcorrencia,
          identificacao,
          timestamp,
        },
        ...prevRespostas, // Mantenha os formulários antigos
      ]);
    }
  }, [tipoOcorrencia, descricaoOcorrencia, identificacao, timestamp]);

  return (
    <View style={styles.container}>
      <FlatList
        data={respostas.slice().reverse()} // Criar uma cópia antes de reverter
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

            {/* Adicione um campo para exibir a data/hora do formulário */}
            <Text style={styles.informationText}>{item.timestamp}</Text>
          </View>
        )}
      />

      <View
        style={[
          styles.bottomButtonsContainer,
          { backgroundColor: "green", zIndex: 1 }, // Adicionando zIndex
        ]}
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
            // Faça algo ao pressionar o terceiro botão
          }}
        >
          <Icon name="camerao" size={50} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
}
