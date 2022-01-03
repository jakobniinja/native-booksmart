import React, { useState, useEffect } from "react";

import { ListItem, Avatar, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import punk25 from "../assets/punk25.png"
 import punk40 from "../assets/punk40.png"
 import punk60 from "../assets/punk60.png"
import firebase from "../Firebase";

const UserScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, age, occupation } = doc.data();
        users.push({
          id: doc.id,
          name,
          age,
          occupation,
        });

      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateUserScreen")}
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
          marginTop: 15,
          marginBottom: 12
        }}
        title="skapa ny"
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            {user.age <= 25 ? (            <Avatar
              source={
punk25}
              rounded
            /> ): (null)}
            {user.age >= 25 && user.age<=55 ? (            <Avatar
              source={
punk40}
              rounded
            /> ): (null)}
            {user.age >= 55 ? (            <Avatar
              source={
punk60}
              rounded
            /> ): (null)}
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.age}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserScreen;