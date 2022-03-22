import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import { doc, collection, onSnapshot,  query,  getDocs } from "firebase/firestore";
import SortableGridview from "react-native-sortable-gridview";
import AppContext from "../Context/AppContext";
import { db } from "../Firebase";
import car from "../assets/books/graphql.jpg"
import car2 from "../assets/books/javaalgo.jpg"
import car3 from "../assets/books/algo2.jpeg"
export default function BookGrid(props) {
  const [allBooks, setAllBooks] = useState([]);
  const books = [];
  var width = Dimensions.get("window").width;
  const [currentUser, setCurrentUser] = useState([]);
  const [activeUser, ActiveUser] = useState([])
  console.log(allBooks)


  useEffect(() => {
      const userCol = collection(db, "users");
          const getUser = async () => {
      const data = await getDocs(userCol);
    // data.docs.map((doc) => {
    //   const { name, age, occupation } = doc.data();
    //   if (name == user.name) {
    //     setUser({ name: name, age: age, occupation: occupation });
    //   }
    // });
    };
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, () => {
      getUser();
      
    });

    // collection(db, "users").onSnapshot((querySnapshot) => {
    //   const currentUser = [];
    //   querySnapshot.docs.forEach((doc) => {
    //     const { name, age, occupation } = doc.data();
    //     if (name == user.name) {
    //       currentUser.push({
    //         id: doc.id,
    //         name,
    //         age,
    //         occupation,
    //       });
    //     }
    //   });
    //   setCurrentUser(...currentUser);
    // });
  }, []);
//   useEffect(() => {
//     if (currentUser.id) {
    //   db.collection("users")
    //     .doc(currentUser.id)
    //     .collection("books")
    //     .onSnapshot((querySnapshot) => {
    //       querySnapshot.docs.forEach((doc) => {
    //         const { ImageURL, lastRead, pages, points, title } = doc.data();

    //         books.push({
    //           id: doc.id,
    //           ImageURL,
    //           lastRead,
    //           pages,
    //           points,
    //           title,
    //         });
    //       });
    //       setAllBooks(books);
    //     });
//     }
//   }, [currentUser]);
  
  useEffect(() => {
    // setUser(currentUser)  
  }, [])

  return (
    <SortableGridview
      data={[
        { name: ` 124`, backgroundColor: "#09f", color: "#000" },
        {
          name: "book 2",
          color: "#000",
        },
        {
          name: "book 3",
          backgroundColor: "#rgba(0, 222, 144, 1)",
          color: "#000",
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
            style={[styles.item, { backgroundColor: item.backgroundColor, width: '100px', height: '130px', resizeMode: 'cover'
            }]}
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
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    backgroundColor: '#ddd',
  },
  item: {
    width: 80,
    borderRadius: 12,
    height: 70,
    color: '#fff',
    backgroundImage:`url(${car})`, 
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "16%",
    marginTop: "20%",
  },
  top: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "345%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: "-4%",
  },
  lock: {
    width: 80,
    margin: 8,
    borderRadius: 12,
    height: 70,
    backgroundColor: "gray",
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
  },
});
