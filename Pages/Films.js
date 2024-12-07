import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import styles from "../styles";
import CallAPI from "../components/api";
import LazyImage from "../components/LazyImage";
import ConnectionEnforcer from "../components/ConnectionEnforcement";

const img_src = require("../assets/star-wars-posters.jpeg");

export default function Films({ navigation }) {
  return (
    <ScrollView style={styles.scroll_view}>
      <View style={styles.container}>
        <ConnectionEnforcer />
        <StatusBar barStyle="dark-content" />
        <LazyImage
          style={{ width: 1000, height: 100 }}
          resizeMode="cover"
          source={img_src}
        />
        <Text style={styles.Header_1}>Films Screen</Text>
        <CallAPI url="https://www.swapi.tech/api/films" name="Films"/>
      </View>
    </ScrollView>
  );
}
