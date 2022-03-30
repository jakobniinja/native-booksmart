
import React, { Fragment } from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import CalendarHeatmap from "@freakycoder/react-native-calendar-heatmap";
import { staticData } from "../data";


export default function Stats() {
  return (
<Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent:'center' }}>
          <View style={{ margin: 16 }}>
            <Text style={{ fontWeight: "600", fontSize: 16, color: "#656ac6" }}>
              Activity Indicator
            </Text>
            <CalendarHeatmap
              endDate={new Date("2019-03-25")}
              numDays={100}
              colorArray={["#eee", "#bcd6f7", "#656ac6", "#393b99", "#191c5c"]}
              values={staticData}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  )
}
