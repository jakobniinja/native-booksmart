import { ListItem, Avatar } from "react-native-elements";

import React from "react";
import { View, Text } from "react-native";
import lightBulb from "../assets/lightBulb.png"
import addBook from "../assets/addBook.png"
import searchIcon from "../assets/searchIcon.png"


export default function ListItems() {
  return (
    <View>
      <ListItem
      style={{marginTop: "7%"}}
      >
        <Avatar rounded source={addBook}  style={{width: "80px", height: "80px"}}  />
        <ListItem.Content>
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
        <Avatar rounded source={searchIcon}  style={{width: "80px", height: "80px"}}  />
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
        <Avatar rounded source={lightBulb }  style={{width: "80px", height: "80px"}}  />
        <ListItem.Content>
          <ListItem.Title style={{  fontWeight: "bold" }}>
            Vocabulary
          </ListItem.Title>
          <ListItem.Subtitle >
            Extend your vocubaulary to euphorical levels 
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
    </View>
  );
}
