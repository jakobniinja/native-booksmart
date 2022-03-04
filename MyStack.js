import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useMemo, useState } from "react";
import BookShelf from "./components/BooksShellf";
import AppContext from "./Context/AppContext";
import AccountDetails from "./screens/AccountDetails";
import AddBook from "./screens/AddBook";
import Books from "./screens/Books";
import CreateUser from "./screens/CreateUser";
import Home from "./screens/Home";
import ScoreBoard from "./screens/ScoreBoard";
import UserAccounts from "./screens/UserAccounts";
import Vocbulary from "./screens/Vocbulary";
const Stack = createStackNavigator();

export default function MyStack() {
  const [name, setName] = useState("jakob");
  const [user, setUser] = useState({
    id: "1234-5678",
    name: "guest",
    age: "124",
    occupation: "golf",
  });

  const allValues = useMemo(
    () => ({ name, setName, user, setUser }),
    [name, setName, user, setUser]
  );

  return (
    <AppContext.Provider value={allValues}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitleAlign: "center", title: "Hem" }}
          />
          <Stack.Screen
            name="UserAccounts"
            component={UserAccounts}
            options={{ headerTitleAlign: "center", title: "Användar Konton" }}
          />
          <Stack.Screen
            name="CreateUser"
            component={CreateUser}
            options={{ headerTitleAlign: "center", title: "Skapa Konto" }}
          />
          <Stack.Screen
            name="AccountDetails"
            component={AccountDetails}
            options={{ headerTitleAlign: "center", title: "Redigera Konto" }}
          />
          <Stack.Screen
            name="BookShelf"
            component={BookShelf}
            options={{ headerTitleAlign: "center", title: "Book Hylla" }}
          />
          <Stack.Screen
            name="AddBook"
            component={AddBook}
            options={{ headerTitleAlign: "center", title: "Lägg till bok" }}
          />
          <Stack.Screen
            name="Vocabulary"
            component={Vocbulary}
            options={{ headerTitleAlign: "center", title: "Vidga ordbanken" }}
          />
          <Stack.Screen
            name="ScoreBoard"
            component={ScoreBoard}
            options={{ headerTitleAlign: "center", title: "Poängtavlan" }}
          />
          <Stack.Screen
            name="Books"
            component={Books}
            options={{ headerTitleAlign: "center", title: "Bibliotek" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
