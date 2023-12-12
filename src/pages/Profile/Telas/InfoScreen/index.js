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
import styles from "../InfoScreen/styles";

export default function InfoScreen() {
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

    // Navegar para Profile e passar os valores como parâmetros
    navigation.navigate("Profile", {
      tipoOcorrencia,
      descricaoOcorrencia,
      identificacao,
    });
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
          <Text style={styles.message}>Informações</Text>
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
                placeholder={
                  tipoOcorrenciaExampleVisible
                    ? "Ex: Reunião, Manutenção, etc"
                    : ""
                }
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
