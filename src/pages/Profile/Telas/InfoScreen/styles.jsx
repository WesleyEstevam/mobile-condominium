import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  containerHeader: {
    marginTop: "10%",
    marginBottom: "2%",
    paddingStart: "5%",
    alignItems: "flex-start",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginLeft: 20,
  },
  containerForm: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    width: "100%",
    alignItems: "left",
    paddingBottom: "50%",
  },
  inputContainer: {
    // Adapte conforme necessário
    marginTop: 20,
  },
  inputWrapper: {
    // Adapte conforme necessário
  },
  input: {
    borderBottomWidth: 1,
    height: 30,
    marginBottom: 20,
    fontSize: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "green",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    marginTop: 30,
    fontSize: 18,
  },
});

export default commonStyles;
