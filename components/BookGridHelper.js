import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import SortableGridview from "react-native-sortable-gridview";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import { data2, data3, data4 } from "../assets/data";

export default function BookGridHelper() {
  const { user, setUser, setClicked, clicked } = useContext(AppContext);

  const [bookLogic, setBookLogic] = useState([
    { name: `book1`, backgroundColor: "#09f", color: "#000" },
    {
      name: "book2",
      color: "#000",
      backgroundColor: "blueviolet",
    },
  ]);

  if (user.name == "Tofflan") {
    return (
      <SortableGridview
        data={data2}
        onDragStart={() => {
        }}
        onDragRelease={(data) => {
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
  } else if (user.name == "Lilla Captain") {
    return (
      <SortableGridview
        data={data3}
        onDragStart={() => {
        }}
        onDragRelease={(data) => {
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
  } else if (user.name == "olivia") {
    return (
      <SortableGridview
        data={data4}
        onDragStart={() => {
        }}
        onDragRelease={(data) => {
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
  } else {
    return (
      <SortableGridview
        data={bookLogic}
        onDragStart={() => {
        }}
        onDragRelease={(data) => {
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
