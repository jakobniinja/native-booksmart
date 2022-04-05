import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import SortableGridview from "react-native-sortable-gridview";
import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import l1 from "../assets/books/lm1-rs.jpg";
import l2 from "../assets/books/lm2-rs.jpg";

import da1 from "../assets/books/dfmf-rs.jpg";
import da2 from "../assets/books/dfmf2-rs.jpg";
import da3 from "../assets/books/dfmf3-rs.jpg";
import hp from "../assets/books/hp-full (1).jpg";
import h1 from "../assets/books/filosofi-stenen-rs.jpg";
import h2 from "../assets/books/halvblodsprinsen-rs.jpg";
import h3 from "../assets/books/fenfix-rs.jpg";
import { SafeAreaView } from "react-native-safe-area-context";


export default function BookGridHelper() {
  const { user, setUser } = useContext(AppContext);
  const [bookLogic, setBookLogic] = useState([
    { name: `book1`, backgroundColor: "#09f", color: "#000" },
    {
      name: "book2",
      color: "#000",
      backgroundColor: "blueviolet",
    },
    {
      name: "book3",
      backgroundColor: "#rgba(0, 222, 144, 1)",
      color: "#000",
    },
  ]);

  let data2 = [
    {
      name: "På Ny Kula",
      backgroundColor: "#09f",
      color: "#000",
      backgroundImage: `${da3}`,
    },
    {
      name: "Bravader ",
      color: "#000",
      backgroundImage: `${da1}`,
    },
    {
      name: "Nya Fältet",
      backgroundColor: "#rgba(0, 222, 144, 1)",
      color: "#000",
      backgroundImage: `${da2}`,
    },
  ];
  let data3 = [
    {
      name: "Hotell Mysteriet ",
      color: "#000",
      backgroundImage: `url(${l1})`,
    },
    {
      name: "Diamant Myseriet",
      backgroundColor: "#rgba(0, 222, 144, 1)",
      color: "#000",
      backgroundImage: `url(${l2})`,
    },
  ];

  let data4 = [
    {
      name: "Halvblodsprinsen",
      color: "#000",
      backgroundImage: `url(${h1}`,
    },
    {
      name: "Filosofi stenen",
      backgroundColor: "#rgba(0, 222, 144, 1)",
      color: "#000",
      backgroundImage: `url(${h2})`,
    },
    {
      name: "Fenixordern",
      backgroundColor: "#rgba(0, 222, 144, 1)",
      color: "#000",
      backgroundImage: `url(${h3})`,
    },

  ];
  if (user.name == "Tofflan") {
    return (
      <SortableGridview
        data={data2}
        onDragStart={() => {
          console.log("LockItemCoverLayout onDragStart");
        }}
        onDragRelease={(data) => {
          console.log("LockItemCoverLayout onDragRelease", data);
        }}
        renderItem={(item, index) => {
          let ogURL = `${item.backgroundImage}`
          let curURL = ogURL.substring(14)
          let aURL = curURL.replace(/\.([^\.]+)/, "")
          
          return (
            <SafeAreaView>
            <ImageBackground source={require('../assets/books/dfmf3-rs.jpg')}  style={{width:"80%", height:"80%",display:'flex', justifyContent:'center', alignItems:'center' }} 
              key={[item.name]}
              style={[
                styles.item,
                {
                  backgroundColor: item.backgroundColor,
                  resizeMode: "cover",
                  backgroundImage: item.backgroundImage,
                },
              ]}
              onTap={() => {
                Alert.alert(`On Tap ${item.name}!`);
              }}
            >
              <Text
                style={[styles.text, { color: item.color }]}
                onPress={() => {
                  // setFlag(!flag);
                  console.log(curURL.replace(/\.([^\.]+)/, ""))
                }}
              >
                {item.name}
              </Text>
            </ImageBackground>
            </SafeAreaView>
          );
        }}
      />
    );
  } else if (user.name == "Lilla Captain") {
    return (
      <SortableGridview
        data={data3}
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
              style={[
                styles.item,
                {
                  backgroundColor: item.backgroundColor,
                  resizeMode: "cover",
                  backgroundImage: item.backgroundImage,
                },
              ]}
              onTap={() => {
                Alert.alert(`On Tap ${item.name}!`);
              }}
            >
              <Text
                style={[styles.text, { color: item.color }]}
                onPress={() => {
                  setFlag(!flag);
                }}
              >
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    );
  } 
   else if (user.name == "olivia") {
    return (
      <SortableGridview
        data={data4}
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
              style={[
                styles.item,
                {
                  backgroundColor: item.backgroundColor,
                  resizeMode: "cover",
                  backgroundImage: item.backgroundImage,
                },
              ]}
              onTap={() => {
                Alert.alert(`On Tap ${item.name}!`);
              }}
            >
              <Text
                style={[styles.text, { color: item.color }]}
                onPress={() => {
                  setFlag(!flag);
                }}
              >
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    );
  } 
  
  
  else {
    return (
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
              style={[
                styles.item,
                {
                  backgroundColor: item.backgroundColor,
                  resizeMode: "cover",
                  backgroundImage: item.backgroundImage,
                },
              ]}
              onTap={() => {
                Alert.alert(`On Tap ${item.name}!`);
              }}
            >
              <Text
                style={[styles.text, { color: item.color }]}
                onPress={() => {
                  setFlag(!flag);
                }}
              >
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    backgroundColor: "#ddd",
  },
  item: {
    width: 80,
    borderRadius: 12,
    height: 120,
    color: "#fff",
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
