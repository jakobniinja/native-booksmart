import { ListItem, Avatar } from "react-native-elements";

import React from "react";
import { View, Text } from "react-native";
import lightBulb from "../assets/lightBulb.png"
import addBook from "../assets/addBook.png"
import leaderBoard from "../assets/leaderBoard.png"
import searchIcon from "../assets/searchIcon.png"
import { useNavigation } from "@react-navigation/native";
import { makeStyles } from "@material-ui/core";

export default function ListItems() {
  const navigation= useNavigation();
  return (
    <View>
      <ListItem onPress={() => navigation.navigate('Books')}
      style={{marginTop: "7%"}}
      >

        <Avatar source={addBook}   />
        <ListItem.Content  >
          <ListItem.Title style={{  fontWeight: "bold" }}>
            Books
          </ListItem.Title>
          <ListItem.Subtitle >
            add new book to collection
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
      <ListItem
      style={{marginTop: "7%"}}
      >
        <Avatar source={searchIcon}    />
        <ListItem.Content>
          <ListItem.Title style={{  fontWeight: "bold" }}>
            Dictionary
          </ListItem.Title>
          <ListItem.Subtitle >
          Word lookup and Much more
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>

      <ListItem
      style={{marginTop: "7%"}}
      >
        <Avatar source={lightBulb }    />
        <ListItem.Content>
          <ListItem.Title style={{  fontWeight: "bold" }}>
            Vocabulary
          </ListItem.Title>
          <ListItem.Subtitle >
            Extend your Arsenal
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>

      <ListItem
      style={{marginTop: "7%"}}
      >
        <Avatar source={leaderBoard }    />
        <ListItem.Content>
          <ListItem.Title style={{  fontWeight: "bold" }}>
            LeaderBoard
          </ListItem.Title>
          <ListItem.Subtitle >
            Challenge yourself, daily..
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
    </View>
  );
}
