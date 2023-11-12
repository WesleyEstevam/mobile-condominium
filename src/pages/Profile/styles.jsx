import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
    },
    sidebar: {
      backgroundColor: "green",
      width: 150,
      padding: 10,
      justifyContent: "flex-start",
    },
    sidebarButton: {
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    sidebarButtonText: {
      fontSize: 16,
      color: 'white'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain", // Ajusta a imagem ao tamanho do componente
        margin: 10,
      },
  });

  export default styles;
