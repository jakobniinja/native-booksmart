
import React, { Fragment } from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import CalendarHeatmap from "@freakycoder/react-native-calendar-heatmap";
import { staticData } from "../data";


export default function Stats() {
  return (
<Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ margin: 16 }}>
            <Text style={{ fontWeight: "600", fontSize: 16, color: "#656ac6", textAlign:'center', marginBottom:'10%'
          }}>
              Activity Indicator
            </Text>
            <View style={{display:'flex', flexDirection:'row',marginLeft:'10%' }} >
              <Text  style={{marginLeft:'15%'}}>Jan</Text>
              <Text  style={{marginLeft:'10%'}}>Mar </Text>
              <Text  style={{marginLeft:'10%'}}>Jun</Text>
              <Text  style={{marginLeft:'10%'}}>Aug</Text>
            </View>
            <CalendarHeatmap
              endDate={new Date("2019-03-25")}
              numDays={115}
              colorArray={["lightgray", "#bcd6f7", "#656ac6", "#393b99", "#191c5c"]}
              values={staticData}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  )
}
