import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Platform, StyleSheet, StatusBar  } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "ghostwhite",
        ...Platform.select({
          ios: { paddingTop: 20 },
          android: { paddingTop: StatusBar.currentHeight },
        }),
      },
      box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
      },
      boxText: {
        color: "darkslategray",
        fontWeight: "bold",
      },
      Header_1: {
        width: '40%',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#F4FDFF',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
      }
})