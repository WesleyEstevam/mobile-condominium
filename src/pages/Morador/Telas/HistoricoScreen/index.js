import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import * as Animatable from "react-native-animatable";
import { Calendar } from "react-native-calendars";

import styles from "../HistoricoScreen/style";

const historicoData = [
  { id: 1, nome: "João", data: "2023-11-28" },
  { id: 2, nome: "Maria", data: "2023-11-27" },
];

export default function HistoricoScreen() {
  const navigation = useNavigation();

  const [historico, setHistorico] = useState(historicoData);
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroData, setFiltroData] = useState({});
  const [filtroNome, setFiltroNome] = useState("");
  const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleFiltrar = () => {
    let historicoFiltrado = [...historicoData];

    if (filtroTipo === "data") {
      historicoFiltrado = historicoFiltrado.filter((item) => {
        const [ano, mes, dia] = item.data.split("-");
        const dataItem = `${ano}-${mes}-${dia}`;
        return dataItem === filtroData.dateString;
      });
    } else if (filtroTipo === "nome" && filtroNome.trim() !== "") {
      historicoFiltrado = historicoFiltrado.filter((item) =>
        item.nome.toLowerCase().includes(filtroNome.toLowerCase())
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

        <ScrollView>
          {historico.map((item) => (
            <View style={styles.itemContainer} key={item.id}>
              <Text>{`Nome: ${item.nome}, Data: ${item.data}`}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
