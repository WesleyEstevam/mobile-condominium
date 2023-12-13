import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import * as Animatable from "react-native-animatable";

import styles from "../HistoricoScreen/style";
import { baseURL } from "../../../../api/baseURL";
import axios from "axios";

export default function HistoricoScreen() {
  const navigation = useNavigation();

  const [historicoOriginal, setHistoricoOriginal] = useState([]);
  const [historicoFiltrado, setHistoricoFiltrado] = useState([]);
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroNome, setFiltroNome] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    axios
      .get(baseURL + "visitante")
      .then((response) => {
        const historicoData = response.data;
        setHistoricoOriginal(historicoData);
        setHistoricoFiltrado(historicoData);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handleFiltrar = () => {
    let historicoFiltradoAtual = [...historicoOriginal];

    if (filtroTipo === "nome" && filtroNome.trim() !== "") {
      historicoFiltradoAtual = historicoFiltradoAtual.filter((item) =>
        item.nomePessoa.toLowerCase().includes(filtroNome.toLowerCase())
      );
    }

    setHistoricoFiltrado(historicoFiltradoAtual);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Animatable.View
        animation="fadeInLeft"
        delay={600}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Histórico</Text>
      </Animatable.View>

      <View style={styles.containerForm}>
        <SegmentedControlTab
          values={["Todos", "Nome"]}
          selectedIndex={selectedIndex}
          onTabPress={(index) => {
            setSelectedIndex(index);
            setFiltroTipo(index === 0 ? "todos" : "nome");
          }}
        />

        {filtroTipo === "nome" && (
          <TextInput
            placeholder="Pesquisar por nome"
            value={filtroNome}
            onChangeText={(text) => setFiltroNome(text)}
            style={styles.input}
          />
        )}

        <Button title="Filtrar" onPress={handleFiltrar} style={styles.button} />

        <FlatList
          data={historicoFiltrado}
          keyExtractor={(item) => item.idPessoa}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text>{`Nome: ${item.nomePessoa}, Data: ${new Date(
                item.dtCadastro
              ).toLocaleDateString()}`}</Text>
            </View>
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
