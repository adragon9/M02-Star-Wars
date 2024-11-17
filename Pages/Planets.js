import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import styles from "../styles";
import CallAPI from "../components/api";
import Input from "../components/searchBar";

export default function Planets({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.Header_1}>Planets Screen</Text>
      <Input />
      {CallAPI("https://www.swapi.tech/api/planets")}
    </View>
  );
}
