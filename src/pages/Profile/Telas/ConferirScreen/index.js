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
import * as Animatable from "react-native-animatable";
import styles from "../InfoScreen/styles";
import axios from "axios";
import { baseURL } from "../../../../api/baseURL";

export default function ConferirScreen() {
  const [documentoConvidado, setDocumentoConvidado] = useState("");
  const [resultadoValidacao, setResultadoValidacao] = useState(null);

  const handleAnalisar = async () => {
    try {
      const response = await axios.get(
        baseURL + `visitante/${documentoConvidado}`
      );

      if (response.data) {
        setResultadoValidacao("Entrada Autorizada");
      } else {
        setResultadoValidacao("Entrada Não Autorizada");
      }
    } catch (error) {
      console.error("Erro ao validar documento:", error);
      setResultadoValidacao("Erro na validação");
    }
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
          <Text style={styles.message}>Conferir Documento</Text>
        </Animatable.View>

        <View style={styles.containerForm}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              *Digite Aqui o Documento do Convidado:
            </Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={documentoConvidado}
                onChangeText={(text) => setDocumentoConvidado(text)}
                keyboardType="numeric"
                placeholder="Ex: 123.456.789-01"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAnalisar}>
          <Text style={styles.buttonText}>Analisar</Text>
        </TouchableOpacity>

        {resultadoValidacao !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{resultadoValidacao}</Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
