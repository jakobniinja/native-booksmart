import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {Picker, FormItem} from "react-native-form-component"
import { TouchableOpacity } from "react-native-gesture-handler";
import Appcontext from "../Context/AppContext"
import {db} from "../Firebase"
import { doc, collection, addDoc } from "firebase/firestore";


export default function AddBook() {

  


const d = new Date();
  const [lastRead, setLastRead] = useState("12: 00")
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
     setLastRead(
       hours + ':' + min  + " - " +date + '/' + month + '/' + year 
    );

  }, [])

  const navigation = useNavigation();
  const [number, setNumber] = useState(1)

  const [title, setTitle] = useState("Title")
  const [pages, setPages] = useState(0 )
  const [items, setItems] = React.useState([
    { name: `shu `, code: "#8a2be2" },
  ]);
  const {user} = useContext(Appcontext)

  const usersCollectionRef = collection(db, "users", user.id);
  const uC2 = collection(db, "users" );

  const UpdateBook= async(name, age, occupation) => {
    const userRef = doc(uC2,user.id , 'books');
        const newName = {name: name}
        const newAge= { age: age };
        const newOccupation = {occupation: occupation}
    await  addDoc(userRef, newName, newAge, newOccupation);
  }
    
    useNavigation('Books')
    ;
  
  return (
    <>
    <FormItem
    placeholder="Title"
    isRequired
    value={title}
    onChangeText={(title) => setTitle(title)}
    asterik
  />
    <FormItem
    placeholder="Pages"
    isRequired
    value={pages}
    onChangeText={(pages) =>  setPages(pages)}
    asterik
  />
    <FormItem
    placeholder="Lastread"
    isRequired
    value={lastRead}
    onChangeText={(lastRead) => setLastRead(lastRead)}
    asterik
  />
  <TouchableOpacity onPress={UpdateBook} >


      <FlatGrid
        itemDimension={130}
        
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code } ]}>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}

      />
    </TouchableOpacity>
    </>

  );

  };

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