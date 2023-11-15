import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function PainelScreen() {
  const navigation = useNavigation();

  const [numeroImoveis, setNumeroImoveis] = useState(0);
  const [numeroMoradores, setNumeroMoradores] = useState(0);
  const [numeroCondominio, setNumeroCondominio] = useState(0);
  const [numeroOcorrencias, setNumeroOcorrencias] = useState(0);

  const [anteriorImoveis, setAnteriorImoveis] = useState(0);
  const [anteriorMoradores, setAnteriorMoradores] = useState(0);
  const [anteriorCondominio, setAnteriorCondominio] = useState(0);
  const [anteriorOcorrencias, setAnteriorOcorrencias] = useState(0);

  const calcularVariacaoPercentual = (atual, anterior) => {
    if (anterior === 0) return "N/A";
    const variacao = ((atual - anterior) / anterior) * 100;
    return variacao.toFixed(2) + "%";
  };

  const atualizarValores = () => {
    setAnteriorImoveis(numeroImoveis);
    setAnteriorMoradores(numeroMoradores);
    setAnteriorCondominio(numeroCondominio);
    setAnteriorOcorrencias(numeroOcorrencias);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={atualizarValores} style={styles.button}>
        <Text style={styles.buttonText}>Atualizar Valores</Text>
      </TouchableOpacity>

      <Text>Imóveis: {numeroImoveis}</Text>
      <Text>Moradores: {numeroMoradores}</Text>
      <Text>Condomínio: {numeroCondominio}</Text>
      <Text>Ocorrências: {numeroOcorrencias}</Text>

      <Text>
        Variação Imóveis:{" "}
        {calcularVariacaoPercentual(numeroImoveis, anteriorImoveis)}
      </Text>
      <Text>
        Variação Moradores:{" "}
        {calcularVariacaoPercentual(numeroMoradores, anteriorMoradores)}
      </Text>
      <Text>
        Variação Condomínio:{" "}
        {calcularVariacaoPercentual(numeroCondominio, anteriorCondominio)}
      </Text>
      <Text>
        Variação Ocorrências:{" "}
        {calcularVariacaoPercentual(numeroOcorrencias, anteriorOcorrencias)}
      </Text>
    </View>
  );
}
