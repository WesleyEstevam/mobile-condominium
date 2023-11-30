import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PainelScreen from "../pages/Profile/Telas/PainelScreen";
import MoradorScreen from "../pages/Morador";
import ConvidarScreen from "../pages/Morador/Telas/ConvidarScreen";

import HistoricoScreen from "../pages/Morador/Telas/HistoricoScreen";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Morador" component={MoradorScreen} />
      <Stack.Screen name="PainelScreen" component={PainelScreen} />
      <Stack.Screen name="ConvidarScreen" component={ConvidarScreen} />
      <Stack.Screen name="HistoricoScreen" component={HistoricoScreen} />
    </Stack.Navigator>
  );
}
