import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import styles from "../styles";
import CallAPI from "../components/api";
import Input from "../components/searchBar";

export default function Films({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.Header_1}>Films Screen</Text>
      <Input />
      <ScrollView>
        {CallAPI("https://www.swapi.tech/api/films")}
      </ScrollView>
    </View>
  );
}
