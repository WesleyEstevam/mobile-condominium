import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function PainelScreen() {
  const navigation = useNavigation();

  const [numeroImoveis, setNumeroImoveis] = useState("");
  const [numeroMoradores, setNumeroMoradores] = useState("");
  const [numeroCondominio, setNumeroCondominio] = useState("");
  const [numeroOcorrencias, setNumeroOcorrencias] = useState("");

  const [anteriorImoveis, setAnteriorImoveis] = useState("");
  const [anteriorMoradores, setAnteriorMoradores] = useState("");
  const [anteriorCondominio, setAnteriorCondominio] = useState("");
  const [anteriorOcorrencias, setAnteriorOcorrencias] = useState("");

  const calcularVariacaoPercentual = (atual, anterior) => {
    if (anterior === "") return "N/A";
    const variacao =
      ((parseFloat(atual) - parseFloat(anterior)) / parseFloat(anterior)) * 100;
    return variacao.toFixed(2);
  };

  const atualizarValores = () => {
    setAnteriorImoveis(numeroImoveis);
    setAnteriorMoradores(numeroMoradores);
    setAnteriorCondominio(numeroCondominio);
    setAnteriorOcorrencias(numeroOcorrencias);
  };

  return (
    <View style={styles.container}>
      <Text>Número de Imóveis:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Número de imóveis"
        value={numeroImoveis}
        onChangeText={(text) => setNumeroImoveis(text)}
        onFocus={() => setNumeroImoveis("")}
        style={styles.input}
      />

      <Text>Número de Moradores:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Número de moradores"
        value={numeroMoradores}
        onChangeText={(text) => setNumeroMoradores(text)}
        onFocus={() => setNumeroMoradores("")}
        style={styles.input}
      />

      <Text>Número de Condomínio:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Mensalidade do Condomínio"
        value={numeroCondominio}
        onChangeText={(text) => setNumeroCondominio(text)}
        onFocus={() => setNumeroCondominio("")}
        style={styles.input}
      />

      <Text>Número de Ocorrências:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Número de ocorrências"
        value={numeroOcorrencias}
        onChangeText={(text) => setNumeroOcorrencias(text)}
        onFocus={() => setNumeroOcorrencias("")}
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={atualizarValores} style={styles.button}>
          <Text style={styles.buttonText}>Atualizar Valores</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color:
            calcularVariacaoPercentual(numeroImoveis, anteriorImoveis) < 0
              ? "red"
              : calcularVariacaoPercentual(numeroImoveis, anteriorImoveis) > 0
              ? "blue"
              : "black",
        }}
      >
        Variação Imóveis:{" "}
        {calcularVariacaoPercentual(numeroImoveis, anteriorImoveis)}%
      </Text>
      <Text
        style={{
          color:
            calcularVariacaoPercentual(numeroMoradores, anteriorMoradores) < 0
              ? "red"
              : calcularVariacaoPercentual(numeroMoradores, anteriorMoradores) >
                0
              ? "blue"
              : "black",
        }}
      >
        Variação Moradores:{" "}
        {calcularVariacaoPercentual(numeroMoradores, anteriorMoradores)}%
      </Text>
      <Text
        style={{
          color:
            calcularVariacaoPercentual(numeroCondominio, anteriorCondominio) < 0
              ? "red"
              : calcularVariacaoPercentual(
                  numeroCondominio,
                  anteriorCondominio
                ) > 0
              ? "blue"
              : "black",
        }}
      >
        Variação Condomínio:{" "}
        {calcularVariacaoPercentual(numeroCondominio, anteriorCondominio)}%
      </Text>
      <Text
        style={{
          color:
            calcularVariacaoPercentual(numeroOcorrencias, anteriorOcorrencias) <
            0
              ? "red"
              : calcularVariacaoPercentual(
                  numeroOcorrencias,
                  anteriorOcorrencias
                ) > 0
              ? "blue"
              : "black",
        }}
      >
        Variação Ocorrências:{" "}
        {calcularVariacaoPercentual(numeroOcorrencias, anteriorOcorrencias)}%
      </Text>
    </View>
  );
}
