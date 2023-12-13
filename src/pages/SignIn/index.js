import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { baseURL } from "../../api/baseURL";

export default function SignIn() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Preencha o campo corretamente");
    }

    if (!password.trim()) {
      setPasswordError("Preencha o campo corretamente");
    }

    if (!emailError && !passwordError) {
    }

    const response = await axios.get(
      baseURL + "login/" + email + "/" + password
    );

    if (response.status === 200 && response.data != "") {
      console.log(response);
      const user = response.data;

      if (user.role === "morador" || user.role === "Morador") {
        navigation.navigate("Morador");
      } else {
        navigation.navigate("Profile");
      }
    } else {
      setEmailError("E-mail inválido");
      setPasswordError("Senha inválida");
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={600}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email..."
          style={[styles.input, emailError && styles.errorInput]}
          onChangeText={(text) => {
            setEmailError("");
            setEmail(text);
          }}
        />
        <Text style={styles.errorMessage}>{emailError}</Text>

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha..."
          style={[styles.input, passwordError && styles.errorInput]}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => {
            setPasswordError("");
            setPassword(text);
          }}
        />
        <Text style={styles.errorMessage}>{passwordError}</Text>

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={togglePasswordVisibility}
        >
          <Text style={styles.toggleButtonText}>
            {showPassword ? "Ocultar Senha" : "Mostrar Senha"}
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <Text style={styles.registerText}>
            Não possui uma conta?{" "}
            <Text
              style={styles.buttonCadastro}
              onPress={() => navigation.navigate("Register")}
            >
              Cadastre-se
            </Text>
          </Text>
        </View>

        {/*<TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.goBackButtonText}>Voltar ao início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Porteiro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Morador")}
        >
          <Text style={styles.buttonText}>Tela Morador</Text>
        </TouchableOpacity>*/}
      </Animatable.View>
    </View>
  );
}
