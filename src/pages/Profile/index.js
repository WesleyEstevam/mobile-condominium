import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import MoradorStyles from "../Morador/style";
import sidebarImage from "../../assets/LOGO_TRANSPARENTE.png";
import { RNCamera } from "react-native-camera";

export default function Profile() {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Permissão de Câmera",
          message: "Precisamos da sua permissão para acessar a câmera",
          buttonNeutral: "Pergunte-me depois",
          buttonNegative: "Cancelar",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigation.navigate("CameraScreen");
      } else {
        console.log("Permissão de câmera negada");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={MoradorStyles.container}>
      <View
        style={[
          MoradorStyles.bottomButtonsContainer,
          { backgroundColor: "green" },
        ]}
      >
        <TouchableOpacity
          style={MoradorStyles.bottomButton}
          onPress={() => handleNavigation("PainelScreen")}
        >
          <Icon name="profile" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={MoradorStyles.bottomButton}
          onPress={requestCameraPermission}
        >
          <Icon name="camerao" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
