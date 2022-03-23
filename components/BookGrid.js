import React, { useContext, useEffect, useMemo, useState } from "react";
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
import graphql from "../assets/books/graphql.png"
import javaalgo from "../assets/books/javaalgo.jpg"
import algo2 from "../assets/books/algo2.jpeg"
import l1 from "../assets/books/lm1-rs.jpg"
import l2 from "../assets/books/lm2-rs.jpg"



import da1 from "../assets/books/dfmf-rs.jpg"
import da2 from "../assets/books/dfmf2-rs.jpg"
import da3 from "../assets/books/dfmf3-rs.jpg"




import { initialWindowMetrics } from "react-native-safe-area-context";
export default function BookGrid(props) {
  const { user, setUser } = useContext(AppContext);
 const [flag, setFlag] = useState(false)
   useMemo(
    () => ({flag, user}),
    [flag, user]
  );

 
  const [allBooks, setAllBooks] = useState([]);
  var bookie;
const [bookLogic, setBookLogic] = useState(

[
        { name: `book1`, backgroundColor: "#09f", color: "#000"  },
        {
          name: "book2",
          color: "#000",
          backgroundColor: 'blueviolet'
        },
        {
          name: "book3",
          backgroundColor: "#rgba(0, 222, 144, 1)",
          color: "#000",
        },
      
])

  let data2= [
         { name: ` 124`, backgroundColor: "#09f", color: "#000", backgroundImage: `url(${da3})` },
         {
           name: "Java Algrothims ",
           color: "#000",
     backgroundImage:`url(${da1})`, 
         },
         {
           name: "Graphl mm",
           backgroundColor: "#rgba(0, 222, 144, 1)",
           color: "#000",
     backgroundImage:`url(${da2})`, 
         },
  ]



//    {user.name == "Tofflan" && setData(
//  [
//          { name: ` 124`, backgroundColor: "#09f", color: "#000", backgroundImage: `url(${da3})` },
//          {
//            name: "Java Algrothims ",
//            color: "#000",
//      backgroundImage:`url(${da1})`, 
//          },
//          {
//            name: "Graphl mm",
//            backgroundColor: "#rgba(0, 222, 144, 1)",
//            color: "#000",
//      backgroundImage:`url(${da2})`, 
//          },
//        ]
//    )}

   


  useEffect(() => {
      const userCol = collection(db, "users");
          const getUser = async () => {
      const data = await getDocs(userCol);
    };
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, () => {
      getUser();
      
    });

  }, []);
  

  

  return (
    user.name!="Tofflan" ? (

    <SortableGridview
      data={bookLogic}
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
            style={[styles.item, {
               backgroundColor: item.backgroundColor, width: '100px', height: '130px', resizeMode: 'cover',
            backgroundImage: item.backgroundImage
            }]}
            onTap={() => {
              Alert.alert(`On Tap ${item.name}!`);
            }}
          >
            <Text style={[styles.text, { color: item.color }]} onPress={() => {
                  setFlag(!flag)
            }} >
              {item.name}
            </Text>

          </View>
        );
      }}
    />

    ) : (

    <SortableGridview
      data={data2}
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
            style={[styles.item, {
               backgroundColor: item.backgroundColor, width: '100px', height: '130px', resizeMode: 'cover',
            backgroundImage: item.backgroundImage
            }]}
            onTap={() => {
              Alert.alert(`On Tap ${item.name}!`);
            }}
          >
            <Text style={[styles.text, { color: item.color }]} onPress={() => {
                  setFlag(!flag)
            }} >
              {item.name}
            </Text>

          </View>
        );
      }}
    />

    )

    

  )
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
