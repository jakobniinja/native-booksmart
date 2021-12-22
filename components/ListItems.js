import { ListItem, Avatar } from "react-native-elements";

import React from "react";
import { View, Text } from "react-native";

export default function ListItems() {
  return (
    <View>
      <ListItem
      style={{marginTop: "7%"}}
        friction={90} //
        activeScale={0.95} //
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
      >
        <Avatar rounded source={{ uri:  "https://o.remove.bg/downloads/b21ce967-a137-441e-b2ca-c78d9284ac31/add-book-icon-add-book-icon-115533862144zvpqmitfr-removebg-preview.png" }}  style={{width: "80px", height: "80px"}}  />
        <ListItem.Content>
          <ListItem.Title style={{  fontWeight: "bold" }}>
            Books
          </ListItem.Title>
          <ListItem.Subtitle >
            add new book to collection
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
      <ListItem
      style={{marginTop: "7%"}}
        // Component={TouchableScale}
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        // ViewComponent={LinearGradient} // Only if no expo
      >
        <Avatar rounded source={{ uri:  "https://github.com/jakobniinja/jakeHacker99-Book-Skimmer/blob/main/src/Assets/lookup.png?raw=true" }}  style={{width: "80px", height: "80px"}}  />
        <ListItem.Content>
          <ListItem.Title style={{  fontWeight: "bold" }}>
            Dictionary
          </ListItem.Title>
          <ListItem.Subtitle >
          Word lookup and Much more
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
      <ListItem
      style={{marginTop: "7%"}}
        // Component={TouchableScale}
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        // ViewComponent={LinearGradient} // Only if no expo
      >
        <Avatar rounded source={{ uri:  "https://o.remove.bg/downloads/09d7b690-2eb8-4cdc-bc36-1ad44905be0b/e1032523533081.563248d9c852b-removebg-preview.png" }}  style={{width: "80px", height: "80px"}}  />
        <ListItem.Content>
          <ListItem.Title style={{  fontWeight: "bold" }}>
            Vocabulary
          </ListItem.Title>
          <ListItem.Subtitle >
            Extend your vocubaulary to euphorical levels 
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
    </View>
  );
}
