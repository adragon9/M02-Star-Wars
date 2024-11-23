import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View, Modal, Button } from "react-native";
import styles from "../styles";

function Input(props) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};

export default function CollectingTextInput() {
  const [changedText, setChangedText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setSubmittedText(changedText);
    setModalVisible(true);
    setChangedText("");
  };

  return (
    <View style={styles.searchContainer}>
      <Input
        label="Search"
        onChangeText={(e) => {
          setChangedText(e);
        }}
        onSubmitEditing={handleSubmit}
        onFocus={() => {
          setChangedText("");
          setSubmittedText("");
        }}
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
              Submitted Text: {submittedText}
            </Text>
            <Button title="[x] close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
