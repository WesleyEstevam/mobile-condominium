import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 20, 
    width: "100%",
    backgroundColor: "green", 
    paddingVertical: 10, 
  },
  bottomButton: {
    padding: 10,
    borderRadius: 5,
  },
  bottomButtonText: {
    color: "#fff", 
    fontWeight: "bold",
  },
});

export default styles;
