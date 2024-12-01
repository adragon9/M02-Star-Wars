import { useState, useEffect, useRef } from "react";
import { Text, FlatList, View, Button, Modal } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Swipeable } from "react-native-gesture-handler";
import styles from "../styles";

function CallAPI({ url }) {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentSwipeRef, setCurrentSwipeRef] = useState(null);
  const swipeRefs = useRef([]);

  const modalHandler = (state, text) => {
    setModalVisible(state);
    setModalText(text);
  };

  const closeCurrentSwipeable = (index) => {
    const swipeRef = swipeRefs.current[index];
    if (swipeRef) {
      swipeRef.close();
      setCurrentSwipeRef(null);
    }
  };

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
    }, [url]);

    const renderRightActions = () => {
      return (
        <View>
          <Text style={styles.boxText}>Show Details</Text>
        </View>
      );
    };

    const renderItem = ({ item, index }) => (
      <Animated.View style={styles.itemContainer} entering={FadeIn}>
        <Swipeable
          ref={(ref) => (swipeRefs.current[index] = ref)}
          renderRightActions={() => renderRightActions(item)}
          onSwipeableOpen={() => {
            setSelectedItem(item);
            setModalVisible(true);
            setCurrentSwipeRef(index);
          }}
          onSwipeableClose={closeCurrentSwipeable(currentSwipeRef)}
        >
          <View style={styles.itemContainer}>
            <Text style={styles.boxText}>{`○  ${item.name}`}</Text>
          </View>
        </Swipeable>
      </Animated.View>
    );

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.uid.toString()}
          contentContainerStyle={styles.flatList}
          an
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalDescription}>
                {selectedItem ? "Name: " + selectedItem.name : ""}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedItem ? "ID: " + selectedItem.uid : ""}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedItem ? "URL: " + selectedItem.url : ""}
              </Text>
              <Button
                title="[x] close"
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
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
    }, [url]);

    const renderRightActions = () => {
      return (
        <View>
          <Text style={styles.boxText}>Show Details</Text>
        </View>
      );
    };

    const renderItem = ({ item, index }) => (
      <Animated.View style={styles.itemContainer} entering={FadeIn}>
        <Swipeable
          ref={(ref) => (swipeRefs.current[index] = ref)}
          renderRightActions={() => renderRightActions(item)}
          onSwipeableOpen={() => {
            setSelectedItem(item);
            setModalVisible(true);
            setCurrentSwipeRef(index);
          }}
          onSwipeableClose={closeCurrentSwipeable(currentSwipeRef)}
        >
          <View style={styles.itemContainer}>
            <Text style={styles.boxText}>{`○  ${item.properties.title}`}</Text>
          </View>
        </Swipeable>
      </Animated.View>
    );

    return (
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.uid.toString()}
          contentContainerStyle={styles.flatList}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalDescription}>
                {selectedItem ? "Name: " + selectedItem.properties.title : ""}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedItem ? "ID: " + selectedItem.uid : ""}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedItem
                  ? "Director: " + selectedItem.properties.director
                  : ""}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedItem
                  ? "Producer(s): " + selectedItem.properties.producer
                  : ""}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedItem
                  ? "Release Date: " + selectedItem.properties.release_date
                  : ""}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedItem ? "URL: " + selectedItem.properties.url : ""}
              </Text>
              <Button
                title="[x] close"
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default CallAPI;
