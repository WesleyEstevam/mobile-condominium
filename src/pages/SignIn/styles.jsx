import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "green",
    },
    containerHeader: {
      marginTop: "70%",
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
    errorInput: {
      borderBottomColor: "red",
    },
    errorMessage: {
      color: "red",
      marginTop: 5,
      fontSize: 16,
    },
  });
  
  export default styles;