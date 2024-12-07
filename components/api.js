import { useState, useEffect, useRef } from "react";
import { Text, FlatList, View, TextInput, StyleSheet } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import styles from "../styles";

function CallAPI({ url, name }) {
  const [data, setData] = useState([]);
  // const [modalVisible, setModalVisible] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(null);
  const swipeRefs = useRef([]);
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState();

  const closeCurrentSwipeable = (index) => {
    const swipeRef = swipeRefs.current[index];
    if (swipeRef && swipeRef.close) {
      swipeRef.close();
    }
  };
  useEffect(() => {
    const dataCollection = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to connect!");
        }
        const json = await response.json();
        setData(json.results || json.result); // Handle different response structures
        setFilteredData(json.results || json.result);
      } catch (err) {
        console.log(err);
      }
    };
    dataCollection();
  }, [url]);

  const handleSwipeLeft = (item, index) => {
    closeCurrentSwipeable(index); // Ensure current swipeable is closed
    navigation.navigate(`${name}Details`, { item });
  };

  const renderItem = ({ item, index }) => (
    <Animated.View style={styles.itemContainer} entering={FadeIn}>
      <Swipeable
        ref={(ref) => (swipeRefs.current[index] = ref)}
        onEnded={() => handleSwipeLeft(item, index)}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.boxText}>{`○  ${
            item.name || item.properties.title
          }`}</Text>
        </View>
      </Swipeable>
    </Animated.View>
  );

  const listFilter = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData =
          item.properties && item.properties.title
            ? item.properties.title.toUpperCase()
            : item.name
            ? item.name.toUpperCase()
            : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(data);
      setSearch(text);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={(text) => listFilter(text)}
        style={localStyles.searchBar}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid.toString()}
        contentContainerStyle={styles.flatList}
      />
    </GestureHandlerRootView>
  );
}

export default CallAPI;

const localStyles = StyleSheet.create({
  searchBar:{
    borderWidth: 1,
    margin: 5,
    padding: 5,
  }
})