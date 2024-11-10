import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import styles from "../styles";
import CallAPI from "../components/api";

export default function Films({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.Header_1}>Films Screen</Text>
      <View>
        {CallAPI("https://www.swapi.tech/api/films")}
      </View>
    </View>
  );
}
