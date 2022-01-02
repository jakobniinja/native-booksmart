import React, { useContext, useState,  useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import  FlatGrid  from "react-native-super-grid";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../Context/AppContext";
import BookGrid from "./BookGrid";

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  pBtn: {
          backgroundColor: "#8a2be2",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5,
          paddingVertical: 10,
          width: 300,
          alignItems: "center",
          justifyContent:"center",
         marginLeft: "10.5%", 
          marginTop: 15
  }
});

export default function BookShelf() {
  const { setBook2, user, setUser } = useContext(AppContext);
  const navigation = useNavigation();
  
  useEffect(() => {
    setUser(user)
  }, [])

  return (
    <>
    {user ? (
    <Text  style={{textAlign: 'center', fontSize: 15}} > Tja,  {user.name} </Text>
    ) : (null)}
      <Button
        title="Extend Collection"
        onPress={() => {
          navigation.navigate("AddBook");
        }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={styles.pBtn}
      />
      <BookGrid/>
    </>
  );
}
