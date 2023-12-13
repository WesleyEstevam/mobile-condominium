import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import styles from "../OcorrenciaScreen/style";
import axios from "axios";
import { baseURL } from "../../../../api/baseURL";

export default function OcorrenciaScreen() {
  const navigation = useNavigation();
  const [tipoOcorrencia, setTipoOcorrencia] = useState("");
  const [descricaoOcorrencia, setDescricaoOcorrencia] = useState("");
  const [identificacao, setIdentificacao] = useState("");

  const [tipoOcorrenciaExampleVisible, setTipoOcorrenciaExampleVisible] =
    useState(true);

  const handleSave = () => {
    if (!tipoOcorrencia || !descricaoOcorrencia || !identificacao) {
      Alert.alert("Preencha todos os campos corretamente");
      return;
    }

    const ocorrenciaData = {
      nomePorteiro: "seu Zé",
      descOcorrencia: descricaoOcorrencia,
      descTipoOcorrencia: tipoOcorrencia,
      descStatusOcorrencia: "Em andamento",
    };

    axios
      .post(baseURL + "ocorrencia", ocorrenciaData)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.error(e);
      });

    console.log("Tipo de Ocorrência:", tipoOcorrencia);
    console.log("Descrição da Ocorrência:", descricaoOcorrencia);
    console.log("Identificação:", identificacao);

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animatable.View
          animation="fadeInLeft"
          delay={600}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Ocorrência</Text>
        </Animatable.View>

        <View style={styles.containerForm}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>*Tipo de Ocorrência:</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={tipoOcorrencia}
                onChangeText={(text) => setTipoOcorrencia(text)}
                onFocus={() => setTipoOcorrenciaExampleVisible(false)}
                onBlur={() => setTipoOcorrenciaExampleVisible(true)}
                placeholder="Furto, briga, etc"
              />
            </View>
          </View>

          <View style={[styles.inputContainer, styles.textAreaContainer]}>
            <Text style={styles.label}>Descreva a Ocorrência:</Text>
            <View style={[styles.inputWrapper, styles.textAreaWrapper]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={descricaoOcorrencia}
                onChangeText={(text) => setDescricaoOcorrencia(text)}
                multiline
                maxLength={500}
                placeholder="Insira seu texto aqui..."
              />
              <Text style={styles.characterCount}>
                {500 - descricaoOcorrencia.length} caracteres restantes
              </Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>*Identificação:</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={identificacao}
                onChangeText={(text) => setIdentificacao(text)}
                onFocus={() => setTipoOcorrenciaExampleVisible(false)}
                onBlur={() => setTipoOcorrenciaExampleVisible(true)}
                placeholder="Nome, apartamento"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
