import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import styles from "../ConvidarScreen/style";

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
    if (!apartamento || !telefone || !nomeConvidado || !documento) {
      Alert.alert("Preencha todos os campos corretamente");
      return;
    }

    if (telefone.length !== 11) {
      Alert.alert("Preencha o campo de telefone corretamente");
      return;
    }

    if (documento.length !== 14) {
      Alert.alert("Preencha o campo de documento corretamente");
      return;
    }

    console.log("Apartamento:", apartamento);
    console.log("Complemento:", complemento);
    console.log("Telefone:", telefone);
    console.log("Nome do Convidado:", nomeConvidado);
    console.log("Documento:", documento);

    navigation.goBack();
  };

  const formatPhoneNumber = (text) => {
    // Remove characters that are not digits
    const cleanedText = text.replace(/\D/g, "");

    // Check if it's a valid length for a phone number
    if (cleanedText.length >= 2) {
      // Format the first two digits within parentheses
      setTelefone(`(${cleanedText.slice(0, 2)}) ${cleanedText.slice(2)}`);
    } else {
      setTelefone(cleanedText);
    }
  };

  const formatCPF = (text) => {
    // Remove characters that are not digits
    const cleanedText = text.replace(/\D/g, "");

    // Check if it's a valid length for a CPF
    if (cleanedText.length >= 3) {
      // Format the first three digits with a dot
      setDocumento(`${cleanedText.slice(0, 3)}.`);
    }

    if (cleanedText.length >= 6) {
      // Format the next three digits with a dot
      setDocumento(`${cleanedText.slice(3, 6)}.`);
    }

    if (cleanedText.length >= 9) {
      // Format the next three digits with a dash
      setDocumento(`${cleanedText.slice(6, 9)}-`);
    }

    if (cleanedText.length >= 11) {
      // Add the remaining digits
      setDocumento(`${cleanedText.slice(9)}`);
    }
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
              placeholder={telefoneExampleVisible ? "Ex: (11) 91234-5678" : ""}
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
              placeholder={nomeConvidadoExampleVisible ? "Ex: João Silva" : ""}
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
              placeholder={documentoExampleVisible ? "Ex: 123.456.789-01" : ""}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Convidar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
