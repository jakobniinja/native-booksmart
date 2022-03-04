import Leaderboard from "react-native-leaderboard";
import { View, Text } from "react-native";
import React from "react";

export default function ScoreBoard() {
  this.state = {
    data: [
      { userName: "Joe", highScore: 52 },
      { userName: "Jenny", highScore: 120 },
      //...
    ], //can also be an object of objects!: data: {a:{}, b:{}}
  };

  return (
    <View>
      <Text> Hi from ScoreBoard</Text>
      {/* <Leaderboard
        data={this.state.data}
        sortBy="highScore"
        labelBy="userName"
      /> */}
    </View>
  );
}
