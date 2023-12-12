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
  informationsContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  informationLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  informationText: {
    fontSize: 16,
    marginBottom: 15,
  },
  informationTextBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
