import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
const Stack = createStackNavigator();
import { useColorScheme } from "react-native";

export default function MyStack() {
  const scheme = useColorScheme();

  const MyTheme = {
    ...DarkTheme,
    colors: {
      primary: "rgb(255, 45, 85)",
      // background: "rgb(138,32,226)",
      text: "rgb(28, 28, 30)",
    },
  };
  return (
    <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme }>
      <Stack.Navigator  >
        <Stack.Screen  name="Hem" component={Home}   options={{headerTitleAlign: 'center',title: 'Hem'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
