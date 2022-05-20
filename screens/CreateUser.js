import React, { useState, useContext } from "react";
import {db} from "../Firebase"
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import AppContext from "../Context/AppContext"


import{
    addDoc,
    getDocs,
    collection
} from "firebase/firestore";
const CreateUser= (props) => {
  const initalState = {
    name: "",
    age: "",
    occupation: "",
    count: 0
  };
  
  const {setName, name} = useContext(AppContext)

  const [state, setState] = useState(initalState);
  const usersCollectionRef = collection(db, "users");

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  }

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: state.name, age: state.age, occupation: state.occupation, count: 0  });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
          createUser();

        props.navigation.navigate("UserAccounts");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="fullName"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* age Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="age"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "age")}
          value={state.age}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="occupation"
          onChangeText={(value) => handleChangeText(value, "occupation")}
          value={state.occupation}
        />
      </View>

      <View style={styles.button}>
        <Button title="spara" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
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
});

export default CreateUser;