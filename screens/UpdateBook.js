
import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {Picker, FormItem} from "react-native-form-component"
import AppContext from  "../Context/AppContext"
import { TouchableOpacity } from "react-native-gesture-handler";


const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 140,
    width: "90%",
    marginLeft: "55%",

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

export default function UpdateBook() {
  const [updateLastRead, setUpdateLastRead] = useState()
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
      setUpdateLastRead(
       date + '/' + month + '/' + year 
    );
      
  }, [])

  const navigation = useNavigation();
  const [updateTitle, setUpdateTitle] = useState("")
  const [updatePages, setUpdatePages] = useState(0);
  const {book2 } = useContext(AppContext)
 
  const [items, setItems] = React.useState([
    { name: `${book2.name}`, code: `${book2.code}` },
  ]);
    return (
    <>
    <FormItem
    placeholder="Title"
    isRequired
    value={updateTitle}
    onChangeText={(updateTitle) => setUpdateTitle(updateTitle)}
    asterik
  />
    <FormItem
    placeholder="Pages"
    isRequired
    value={updatePages}
    onChangeText={(updatePages) =>  setUpdatePages(updatePages)}
    asterik
  />
    <FormItem
    placeholder="Lastread"
    isRequired
    value={updateLastRead}
    onChangeText={(updateLastRead) => setUpdateLastRead(updateLastRead)}
    asterik
  />
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <View   style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
          </TouchableOpacity>
        )}
        
      />
    </>
    
  );
}
