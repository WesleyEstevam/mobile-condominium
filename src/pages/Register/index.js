import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import axios from "axios";
import { baseURL } from "../../api/baseURL";

export default function Register() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Morador");
  const [phoneNumber, setPhoneNumber] = useState("");

  const options = ["Morador", "Funcionário"];

  const handleRepeatPasswordChange = (text) => {
    setRepeatPassword(text);

    if (password !== "" && text !== password) {
      setPasswordError("Senhas diferentes");
    } else {
      setPasswordError("");
    }
  };

  useEffect(() => {
    axios
      .get(`${baseURL}login`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Ops! Deu erro ${error}`);
        console.error(error);
      });
  }, []);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View style={styles.container}>
        <Animatable.View
          animation="fadeInLeft"
          delay={600}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Cadastre-se</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Selecione o tipo:</Text>
          <View style={styles.segmentedControl}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.segmentedControlItem,
                  option === selectedOption &&
                    styles.segmentedControlItemSelected,
                ]}
                onPress={() => {
                  setSelectedOption(option);
                }}
              >
                <Text
                  style={[
                    styles.segmentedControlText,
                    option === selectedOption &&
                      styles.segmentedControlTextSelected,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.title}>Nome Completo</Text>
          <TextInput placeholder="Registrar" style={styles.input} />

          <Text style={styles.title}>Documento</Text>
          <TextInput
            placeholder="Registrar"
            style={styles.input}
            keyboardType="numeric"
          />

          <Text style={styles.title}>Empresa</Text>
          <TextInput placeholder="Ifood" style={styles.input} />

          <Text style={styles.title}>Nome do Pai</Text>
          <TextInput placeholder="Sr. Antonio" style={styles.input} />

          <Text style={styles.title}>Nome da Mãe</Text>
          <TextInput placeholder="Sra. Maria" style={styles.input} />

          <Text style={styles.title}>Email</Text>
          <TextInput placeholder="nome@email.com" style={styles.input} />

          <Text style={styles.title}>Quadra</Text>
          <TextInput placeholder="Ex: 10" style={styles.input} />

          <Text style={styles.title}>Lote</Text>
          <TextInput placeholder="Ex: 2" style={styles.input} />

          <Text style={styles.title}>Nome </Text>
          <TextInput placeholder="" style={styles.input} />

          <Text style={styles.title}>Apartamento</Text>
          <TextInput placeholder="Ex: 105" style={styles.input} />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Text style={styles.title}>Repetir Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={handleRepeatPasswordChange}
            value={repeatPassword}
          />

          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </KeyboardAwareScrollView>
  );
}
