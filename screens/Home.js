import React, { useContext } from "react";
import { View } from "react-native";
import ListItems from "../components/ListItems";
import AppContext from "../Context/AppContext";

export default function Home() {
  const { user } = useContext(AppContext);

  return (
    <View>
      {user ? <h4 style={{textAlign: "center", marginTop: "10%"}} > aktiv användare: {user.name} </h4> : <h2> welcome </h2>}
      <ListItems />
    </View>
  );
}
