import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    flex: 8,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    marginBottom: 10,
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
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  characterCount: {
    alignSelf: "flex-end",
    color: "#777",
  },
  label: {
    marginTop: 30,
    fontSize: 18,
  },
});

export default styles;
