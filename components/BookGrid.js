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
  console.log(allBooks);
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
        allBooks && allBooks.length >= 1
          ? allBooks.map((book, index) => [
              { name: allBooks[index].title, index: allBooks[index].id },
            ])
          : [{ name: "book 7" }]
      }
      onDragStart={() => {
        console.log("LockItemCoverLayout onDragStart");
      }}
      onDragRelease={(data) => {
        console.log("LockItemCoverLayout onDragRelease", data);
      }}
      renderItem={(item, index) => {
        return (
          <View
            key={[item.name]}
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
      renderLockItem={(item) => {
        return (
          <View style={styles.top}>
            {allBooks.length >= 1 ? (
              allBooks.map((book, idx) => (
                <View
                  key={[item.index]}
                  style={styles.lock}
                  onTap={() => {
                    Alert.alert(`On Tap ${allBooks[idx].title}!`);
                  }}
                >
                  <Text
                    style={styles.text}
                    onPress={() => {
                      console.log(allBooks[idx].title);
                    }}
                  >
                    {allBooks[idx].title}
                  </Text>
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
          </View>
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
    width: 50,
    borderRadius: 12,
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "36%",
    marginTop: "20%",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 'auto'
  },
  lock: {
    width: 50,
    borderRadius: 12,
    height: 70,
    backgroundColor: "gray",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "28%",
    marginTop: "20%",
  },
});
