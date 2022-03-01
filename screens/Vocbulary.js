import BrickList from "react-native-masonry-brick-list";
import React, { useEffect, useState, useMemo } from "react";
import { View, Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { List, Divider, useTheme } from "react-native-paper";
import { ULTRA_KEY } from "@env";

var axios = require("axios").default;

// TODO format on save && impl only fetch every 24h

const Vocbulary = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [data, setData] = useState({});
  const [copyArr, setCopyArr] = useState({});

  const _handlePress = () => {
    setExpanded(!expanded);
  };

  const {
    colors: { background },
  } = useTheme();

  var options = {
    method: "GET",
    url: "https://random-words5.p.rapidapi.com/getMultipleRandom",
    params: { count: "5", minLength: "11" },
    headers: {
      "x-rapidapi-host": "random-words5.p.rapidapi.com",
      "x-rapidapi-key": process.env.ULTRA_KEY,
    },
  };

  // useEffect(() => {
  //   window.localStorage.setItem("wordOfTheDay", JSON.stringify(data));
  // }, []);

  // useEffect(() => {
  //   var jsonData = window.localStorage.getItem("wordOfTheDay");
  //   let arr = {};
  //   for (var i = 0; i < jsonData.length; i++) {
  //     arr[i] = jsonData[i];
  //   }
  //   console.log(arr);
  // }, []);

  useEffect(() => {
    const call24 = axios
      .request(options)
      .then(function (response) {
        if (localStorage.getItem("word 1") == null) {
          console.log(response.data);
          const arr = [response.data];
          const tmpArr = {};
          let i = 0;
          response.data.forEach((x) => {
            localStorage.setItem(`word ${i}`, x);
            console.log("from ls :", localStorage.getItem(`word ${i}`));
            console.log("type me", typeof `word ${i}`);
            console.log(`word ${i}`);
            i++;
          });

          localStorage.setItem("hej", "124");
          setData(response.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      });

    call24;
  }, []);

  useEffect(() => {
    var tja = localStorage.getItem("word 1");
    console.log("tja ", tja);
    console.log("tja2 :", localStorage.length);
  }, []);

  return (
    <ScrollView style={[styles.container, { backgroundColor: background }]}>
      <List.Section title="Most Common lookups">
        <List.Accordion
          left={(props) => <List.Icon {...props} icon="folder" />}
          title="Urban Dictionaryy"
        >
          <List.Item title="proactive" />
          <List.Item title="relentless" />
          <List.Item title="famine" />
        </List.Accordion>
        <List.Accordion
          left={(props) => <List.Icon {...props} icon="folder" />}
          title="OpenApi"
          expanded={expanded}
          onPress={_handlePress}
        >
          <List.Item title="cultivated" />
          <List.Item title="accomedate" />
        </List.Accordion>
      </List.Section>
      <Divider />
      <List.Section title="Words of the day">
        <List.Accordion
          left={(props) => <List.Icon {...props} icon="star" />}
          title="All Words"
        >
          {/* {data.length > 1 ? (
            data.map((word, index) => (
              <List.Item
                key={index}
                left={(props) => <List.Icon {...props} />}
                title={word}
              />
            ))
          ) : (
            <List.Item
              left={(props) => <List.Icon {...props} icon="error-outline" />}
              title="daily fetch failed"
            />
          )} */}
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Vocbulary;
