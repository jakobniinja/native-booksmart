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
});

export default function BookShelf() {
  const { setBook2 } = useContext(AppContext);
  const navigation = useNavigation();
  const [items, setItems] = React.useState([
    { name: "TURQUOISE", code: "#1abc9c" },
    { name: "ASBESTOS", code: "#7f8c8d" },
  ]);
  
  useEffect(() => {
    return () => {
      setBook2({})
    }
  }, [])

  return (
    <>
      <Button
        title="Extend Collection"
        onPress={() => {
          navigation.navigate("AddBook");
        }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
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
        }}
      />
      <BookGrid/>
      {/* <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setBook2({ name: item.name,code: item.code });
              navigation.navigate("UpdateBook");
            }}
          >
            <View
              style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          </TouchableOpacity>
        )}
      /> */}
    </>
  );
}
