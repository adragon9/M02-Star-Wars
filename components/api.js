import { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../styles";
import { FlatList } from "react-native-web";

function CallAPI(url) {
  const [data, setData] = useState([]);

  if (url != "https://www.swapi.tech/api/films") {
    useEffect(() => {
      const dataCollection = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to connect!");
          }
          const json = await response.json();
          setData(json.results);
        } catch (err) {
          console.log(err);
        }
      };
      dataCollection();
    }, []);

    const renderItem = ({ item }) => (
      <Text style={styles.boxText}>{`○  ${item.name}`}</Text>
    );

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid.toString()}
        contentContainerStyle={styles.FlatList}
      />
    );
  } else {
    useEffect(() => {
      const dataCollection = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to connect!");
          }
          const json = await response.json();
          setData(json.result);
        } catch (err) {
          console.log(err);
        }
      };
      dataCollection();
    }, []);

    const renderItem = ({ item }) => (
      <Text style={styles.boxText}>{`○  ${item.properties.title}`}</Text>
    );

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid.toString()}
        contentContainerStyle={styles.flatList}
      />
    );
  }
}

export default CallAPI;
