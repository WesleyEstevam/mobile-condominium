import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen name="SignIn" component={SignIn} />

      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
