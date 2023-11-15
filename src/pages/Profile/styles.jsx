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
      alignItems: 'center',
    },
    sidebarButton: {
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    sidebarButtonText: {
      fontSize: 16,
      color: 'white',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain", 
        margin: 10,
      },
      sidebarImage: {
        
        width: 100,
        height: 100,
        marginBottom: 20,
        marginTop:10,
        alignItems: "center",
        
      },
  });

  export default styles;
