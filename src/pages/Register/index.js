import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Morador");
  const [selectedFunction, setSelectedFunction] = useState("");

  const options = ["Morador", "Funcionário"];
  const functions = [
    "Segurança",
    "Zelador",
    "Jardineiro",
    "Manutenção",
    "Síndico",
  ];

  const handleRepeatPasswordChange = (text) => {
    setRepeatPassword(text);

    if (password !== "" && text !== password) {
      setPasswordError("Senhas diferentes");
    } else {
      setPasswordError("");
    }
  };

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
                  setSelectedFunction("");
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

          {selectedOption === "Funcionário" && (
            <View>
              <Text style={styles.title}>Tipo de Funcionário:</Text>
              <View style={styles.segmentedControl}>
                {functions.map((func) => (
                  <TouchableOpacity
                    key={func}
                    style={[
                      styles.segmentedControlItem,
                      func === selectedFunction &&
                        styles.segmentedControlItemSelected,
                    ]}
                    onPress={() => setSelectedFunction(func)}
                  >
                    <Text
                      style={[
                        styles.segmentedControlText,
                        func === selectedFunction &&
                          styles.segmentedControlTextSelected,
                      ]}
                    >
                      {func}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          <Text style={styles.title}>Nome Completo</Text>
          <TextInput placeholder="Registrar" style={styles.input} />

          <Text style={styles.title}>CPF</Text>
          <TextInput
            placeholder="Registrar"
            style={styles.input}
            keyboardType="numeric"
          />

          <Text style={styles.title}>Telefone</Text>
          <TextInput
            placeholder="Registrar"
            style={styles.input}
            keyboardType="numeric"
          />

          <Text style={styles.title}>Email</Text>
          <TextInput placeholder="Registrar" style={styles.input} />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder="Registrar"
            style={styles.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Text style={styles.title}>Repetir Senha</Text>
          <TextInput
            placeholder="Registrar"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
  },
  containerHeader: {
    marginTop: "10%",
    marginBottom: "2%",
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
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    marginTop: 14,
  },
  backButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  segmentedControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  segmentedControlItem: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    alignItems: "center",
  },
  segmentedControlText: {
    color: "black",
  },
  segmentedControlItemSelected: {
    backgroundColor: "green",
  },
  segmentedControlTextSelected: {
    color: "white",
  },
});
