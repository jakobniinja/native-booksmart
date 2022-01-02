import React, { useEffect, useState, useContext } from "react";
import {
  ScrollView,
  Button,
  View,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

import AppContext from "../Context/AppContext"
import firebase from "../Firebase";

const UserDetailScreen = (props) => {

  const {user, setUser} = useContext(AppContext)
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); 

  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  };

  const deleteUser = async () => {
    setLoading(true)
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    setLoading(false)
    props.navigation.navigate("UsersList");
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      "Removing the User",
      "Are you sure?",
      [
        { text: "Yes", onPress: () => deleteUser() },
        { text: "No", onPress: () => console.log("canceled") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const updateUser = async () => {
    const userRef = firebase.db.collection("users").doc(user.id);
    await userRef.set({
      name: user.name,
      age: user.age,
      occupation: user.occupation,
    });
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Name"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={user.name}
          onChangeText={(value) => handleTextChange(value, "name")}
        />
      </View>
      <View>
        <TextInput
          autoCompleteType="age"
          placeholder="age"
          style={styles.inputGroup}
          value={user.age}
          onChangeText={(value) => handleTextChange(value, "age")}
        />
      </View>
      <View>
        <TextInput
          placeholder="occupation"
          autoCompleteType="job"
          style={styles.inputGroup}
          value={user.occupation}
          onChangeText={(value) => handleTextChange(value, "occupation")}
        />
      </View>
      <View>
        <Button 
style={styles.btn}
        title="Set to active user" onPress={() =>  {
          updateUser();
          setUser({name: user.name, age: user.age, occupation: user.occupation})
      navigation.navigate("UsersList")
      }} color="#8a2eb2" 
        
        />
      </View>
      <View style={styles.btn}>
        <Button
          style={styles.btn}        
          title="Delete"
          onPress={() => openConfirmationAlert()}
          color="gray"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  btn: {
    marginBottom: 17,
    marginTop: 10
  },
});

export default UserDetailScreen;