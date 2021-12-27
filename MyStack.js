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
import AppContext from "./Context/AppContext"
import React, { useState } from "react";
import UpdateBook from "./screens/UpdateBook";
export default function MyStack() {
  const scheme = useColorScheme();
  const [book1, setBook1] = useState("jakobs book")
  const [book2, setBook2] = useState({
   name: "Update Book",
   code: "#ff00ff"
  })

  const allValues = React.useMemo(() => ({book1, setBook1, book2, setBook2}), [book1, setBook1, book2, setBook2]);

  const MyTheme = {
    ...DarkTheme,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "rgb(75,0,130)",
      text: "rgb(28, 28, 30)",
    },
  };
  return (
    <AppContext.Provider  value={allValues}>
    <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme }>
      <Stack.Navigator  >
        <Stack.Screen  name="Hem" component={Home}   options={{headerTitleAlign: 'center',title: 'Hem'}} />
        <Stack.Screen  name="Books" component={Books}   options={{headerTitleAlign: 'center',title: 'kollektion'}} />
        <Stack.Screen  name="AddBook" component={AddBook}   options={{headerTitleAlign: 'center',title: 'Lägg till'}} />
        <Stack.Screen  name="UpdateBook" component={UpdateBook}   options={{headerTitleAlign: 'center',title: 'Uppdatera'}} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppContext.Provider>
  );
}
