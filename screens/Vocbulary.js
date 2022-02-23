import BrickList from "react-native-masonry-brick-list";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { List, Divider, useTheme } from "react-native-paper";

var axios = require("axios").default;

// TODO format on save && impl only fetch every 24h

const Vocbulary = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [data, setData] = useState([]);

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
      "x-rapidapi-key": "4034d161ccmshbffa2af54214075p1df850jsn47f8cc9cd432",
    },
  };
  console.log(localStorage.getItem("dailyWord"));

  useEffect(() => {
    const call24 = axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if (localStorage.getItem("dailyWord")) {
          localStorage.setItem("dailyWord", response.data);
          setData(response.data);
          console.log(data);
        } else {
          localStorage.getItem("dailyWord");
          setData(response.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      });

    const id = setInterval(() => call24, 1000 * 60 * 60 * 24);
    return () => clearInterval(id);
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
          {data.length > 1 ? (
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
          )}
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
