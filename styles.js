import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Platform, StyleSheet, StatusBar } from "react-native";
import { FlatList } from "react-native-web";

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
  boxText: {
    minWidth: 250,
    maxWidth: 250,
    marginVertical: 5,
    marginRight: 15,
    padding: 5,
    backgroundColor: "#FFF",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
  },
  Header_1: {
    width: "40%",
    marginTop: "5%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#EFEAE1",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  flatList: {
    flex: 1,
    alignItems: "center",
  },
  searchContainer: {
    marginVertical: 5,
    padding: 5,
  },
  textInputLabel:{
    fontSize: 16,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  textInput:{
    width: '100%',
    marginTop: 5,
    backgroundColor: '#FFF',
    borderRightWidth: 2,
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  searchBox: {
    backgroundColor: "#FFF",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  modalContent: {
    width: "20%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    margin: 10,
  },
});
