import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import styles from "../styles";
import CallAPI from "../components/api";
import Input from "../components/searchBar";
import LazyImage from "../components/LazyImage";

const img_src = require("../assets/star-wars-planets.png");

export default function Planets({ navigation }) {
  return (
    <ScrollView style={styles.scroll_view}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <LazyImage
          style={{ width: 1000, height: 100 }}
          resizeMode="cover"
          source={img_src}
        />
        <Text style={styles.Header_1}>Planets Screen</Text>
        <Input />
        {CallAPI("https://www.swapi.tech/api/planets")}
      </View>
    </ScrollView>
  );
}
