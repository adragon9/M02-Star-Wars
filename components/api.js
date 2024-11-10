import { useState, useEffect } from "react";
import {Text, View} from "react-native";

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
      <View>
        {items.map((item) => (
          <Text key={item.id}>{`○  ${item.name}`}</Text>
        ))}
      </View>
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
    <View>
      {items.map((item) => (
        <Text key={item.id}>{`○  ${item.properties.title}`}</Text>
      ))}
    </View>
  );
}

export default CallAPI;
