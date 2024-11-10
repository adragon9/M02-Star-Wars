import { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../styles";

function CallAPI(url) {
  const [items, setItems] = useState([]);

  if (url != "https://www.swapi.tech/api/films") {
    const fetchItems = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setItems(data.results));
    };
    useEffect(() => {
      fetchItems();
    }, []);

    return (
      <ScrollView style={styles.ScrollView}>
        {items.map((item) => (
          <Text
            style={styles.listContent}
            key={item.id}
          >{`○  ${item.name}`}</Text>
        ))}
      </ScrollView>
    );
  }

  const fetchItems = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data.result));
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ScrollView style={styles.ScrollView}>
      {items.map((item) => (
        <Text
          style={styles.listContent}
          key={item.id}
        >{`○  ${item.properties.title}`}</Text>
      ))}
    </ScrollView>
  );
}

export default CallAPI;
