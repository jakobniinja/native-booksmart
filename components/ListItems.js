import { ListItem, Avatar } from "react-native-elements";

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import lightBulb from "../assets/lightBulb.png";
import google from "../assets/google.png";
import addBook from "../assets/addBook.png";
import leaderBoard from "../assets/leaderBoard.png";
import searchIcon from "../assets/searchIcon.png";
import { useNavigation } from "@react-navigation/native";
import { makeStyles } from "@material-ui/core";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from '@react-navigation/native';
import users from "../assets/users.png"
import folder from "../assets/folder.png"
import AppContext from "../Context/AppContext";

export default function ListItems() {
  const navigation = useNavigation();
  const {colors } = useTheme();
  const {user} = useContext(AppContext)
  return (
    <View style={{justifyContent:"center", alignItems: "center",  }} >


      {user.name != 'guest' ? (


      <ListItem style={stylo.body} onPress={() => navigation.navigate("Books")}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#5614B0", "#DBD65C" ]}
          style={stylo.background}
        ></LinearGradient>
        <Avatar source={addBook} />
        <ListItem.Content  >
          <ListItem.Title style={stylo.bg}>Books</ListItem.Title>
          <ListItem.Subtitle style={{color: "white"}} >add new book to collection</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
      ) : (

      <ListItem style={stylo.body} >
        <LinearGradient
          // Button Linear Gradient
          colors={[ "#DBD65C", "#5614B0" ]}
          style={stylo.background}
        ></LinearGradient>
        <Avatar source={addBook} />
        <ListItem.Content  >
          <ListItem.Title style={stylo.bg}>Books Disbaled</ListItem.Title>
          <ListItem.Subtitle style={{color: "white"}} >Set a User to continue..</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>

      )}


      <ListItem style={stylo.body}>
        <LinearGradient
          colors={["#5614B0", "#DBD65C" ]}
          style={stylo.background}
        ></LinearGradient>
        <Avatar source={searchIcon} />
        <ListItem.Content>
          <ListItem.Title style={stylo.bg}>Dictionary</ListItem.Title>
        <ListItem.Subtitle style={{color: "white"}}  >dictonary and Much more</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>


      <ListItem style={stylo.body}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#5614B0", "#DBD65C"]}
          style={stylo.background}
        ></LinearGradient>
        <Avatar source={leaderBoard} />
        <ListItem.Content>
          <ListItem.Title style={stylo.bg}>LeaderBoard</ListItem.Title>
          <ListItem.Subtitle style={{color: "white"}} >challenge yourself, daily..</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>

      <ListItem style={stylo.body}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#5614B0", "#DBD65C" ]}
          style={stylo.background}
        ></LinearGradient>
        <Avatar source={lightBulb} />
        <ListItem.Content  >
          <ListItem.Title style={stylo.bg}>Vocabulary</ListItem.Title>
          <ListItem.Subtitle style={{color: "white"}}>extend your Knowledge </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
      <ListItem style={stylo.body} onPress={() => navigation.navigate("UsersList")}>
        <LinearGradient
          colors={["#5614B0", "#DBD65C" ]}
          style={stylo.background}
        ></LinearGradient>
        <Avatar source={folder} />
        <ListItem.Content  >
          <ListItem.Title style={stylo.bg}>Users</ListItem.Title>
          <ListItem.Subtitle style={{color: "white"}} >save data and keep it</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
    </View>
  );
}

const stylo = StyleSheet.create({
  bg: {
    fontWeight: "bold",
    color: "lightgray",
  },
  body: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 85,
    width: "115%",
  },
});
