import React, { useState, useEffect, useContext } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getFirestore,
  query,
} from "firebase/firestore";

import { ListItem, Avatar, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import punk25 from "../assets/punk25.png";
import punk40 from "../assets/punk40.png";
import punk60 from "../assets/punk60.png";
import { db } from "../Firebase";
import AppContext from "../context/AppContext";
import { ActivityIndicator, View } from "react-native";

const UserAccounts = (props) => {
  const { name, user, setUser } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, () => {
      getUsers();
     setLoading(false) 
      
    });
  }, [name]);

  if (loading) {
    return (
      <View
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateUser")}
        buttonStyle={{
          backgroundColor: "#8a2be2",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5,
          paddingVertical: 10,
          width: 300,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "10.5%",
          marginTop: 15,
          marginBottom: 12,
        }}
        title="skapa ny"
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("AccountDetails", {
                userId: user.id,
              });
            }}
          >
            {user.age < 25 ? <Avatar source={punk25} rounded /> : null}
            {user.age >= 25 && user.age <= 55 ? (
              <Avatar source={punk40} rounded />
            ) : null}
            {user.age > 55 ? <Avatar source={punk60} rounded /> : null}
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.age}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserAccounts;
