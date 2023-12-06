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
import styles from "../ConvidarScreen/style";
import axios from "axios";
import { baseURL } from "../../../../api/baseURL";

export default function ConvidarScreen() {
  const navigation = useNavigation();

  const [apartamento, setApartamento] = useState("");
  const [complemento, setComplemento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomeConvidado, setNomeConvidado] = useState("");
  const [documento, setDocumento] = useState("");

  const [apartamentoExampleVisible, setApartamentoExampleVisible] =
    useState(true);
  const [complementoExampleVisible, setComplementoExampleVisible] =
    useState(true);
  const [telefoneExampleVisible, setTelefoneExampleVisible] = useState(true);
  const [nomeConvidadoExampleVisible, setNomeConvidadoExampleVisible] =
    useState(true);
  const [documentoExampleVisible, setDocumentoExampleVisible] = useState(true);

  const handleSave = () => {
    let visitanteObj = {
      nomePessoa: nomeConvidado,
      documento: documento,
      nomeTipo: "visitante",
    };

    axios.post(baseURL + "visitante", visitanteObj);

    console.log("Apartamento:", apartamento);
    console.log("Complemento:", complemento);
    console.log("Telefone:", telefone);
    console.log("Nome do Convidado:", nomeConvidado);
    console.log("Documento:", documento);

    navigation.goBack();
  };

  const formatPhoneNumber = (text) => {
    const cleanedText = text.replace(/\D/g, "");

    if (cleanedText.length >= 2) {
      setTelefone(`(${cleanedText.slice(0, 2)}) ${cleanedText.slice(2)}`);
    } else {
      setTelefone(cleanedText);
    }
  };

  const formatCPF = (text) => {
    const cleanedText = text.replace(/\D/g, "");

    if (cleanedText.length <= 3) {
      setDocumento(cleanedText);
    } else if (cleanedText.length <= 6) {
      setDocumento(`${cleanedText.slice(0, 3)}.${cleanedText.slice(3)}`);
    } else if (cleanedText.length <= 9) {
      setDocumento(
        `${cleanedText.slice(0, 3)}.${cleanedText.slice(
          3,
          6
        )}.${cleanedText.slice(6)}`
      );
    } else {
      setDocumento(
        `${cleanedText.slice(0, 3)}.${cleanedText.slice(
          3,
          6
        )}.${cleanedText.slice(6, 9)}-${cleanedText.slice(9)}`
      );
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
          <Text style={styles.message}>Convidado</Text>
        </Animatable.View>

        <View style={styles.containerForm}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>*Apartamento:</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={apartamento}
                onChangeText={(text) => setApartamento(text)}
                onFocus={() => setApartamentoExampleVisible(false)}
                onBlur={() => setApartamentoExampleVisible(true)}
                placeholder={apartamentoExampleVisible ? "Ex: 123" : ""}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Complemento:</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={complemento}
                onChangeText={(text) => setComplemento(text)}
                onFocus={() => setComplementoExampleVisible(false)}
                onBlur={() => setComplementoExampleVisible(true)}
                placeholder={complementoExampleVisible ? "Ex: Apto 2" : ""}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>*Telefone:</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={telefone}
                onChangeText={(text) => formatPhoneNumber(text)}
                keyboardType="phone-pad"
                onFocus={() => setTelefoneExampleVisible(false)}
                onBlur={() => setTelefoneExampleVisible(true)}
                placeholder={
                  telefoneExampleVisible ? "Ex: (11) 91234-5678" : ""
                }
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>*Nome do Convidado:</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={nomeConvidado}
                onChangeText={(text) => setNomeConvidado(text)}
                onFocus={() => setNomeConvidadoExampleVisible(false)}
                onBlur={() => setNomeConvidadoExampleVisible(true)}
                placeholder={
                  nomeConvidadoExampleVisible ? "Ex: João Silva" : ""
                }
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>*Documento:</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={documento}
                onChangeText={(text) => formatCPF(text)}
                keyboardType="numeric"
                onFocus={() => setDocumentoExampleVisible(false)}
                onBlur={() => setDocumentoExampleVisible(true)}
                placeholder={
                  documentoExampleVisible ? "Ex: 123.456.789-01" : ""
                }
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Convidar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
