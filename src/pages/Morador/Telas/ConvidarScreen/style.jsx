import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    justifyContent: "left", 
    alignItems: "left", 
    
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
    alignItems: "left", 
    
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
    width: "100%", // Take the full width
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
  errorText: {
    color: "red",
    marginTop: 5,
  },
  backButton: {
    marginTop: 14,
  },
  backButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  segmentedControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "100%",
  },
  segmentedControlItem: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    alignItems: "center",
  },
  segmentedControlText: {
    color: "black",
  },
  segmentedControlItemSelected: {
    backgroundColor: "green",
  },
  segmentedControlTextSelected: {
    color: "white",
  },
  label: {
    marginTop: 30,
    fontSize: 18,
  },
});

export default styles;
