import React, { useContext, useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../Context/AppContext";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AddBook() {
  const [lastRead, setLastRead] = useState("12:00");
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("")
  useMemo(() => {setTitle, setPages, setImage}, [setTitle, setPages, setImage])

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

  // const createBook = async () => {
  //   await addDoc(usersCollectionRef, {
  //     title: title,
  //     pages: pages,
  //     lastread: lastRead,
  //     ImageURL: image,
  //     points: pages / 3,
  //   });
  // };
  return (
    <KeyboardAvoidingView 
       behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        placeholder="Title"
        placeholderTextColor={styles.TextInput}          
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputStyles}
      />
    
      <TextInput
        placeholder="Author"
        placeholderTextColor={styles.TextInput}          
        value={author}
        onChangeText={(text) => setAuthor(text)}
        style={styles.inputStyles}
      />
      <TextInput
        placeholder="Pages"
        value={pages}
        onChangeText={(text) => setPages(text)}
        style={styles.inputStyles}
      />
      <TextInput
        placeholder="Lastread"
        value={lastRead}
        onChangeText={(text) => setLastRead(text)}
        style={styles.inputStyles}
        
      />
      <TextInput
        placeholder="Image url"
        value={image}
        onChangeText={(text) => setImage(text)}
        style={styles.inputStyles}
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
            buttonStyle={{ backgroundColor: "gray",               justifyContent: "center",
              alignItems: "center", width: 80,  marginLeft: '7.3%'
 }}
            style={{
              display : "flex",
              width: "70px",
              marginTop: 10,
              backgroundColor: `${items.code}`,
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatGrid
        itemDimension={230}
        data={items}
        style={styles.container}
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
              <Text style={styles.itemName}>{title}</Text>
              <Text style={styles.itemCode}>{author}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridView: {
    marginTop: 10,
    height: 120,
    width: 90,

  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 7,
    padding: 10,
    height: 140,
    width:  140,
    marginLeft: "30%",
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    height: 30
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  inputStyles:{
          // backgroundColor: "rgba(255,255,255,0.7)",
          margin: 3,
          flex: 0.1,
          textAlign: "center",
          color: "black",
          width: "50%",
          marginLeft:"25.5%",
          justifyContent: "center",
          alignItems: "center",
          height: 20,
          marginTop: 25,
          fontSize: 15,
          padding: 15,
  }
});
