import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  // Default styles
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
  // List styles
  flatList: {
    flex: 1,
    alignItems: "center",
  },
  // Search styles
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
    width: 250,
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
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  modalContent: {
    maxWidthwidth: '60%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
  },
  modalDescription: {
    textAlign: 'left',
    marginVertical: 10,
    fontSize: 14,
  },
});
