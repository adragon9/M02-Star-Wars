import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  // Default styles
  container: {
    flex:1,
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
    width: 1001,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 5,
    backgroundColor: "#FFF",
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderColor: "black",
  },
  // List styles
  flatList: {
    alignItems: "center",
  },
  // Search styles
  searchContainer: {
    marginVertical: 5,
    padding: 5,
    backgroundColor: 'darkseagreen',
    borderRadius: 5,
    shadowOpacity: .6,
    shadowRadius: 3,
  },
  textInputLabel:{
    fontSize: 16,
    width: '100%',
    backgroundColor: 'green',
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
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

  //Image styles
  img_placeholder: {
    width: 10,
    height: 10,
  },
  image:{
    backgroundColor: "#FFF",
    borderRightWidth: 1,
  },

  //Scroll View formatting
  scroll_view: {
    flex:1,
    backgroundColor: 'ghostwhite',
  }
});
