import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Cor de fundo da tela
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 20, // Ajuste conforme necessário
    width: "100%",
  },
  bottomButton: {
    backgroundColor: "green", // Cor de fundo do botão
    padding: 10,
    borderRadius: 5,
  },
  bottomButtonText: {
    color: "#fff", // Cor do texto do botão
    fontWeight: "bold",
  },
});

export default styles;