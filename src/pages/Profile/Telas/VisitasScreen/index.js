import { View, Text } from "react-native-animatable";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../../../api/baseURL";

export default function VisitasScreen() {
  //const [value, setValue] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/login")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>oiiiii</Text>
    </View>
  );
}