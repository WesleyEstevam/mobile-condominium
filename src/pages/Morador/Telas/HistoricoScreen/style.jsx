import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    marginBottom: 16,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 16,
  },
  containerHeader: {
    marginTop: "10%",
    marginBottom: "2%",
    paddingStart: "5%",
    alignItems: "flex-start",
    backgroundColor: "green",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginLeft: 20,
  },
  pickerItem: {
    fontSize: 16,
    color: "black",
  },
});

export default styles;
