import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
const Stack = createStackNavigator();
import { useColorScheme } from "react-native";
import Books from "./screens/Books";
import AddBook from "./screens/AddBook";

export default function MyStack() {
  const scheme = useColorScheme();

  const MyTheme = {
    ...DarkTheme,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "rgb(75,0,130)",
      text: "rgb(28, 28, 30)",
    },
  };
  return (
    <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme }>
      <Stack.Navigator  >
        <Stack.Screen  name="Hem" component={Home}   options={{headerTitleAlign: 'center',title: 'Hem'}} />
        <Stack.Screen  name="Books" component={Books}   options={{headerTitleAlign: 'center',title: 'kollektion'}} />
        <Stack.Screen  name="AddBook" component={AddBook}   options={{headerTitleAlign: 'center',title: 'Lägg till'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
