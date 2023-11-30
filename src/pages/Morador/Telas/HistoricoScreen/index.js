import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import * as Animatable from "react-native-animatable";

import styles from "../HistoricoScreen/style";

const historicoData = [
  { id: 1, nome: "João", data: "28-11-2023" },
  { id: 2, nome: "Maria", data: "27-11-2023" },
];

export default function HistoricoScreen() {
  const navigation = useNavigation();

  const [historico, setHistorico] = useState(historicoData);
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroData, setFiltroData] = useState({
    dia: "1",
    mes: "1",
    ano: "2000",
  });
  const [filtroNome, setFiltroNome] = useState("");
  const [mostrarListaDia, setMostrarListaDia] = useState(false);
  const [mostrarListaMes, setMostrarListaMes] = useState(false);
  const [mostrarListaAno, setMostrarListaAno] = useState(false);

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
    let historicoFiltrado = [...historicoData];

    if (filtroTipo === "data") {
      historicoFiltrado = historicoFiltrado.filter((item) => {
        const [dia, mes, ano] = item.data.split("-");
        return (
          dia === filtroData.dia &&
          mes === filtroData.mes &&
          ano === filtroData.ano
        );
      });
    } else if (filtroTipo === "nome" && filtroNome.trim() !== "") {
      historicoFiltrado = historicoFiltrado.filter((item) =>
        item.nome.toLowerCase().includes(filtroNome.toLowerCase())
      );
    }

    setHistorico(historicoFiltrado);
  };

  const buttonStyle = {
    ...styles.button,
    color: "white",
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
        <Picker
          selectedValue={filtroTipo}
          onValueChange={(itemValue) => {
            setFiltroTipo(itemValue);
            setFiltroData({ dia: "1", mes: "1", ano: "2000" });
            setMostrarListaDia(false);
            setMostrarListaMes(false);
            setMostrarListaAno(false);
          }}
        >
          <Picker.Item label="Filtrar por todos" value="todos" />
          <Picker.Item label="Filtrar por data" value="data" />
          <Picker.Item label="Filtrar por nome" value="nome" />
        </Picker>

        {filtroTipo === "data" && (
          <View>
            <TouchableOpacity
              onPress={() => setMostrarListaDia(!mostrarListaDia)}
              style={{ ...buttonStyle, backgroundColor: "green" }}
            >
              <Text style={{ color: "white" }}>{`Dia: ${filtroData.dia}`}</Text>
            </TouchableOpacity>
            {mostrarListaDia && (
              <Picker
                selectedValue={filtroData.dia}
                onValueChange={(itemValue) =>
                  setFiltroData((prevState) => ({
                    ...prevState,
                    dia: itemValue,
                  }))
                }
              >
                {diasDoMes.map((item, index) => (
                  <Picker.Item
                    label={item.label}
                    value={item.value}
                    key={index}
                    style={styles.pickerItem}
                  />
                ))}
              </Picker>
            )}

            <TouchableOpacity
              onPress={() => setMostrarListaMes(!mostrarListaMes)}
              style={{ ...buttonStyle, backgroundColor: "green" }}
            >
              <Text style={{ color: "white" }}>{`Mês: ${
                mesesDoAno.find((m) => m.value === filtroData.mes)?.label
              }`}</Text>
            </TouchableOpacity>
            {mostrarListaMes && (
              <Picker
                selectedValue={filtroData.mes}
                onValueChange={(itemValue) =>
                  setFiltroData((prevState) => ({
                    ...prevState,
                    mes: itemValue,
                  }))
                }
              >
                {mesesDoAno.map((item, index) => (
                  <Picker.Item
                    label={item.label}
                    value={item.value}
                    key={index}
                    style={styles.pickerItem}
                  />
                ))}
              </Picker>
            )}

            <TouchableOpacity
              onPress={() => setMostrarListaAno(!mostrarListaAno)}
              style={{ ...buttonStyle, backgroundColor: "green" }}
            >
              <Text style={{ color: "white" }}>{`Ano: ${filtroData.ano}`}</Text>
            </TouchableOpacity>
            {mostrarListaAno && (
              <Picker
                selectedValue={filtroData.ano}
                onValueChange={(itemValue) =>
                  setFiltroData((prevState) => ({
                    ...prevState,
                    ano: itemValue,
                  }))
                }
              >
                {anosDisponiveis.map((item, index) => (
                  <Picker.Item
                    label={item.label}
                    value={item.value}
                    key={index}
                    style={styles.pickerItem}
                  />
                ))}
              </Picker>
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

        <Button title="Filtrar" onPress={handleFiltrar} style={buttonStyle} />

        <FlatList
          data={historico}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text>{`Nome: ${item.nome}, Data: ${item.data}`}</Text>
            </View>
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
