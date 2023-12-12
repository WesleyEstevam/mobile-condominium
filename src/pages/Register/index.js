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
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [codCondominio, setCodCondominio] = useState("");
  const [empresa, setEmpresa] = useState("");


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
        console.log("register:")
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Ops! Deu erro ${error}`);
        console.error(error);
      });
  }, []);

  const handleRegister = () => {
    let tipoCadastro = selectedOption;

    if(tipoCadastro == "Morador"){
      tipoCadastro = "morador";
    } else if (tipoCadastro == "Funcionário") {
      tipoCadastro = "prestador";
    }

    const payloadRegister = {
      nomePessoa: nomeCompleto,
      empresa: empresa,
      email: email,
	    quadra: "01",
	    lote: "01",
	    bloco: "A",
	    apartamento: codCondominio,
	    nomeTipo: tipoCadastro,
	    documento: "010203"
    }

    const payloadLogin = {
      nomeUsuario: email,
      senha: password,
      role: tipoCadastro
    }

    if (tipoCadastro == "morador") {
      axios.post(baseURL + "morador", payloadRegister)
        .then(() => {
          console.log("Morador cadastrado com sucesso!")
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      axios.post(baseURL + "prestador", payloadRegister)
        .then(() => {
          console.log("Funcionário cadastrado com sucesso!")
        })
        .catch((e) => {
          console.error(e);
        });
    }

    axios.post(baseURL + "login/novoUsuario", payloadLogin)
      .then(() => {
        console.log("Login cadastrado com sucesso!")
      })
      .catch((e) => {
        console.error(e);
      });

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

          {/* Renderização condicional baseada na opção selecionada */}
          {selectedOption === "Morador" && (
            <>
              <Text style={styles.title}>Nome Completo</Text>
              <TextInput
                placeholder="Seu nome completo"
                style={styles.input}
                value={nomeCompleto}
                onChangeText={(text) => setNomeCompleto(text)}
              />

              <Text style={styles.title}>Email</Text>
              <TextInput
                placeholder="nome@email.com"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

              <Text style={styles.title}>Código do Condomínio</Text>
              <TextInput
                placeholder="Insira o código aqui"
                style={styles.input}
                value={codCondominio}
                onChangeText={(text) => setCodCondominio(text)}
              />

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
            </>
          )}

          {selectedOption === "Funcionário" && (
            <>
              <Text style={styles.title}>Nome Completo</Text>
              <TextInput
                placeholder="Seu nome completo"
                style={styles.input}
                value={nomeCompleto}
                onChangeText={(text) => setNomeCompleto(text)}
              />

              <Text style={styles.title}>Empresa</Text>
              <TextInput
                placeholder="Nome da Empresa"
                style={styles.input}
                value={empresa}
                onChangeText={(text) => setEmpresa(text)}
              />

              <Text style={styles.title}>Código do Condomínio</Text>
              <TextInput
                placeholder="Insira o código aqui"
                style={styles.input}
                value={codCondominio}
                onChangeText={(text) => setCodCondominio(text)}
              />

              <Text style={styles.title}>Email</Text>
              <TextInput
                placeholder="nome@email.com"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

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
            </>
          )}

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
