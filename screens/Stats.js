import React, { Component } from 'react';
import "react-native-svg";
import * as WebBrowser from "expo-web-browser";
import { Dimensions } from "react-native";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { PieChart } from "react-native-chart-kit";

import { ScrollView } from 'react-native-gesture-handler';

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const Stats = () => {

  const screenWidth = Dimensions.get("window").width;
  const styles = StyleSheet.create({
    sectionWrapper: {
      justifyContent: "center",
      alignItems: "center",
      elevation: 2,
    },
   
  });
  
      return (
        <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
          <View style={styles.welcomeContainer}>
          </View>
  
          <View style={styles.getStartedContainer}>
  
            <Text style={styles.getStartedText}>
              Open up the code for this screen:
            </Text>
  
            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            >
            </View>
  
            <Text style={styles.getStartedText}>
              Change any of the text, save the file, and your app will
              automatically reload.
            </Text>
          </View>
  
          <View style={styles.helpContainer}>
          </View>
        </ScrollView>
  
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>
  
          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
          </View>
        </View>
      </View>
    );
      }

export default Stats;





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    developmentModeText: {
      marginBottom: 20,
      color: "rgba(0,0,0,0.4)",
      fontSize: 14,
      lineHeight: 19,
      textAlign: "center"
    },
    contentContainer: {
      paddingTop: 30
    },
    welcomeContainer: {
      alignItems: "center",
      marginTop: 10,
      marginBottom: 20
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: "contain",
      marginTop: 3,
      marginLeft: -10
    },
    getStartedContainer: {
      alignItems: "center",
      marginHorizontal: 50
    },
    homeScreenFilename: {
      marginVertical: 7
    },
    codeHighlightText: {
      color: "rgba(96,100,109, 0.8)"
    },
    codeHighlightContainer: {
      backgroundColor: "rgba(0,0,0,0.05)",
      borderRadius: 3,
      paddingHorizontal: 4
    },
    getStartedText: {
      fontSize: 17,
      color: "rgba(96,100,109, 1)",
      lineHeight: 24,
      textAlign: "center"
    },
    tabBarInfoContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: "black",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3
        },
        android: {
          elevation: 20
        }
      }),
      alignItems: "center",
      backgroundColor: "#fbfbfb",
      paddingVertical: 20
    },
    tabBarInfoText: {
      fontSize: 17,
      color: "rgba(96,100,109, 1)",
      textAlign: "center"
    },
    navigationFilename: {
      marginTop: 5
    },
    helpContainer: {
      marginTop: 15,
      alignItems: "center"
    },
    helpLink: {
      paddingVertical: 15
    },
    helpLinkText: {
      fontSize: 14,
      color: "#2e78b7"
    }
  });