import React, { useContext } from "react";
import { View, Text } from "react-native";
import ListItems from "../components/ListItems";
import AppContext from "../Context/AppContext";

export default function Home() {
  const { user } = useContext(AppContext);

  return (
    <View>
      {user ? (
        <Text style={{ textAlign: "center", marginTop: "10%" }}>
          aktiv användare: {user.name}
        </Text>
      ) : (
        <Text> welcome </Text>
      )}
      <ListItems />
    </View>
  );
}
