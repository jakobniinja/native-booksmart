import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import SortableGridview from 'react-native-sortable-gridview'

export default function BookGrid() {
    return (
        <SortableGridview
  data={[
    {name: 'book 1', backgroundColor: '#09f', color: '#fff'},
    {name: 'book 2', backgroundColor: '#rgba(255, 216, 58, 1)', color: '#333'},
    {name: 'book 3', backgroundColor: '#rgba(0, 222, 144, 1)', color: '#fff'},
  ]}
  lockData={[
    {name: 'book 2 '},
    {name: 'book 4 '},
  ]}
  onDragStart={() => {
    console.log('LockItemCoverLayout onDragStart');
  }}
  onDragRelease={(data) => {
    console.log('LockItemCoverLayout onDragRelease', data);
  }}
  renderItem={(item, index) => {
    return (
      <View
        uniqueKey={item.name}
        style={[styles.item, {backgroundColor: item.backgroundColor}]}
        onTap={() => {
          Alert.alert(`On Tap ${item.name}!`);
        }}
      >
        <Text style={[styles.text, {color: item.color}]}>{item.name}</Text>
      </View>
    )
  }}
  renderLockItem={(item, index) => {
    return (
      <View
        uniqueKey={`${item.name}`}
        style={styles.lock}
        onTap={() => {
          Alert.alert(`On Tap ${item.name}!`);
        }}
      >
        <Text>{item.name}</Text>
      </View>
    )
  }}
  lockItemCoverStyle={{marginTop: -8, marginLeft: -8
}}
  renderLockItemCover={(item, index) => {
    return (
      <TouchableOpacity
        style={styles.cover}
        onPress={() => {
          Alert.alert(`On Press ${item.name} Cover!`);
        }}
      >
      </TouchableOpacity>
    )
  }}
/>
    )
}

const styles= StyleSheet.create({
    text: {
        color:"black",
        fontSize: 12,
    },
    item: {
        width: 50,
        borderRadius: 12,
        height: 70,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "28%",
        marginTop: "20%"
    },
    lock:{
        width: 50,
        borderRadius: 12,
        height: 70,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "28%",
        marginTop: "20%"

    }
})