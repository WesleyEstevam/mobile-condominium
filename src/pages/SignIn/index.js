import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        <TextInput placeholder="Digite um email..." style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha..."
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={togglePasswordVisibility}
        >
          <Text style={styles.toggleButtonText}>
            {showPassword ? "Ocultar Senha" : "Mostrar Senha"}
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity style={styles.button}>
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

        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.goBackButtonText}>Voltar ao início</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  containerForm: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "green",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  toggleButtonText: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: "bold",
  },
  bottomButtonsContainer: {
    alignItems: "center",
  },
  registerText: {
    color: "#a1a1a1",
    marginTop: 14,
  },
  buttonCadastro: {
    fontWeight: "bold",
    color: "black",
  },
  goBackButton: {
    alignSelf: "center",
    marginTop: 14,
  },
  goBackButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});