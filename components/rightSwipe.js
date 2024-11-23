import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button } from "react-native";
import styles from "../styles";

export default function RightSwipe({ name }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.searchContainer}>
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
            <Text style={styles.modalText}>{name}</Text>
            <Button title="[x] close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
