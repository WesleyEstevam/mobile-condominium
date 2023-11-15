import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    button: {
      backgroundColor: "green",
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    buttonText: {
      color: "white",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 8,
      marginBottom: 10,
    },
    buttonContainer: {
      
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 20,
      paddingBottom: 20,
    },
  });

export default styles;