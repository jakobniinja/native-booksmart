import {
    NavigationContainer
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useMemo} from "react";
import AppContext from "./context/AppContext";
import AccountDetails from "./screens/AccountDetails";
import CreateUser from "./screens/CreateUser";
import Home from "./screens/Home";
import UserAccounts from "./screens/UserAccounts";
const Stack = createStackNavigator();

export default function MyStack() {
  const [name, setName] = useState("jakob")
  const [user, setUser] = useState({name: 'guest', age: '124', occupation : 'golf'});
  
  
  const allValues = React.useMemo(() => ({name, setName,user, setUser}), [name, setName,user, setUser]);

  return (
    <AppContext.Provider  value={allValues}>
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen  name="Hem" component={Home}   options={{headerTitleAlign: 'center',title: 'Hem'}} />
        <Stack.Screen  name="UserAccounts" component={UserAccounts}   options={{headerTitleAlign: 'center',title: 'Användar Konton'}} />
      <Stack.Screen  name="CreateUser" component={CreateUser}   options={{headerTitleAlign: 'center',title: 'Skapa Konto'}} />
      <Stack.Screen  name="AccountDetails" component={AccountDetails}   options={{headerTitleAlign: 'center',title: 'Redigera Konto'}} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppContext.Provider>
  );
}