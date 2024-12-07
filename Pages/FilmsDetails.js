import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

function FilmsDetails({ route }) {
  const { item } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataCollection = async () => {
      try {
        const response = await fetch(item.properties.url);
        if (!response.ok) {
          throw new Error("Failed to connect!");
        }
        const json = await response.json();
        setData(json.result.properties);
      } catch (err) {
        console.log(err);
      }
    };
    dataCollection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>Movie: {data.title}</Text>
      <Text style={styles.detailText}>Director: {data.director}</Text>
      <Text style={styles.detailText}>Producer: {data.producer}</Text>
      <Text style={styles.detailText}>Released: {data.release_date}</Text>
      <Text style={styles.detailText}>{data.opening_crawl}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },

  detailText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default FilmsDetails;
