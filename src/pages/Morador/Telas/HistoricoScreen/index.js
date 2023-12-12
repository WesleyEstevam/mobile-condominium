// Importações necessárias
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import * as Animatable from "react-native-animatable";
import { Calendar } from "react-native-calendars";

import styles from "../HistoricoScreen/style";
import { baseURL } from "../../../../api/baseURL";
import axios from "axios";

export default function HistoricoScreen() {
  const navigation = useNavigation();

  const [historico, setHistorico] = useState([]);
  const [historicoOriginal, setHistoricoOriginal] = useState([]);
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroData, setFiltroData] = useState({});
  const [filtroNome, setFiltroNome] = useState("");
  const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    axios
      .get(baseURL + "visitante")
      .then((response) => {
        const historicoData = response.data;
        setHistoricoOriginal(historicoData);
        setHistorico(historicoData);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const diasDoMes = [...Array(31).keys()].map((item) => ({
    label: `${item + 1}`,
    value: `${item + 1}`,
  }));

  const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ].map((item, index) => ({ label: item, value: `${index + 1}` }));

  const anosDisponiveis = Array.from(
    { length: new Date().getFullYear() - 1999 },
    (_, index) => ({
      label: `${2000 + index}`,
      value: `${2000 + index}`,
    })
  );

  const handleFiltrar = () => {
    let historicoFiltrado = [...historicoOriginal];

    if (filtroTipo === "data") {
      historicoFiltrado = historicoFiltrado.filter((item) => {
        const [ano, mes, dia] = item.dtCadastro.split("-");
        const dataItem = `${ano}-${mes}-${dia}`;
        return dataItem === filtroData.dateString;
      });
    } else if (filtroTipo === "nome" && filtroNome.trim() !== "") {
      historicoFiltrado = historicoFiltrado.filter((item) =>
        item.nomePessoa.toLowerCase().includes(filtroNome.toLowerCase())
      );
    }

    setHistorico(historicoFiltrado);
  };

  const onDayPress = (day) => {
    setFiltroData(day);
    setMostrarDatePicker(false);
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
          values={["Todos", "Data", "Nome"]}
          selectedIndex={selectedIndex}
          onTabPress={(index) => {
            setSelectedIndex(index);
            setFiltroTipo(
              index === 0 ? "todos" : index === 1 ? "data" : "nome"
            );
          }}
        />

        {filtroTipo === "data" && (
          <View>
            <TouchableOpacity
              onPress={() => setMostrarDatePicker(true)}
              style={styles.button}
            >
              <Text style={{ color: "white" }}>{`Data: ${
                filtroData.dateString || "Selecione uma data"
              }`}</Text>
            </TouchableOpacity>
            {mostrarDatePicker && (
              <Calendar
                onDayPress={onDayPress}
                markedDates={{ [filtroData.dateString]: { selected: true } }}
                style={styles.calendar}
              />
            )}
          </View>
        )}

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
          data={historico}
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
