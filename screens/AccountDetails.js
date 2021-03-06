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
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import AppContext from "../Context/AppContext";
import { db } from "../Firebase";

const AccountDetails = (props) => {
  const [currId, setCurrId] = useState(1234 - 5678);
  const [users, setUsers] = useState([]);
  const { user, setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const usersCollectionRef = collection(db, "users");
  const bookiCollectionRef = collection(db, "users", props.route.params.userId, "books");
  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const deleteUser = async () => {
    setLoading(true);
    const userDoc = doc(db, "users", props.route.params.userId);
    await deleteDoc(userDoc);
    setLoading(false);
    props.navigation.navigate("UserAccounts");
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      `Ta bort ${user.name}`,
      "Är du säker?",
      [
        { text: "Nej", onPress: () => console.log("canceled") },
        { text: "Ja", onPress: () => deleteUser() },
      ],
      {
        cancelable: true,
      }
    );
  };

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    const booki = await getDocs(bookiCollectionRef);

    data.docs.map((doc) => {
      const { name, age, occupation } = doc.data();
      const count = booki.docs.length
      if (doc.id == props.route.params.userId) {
        setUser({ id: doc.id, name: name, age: age, occupation: occupation, count:count  });
      }
    });
  };

  const updateUser = async (name, age, occupation, count) => {
    const userRef = doc(db, "users", props.route.params.userId);

    setTimeout(async() => {
    await updateDoc(userRef,  {...user} );
    }, 3000);
  };

  useEffect(() => {
    updateUser();
  }, [user]);

  useEffect(() => {
    getUsers();
    setLoading(false);
  }, [loading]);

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
          placeholder="name"
          style={styles.inputGroup}
          value={user.name}
          onChangeText={(value) => handleTextChange(value, "name")}
        />
      </View>
      <View>
        <TextInput
          placeholder="age"
          style={styles.inputGroup}
          value={user.age}
          onChangeText={(value) => handleTextChange(value, "age")}
        />
      </View>
      <View>
        <TextInput
          placeholder="occupation"
          style={styles.inputGroup}
          value={user.occupation}
          onChangeText={(value) => handleTextChange(value, "occupation")}
        />
      </View>
      <View>
        <Button
          style={styles.btn}
          title="Set to active user"
          onPress={async() => {
             await updateUser(user);
            navigation.navigate("UserAccounts");
          }}
          color="#8a2eb2"
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
    marginTop: 10,
  },
});

export default AccountDetails;
