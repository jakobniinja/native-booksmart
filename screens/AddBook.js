import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {Picker, FormItem} from "react-native-form-component"
import AppContext from  "../Context/AppContext"
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../Firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function AddBook() {

  const [lastRead, setLastRead] = useState()
  const navigation = useNavigation();
   const [users, setUsers] = useState([]);
  const {book1, setBook1} = useContext(AppContext)
  const [number, setNumber] = useState(1)
  const [title, setTitle] = useState("")
  const [pages, setPages] = useState(0 )
  const [image, setImage] = useState("")
  
    const usersCollectionRef = collection(db, "users", );
  const [items, setItems] = React.useState([
    { name: `${book1}`, code: "#8a2be2" },
  ]);

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
     setLastRead(
       date + '/' + month + '/' + year 
    );
  }, [])
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getBooks = async() => {
      data = await firebase.firestore()
.collection("users")
.doc(getUsers.id)
.collection('books')
.get()
console.log(data)
    }

    getUsers();
    getBooks();
  }, []);  





    const createBook= async () => {
    await addDoc(usersCollectionRef, {title: title, pages:pages, lastread: lastRead, ImageURL:image, points: pages/3 });
  };
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
    <FormItem
    placeholder="Image url"
    isRequired
    value={image}
    onChangeText={(image) =>setImage(image)}
    asterik
  />
  <View style={{display: "flex", flexDirection: "column", marginLeft:" 38%", width:"92%"}}>
    <TouchableOpacity  onPress={() => {
createBook;
navigation.goBack();
    }} >
      <Button title="create"style={{width: "120px", marginTop: 10}}  />
    </TouchableOpacity>
    <TouchableOpacity  >
      <Button title="update"style={{width: "120px", marginTop: 10}} />
    </TouchableOpacity>
    <TouchableOpacity  >
      <Button title="delete" variant="outlined" style={{width: "120px", marginTop: 10}}/>
    </TouchableOpacity>
  </View>

  
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
    width: "92%",
    marginLeft: "65%",

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
