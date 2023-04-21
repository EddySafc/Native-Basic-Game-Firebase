import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function LoginTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Log-in"
        component={LoginScreen}
        options={{ headerShown: false, title: "Welcome" }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, title: "Welcome" }}
      />
    </Stack.Navigator>
  );
}

export default LoginTab;
