import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import SortableGridview from "react-native-sortable-gridview";
import AppContext from "../Context/AppContext";
import firebase from "../Firebase";
export default function BookGrid(props) {
  const { book1, setBook1, user } = useContext(AppContext);
  const [allBooks, setAllBooks] = useState([]);
  const books = [];

  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const currentUser = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, age, occupation } = doc.data();
        if (name == user.name) {
          currentUser.push({
            id: doc.id,
            name,
            age,
            occupation,
          });
        }
      });
      setCurrentUser(...currentUser);
    });
  }, []);
  useEffect(() => {
    if (currentUser.id) {
      firebase.db
        .collection("users")
        .doc(currentUser.id)
        .collection("books")
        .onSnapshot((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            const { ImageURL, lastRead, pages, points, title } = doc.data();

            books.push({
              id: doc.id,
              ImageURL,
              lastRead,
              pages,
              points,
              title,
            });
          });
          setAllBooks(books);
        });
    }
  }, [currentUser]);

  console.log(currentUser.id);
  return (
    <SortableGridview
      data={[
        { name: ` 124`, backgroundColor: "#09f", color: "#fff" },
        {
          name: "book 2",
          backgroundColor: "#rgba(255, 216, 58, 1)",
          color: "#333",
        },
        {
          name: "book 3",
          backgroundColor: "#rgba(0, 222, 144, 1)",
          color: "#fff",
        },
      ]}
      lockData={
              allBooks && allBooks.length >= 1 ? (
                 allBooks.map((book, index) => (
                   [
                  {name: allBooks[index].title}]
                )) 
              ) : (
                  [{name: 'book 2'}, {name: 'book 2'}, {name: 'book 8'}]
              )}

        
      onDragStart={() => {
        console.log("LockItemCoverLayout onDragStart");
      }}
      onDragRelease={(data) => {
        console.log("LockItemCoverLayout onDragRelease", data);
      }}
      renderItem={(item, index) => {
        return (
          <View
            uniqueKey={item.name}
            style={[styles.item, { backgroundColor: item.backgroundColor }]}
            onTap={() => {
              Alert.alert(`On Tap ${item.name}!`);
            }}
          >
            <Text style={[styles.text, { color: item.color }]}>
              {item.name}
            </Text>
          </View>
        );
      }}
      renderLockItem={(item, index) => {
        return (
          <>
            {allBooks.length >= 1 ? (
              allBooks.map((book, index) => (
                <View
                  uniqueKey={index}
                  style={styles.lock}
                  onTap={() => {
                    Alert.alert(`On Tap ${allBooks[index].title}!`);
                  }}
                >
                  <Text  style={styles.text} onPress={() => {
                    console.log(allBooks[index].title)
                  }} key={index} > {allBooks[index].title} </Text>
                </View>
              ))
            ) : (
              <View
                uniqueKey={`${item.name}`}
                style={styles.lock}
                onTap={() => {
                  Alert.alert(`On Tap ${item.name}!`);
                }}
              >
                <Text>{item.name}</Text>
              </View>
            )}
          </>
        );
      }}
      lockItemCoverStyle={{ marginTop: -8, marginLeft: -8 }}
      renderLockItemCover={(item, index) => {
        return (
          <TouchableOpacity
            style={styles.cover}
            onPress={() => {
              Alert.alert(`On Press ${item.name} Cover!`);
            }}
          ></TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 12,
  },
  item: {
    display: "flex",
    flexDirection: 'row',
    width: 50,
    borderRadius: 12,
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "28%",
    marginTop: "20%",
  },
  lock: {
    width: 50,
    borderRadius: 12,
    height: 70,
    backgroundColor: "gray",
    color:'#fff',
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "28%",
    marginTop: "20%",
  },
});
