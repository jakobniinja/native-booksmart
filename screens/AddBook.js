import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../Context/AppContext";
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
  const [lastRead, setLastRead] = useState("12:00");
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [image, setImage] = useState("");

  const usersCollectionRef = collection(db, "users");
  const booksCollectionref = doc(db, "users", "books");
  const [items, setItems] = React.useState([
    { name: `SpegelMannen`, code: "#8a2be2" },
  ]);

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    setLastRead(hours + ":" + min + " " + date + "/" + month + "/" + year);
  }, []);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(booksCollectionref);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getBooks = async () => {
      const data = await getDocs(booksCollectionref);
      console.log(data.docs.map(doc));
    };

    return () => {
      setUsers({}); // This worked for me
    };

    getUsers();
    getBooks();
  }, [users]);

  const createBook = async () => {
    await addDoc(usersCollectionRef, {
      title: title,
      pages: pages,
      lastread: lastRead,
      ImageURL: image,
      points: pages / 3,
    });
  };
  return (
    <>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{
          backgroundColor: "rgba(0,0,0, 0.6)",
          textAlign: "center",
          color: "gray",
          justifyContent: "center",
          height: 20,
          marginTop: 25,
          fontSize: 15,
          fontWeight: 500,
          padding: 15,
        }}
      />
      <TextInput
        placeholder="Pages"
        value={pages}
        onChangeText={(text) => setPages(text)}
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          textAlign: "center",
          justifyContent: "center",
          color: "gray",
          height: 20,
          marginBottom: 10,
          fontSize: 15,
          fontWeight: 500,
          padding: 15,
        }}
      />
      <TextInput
        placeholder="Lastread"
        value={lastRead}
        onChangeText={(text) => setLastRead(text)}
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          textAlign: "center",
          color: "gray",
          justifyContent: "center",
          height: 20,
          marginBottom: 10,
          fontSize: 15,
          fontWeight: 500,
          padding: 15,
        }}
      />
      <TextInput
        placeholder="Image url"
        value={image}
        onChangeText={(text) => setImage(text)}
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          textAlign: "center",
          color: "gray",
          justifyContent: "center",
          height: 20,
          marginBottom: 10,
          fontSize: 15,
          fontWeight: 500,
          padding: 15,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: " 33%",
          width: "92%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            createBook;
            navigation.goBack();
          }}
        >
          <Button
            title="create"
            buttonStyle={{ backgroundColor: "gray" }}
            style={{
              width: "120px",
              marginTop: 10,
              backgroundColor: `${items.code}`,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            title="update"
            buttonStyle={{ backgroundColor: "gray" }}
            style={{
              width: "120px",
              marginTop: 10,
              backgroundColor: `${items.code}`,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            title="delete"
            background="gray"
            buttonStyle={{ backgroundColor: "gray" }}
            style={{
              width: "120px",
              marginTop: 10,
              backgroundColor: `${items.code}`,
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
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
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 140,
    width: "92%",
    marginLeft: "57%",
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
