import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, ListItem } from "react-native-elements";
import addBook from "../assets/addBook.png";
import folder from "../assets/folder.png";
import statsbg from "../assets/stats.jpg";
import leaderBoard from "../assets/leaderBoard.png";
import lightBulb from "../assets/lightBulb.png";
import searchIcon from "../assets/searchIcon.png";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../Context/AppContext";

export default function ListItems() {
  const { user } = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {user.name != "guest" ? (
        <ListItem
          style={stylo.body}
          onPress={() => navigation.navigate("Books")}
        >
          <LinearGradient
            colors={["#5614B0", "#DBD65C"]}
            style={stylo.background}
          ></LinearGradient>
          <Avatar source={addBook} />
          <ListItem.Content style={{ marginLeft: 8 }}>
            <ListItem.Title style={stylo.bg}>Books</ListItem.Title>
            <ListItem.Subtitle style={{ color: "white" }}>
              add new book to collection
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="white" />
        </ListItem>
      ) : (
        <ListItem style={stylo.body}>
          <LinearGradient
            colors={["#5614B0", "#DBD65C"]}
            style={stylo.background}
          ></LinearGradient>
          <Avatar source={addBook} />
          <ListItem.Content style={{ marginLeft: 8 }}>
            <ListItem.Title style={stylo.bg}>
              No Books available...
            </ListItem.Title>
            <ListItem.Subtitle style={{ color: "white" }}>
              Go to users to access your books
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="white" />
        </ListItem>
      )}

      <ListItem
        style={stylo.body}
        onPress={() => navigation.navigate("LeaderBoard")}
      >
        <LinearGradient
          colors={["#5614B0", "#DBD65C"]}
          style={stylo.background}
        ></LinearGradient>
        <Avatar source={leaderBoard} />
        <ListItem.Content>
          <ListItem.Title style={stylo.bg}>LeaderBoard</ListItem.Title>
          <ListItem.Subtitle style={{ color: "white" }}>
            challenge yourself, daily..
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>

      <ListItem
        style={stylo.body}
        onPress={() => navigation.navigate("Vocabulary")}
      >
        <LinearGradient
          colors={["#5614B0", "#DBD65C"]}
          style={stylo.background}
        ></LinearGradient>
        <Avatar source={lightBulb} />
        <ListItem.Content>
          <ListItem.Title style={stylo.bg}>Vocabulary</ListItem.Title>
          <ListItem.Subtitle style={{ color: "white" }}>
            extend your Knowledge{" "}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>

      {user.name != "guest" ? (
        <ListItem
          style={stylo.body}
          onPress={() => navigation.navigate("Stats")}
        >
          <LinearGradient
            colors={["#5614B0", "#DBD65C"]}
            style={stylo.background}
          ></LinearGradient>
          <Avatar source={statsbg} />
          <ListItem.Content>
            <ListItem.Title style={stylo.bg}>Stats</ListItem.Title>
            <ListItem.Subtitle style={{ color: "white" }}>
              track your progress
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="white" />
        </ListItem>
      ) : (
        <ListItem style={stylo.body}>
          <LinearGradient
            colors={["#5614B0", "#DBD65C"]}
            style={stylo.background}
          ></LinearGradient>
          <Avatar source={statsbg} />
          <ListItem.Content style={{ marginLeft: 8 }}>
            <ListItem.Title style={stylo.bg}>
              No Stats available...
            </ListItem.Title>
            <ListItem.Subtitle style={{ color: "white" }}>
              Select a user to continue
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="white" />
        </ListItem>
      )}

      <ListItem
        style={stylo.body}
        onPress={() => navigation.navigate("UserAccounts")}
      >
        <LinearGradient
          colors={["#5614B0", "#DBD65C"]}
          style={stylo.background}
        ></LinearGradient>
        <Avatar source={folder} />
        <ListItem.Content>
          <ListItem.Title style={stylo.bg}>Users</ListItem.Title>
          <ListItem.Subtitle style={{ color: "white" }}>
            save data and keep it
          </ListItem.Subtitle>
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
  img: {
    width: 40,
    marginLeft: 5,
  },
});
