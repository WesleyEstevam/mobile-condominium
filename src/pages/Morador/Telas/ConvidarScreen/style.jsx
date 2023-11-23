import { StyleSheet } from "react-native";
import commonStyles from "../../style";

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "green",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default { ...commonStyles, ...localStyles };
