import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../ConvidarScreen/style";

export default function ConvidarScreen() {
  const navigation = useNavigation();

  const [apartamento, setApartamento] = useState("");
  const [complemento, setComplemento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomeConvidado, setNomeConvidado] = useState("");
  const [documento, setDocumento] = useState("");

  const handleSave = () => {
    console.log("Apartamento:", apartamento);
    console.log("Complemento:", complemento);
    console.log("Telefone:", telefone);
    console.log("Nome do Convidado:", nomeConvidado);
    console.log("Documento:", documento);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Apartamento:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={apartamento}
            onChangeText={(text) => setApartamento(text)}
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
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do Convidado:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={nomeConvidado}
            onChangeText={(text) => setNomeConvidado(text)}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Documento:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={documento}
            onChangeText={(text) => setDocumento(text)}
            keyboardType="numeric" // Use "numeric" para exibir apenas o teclado numérico
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Convidar</Text>
      </TouchableOpacity>
    </View>
  );
}
