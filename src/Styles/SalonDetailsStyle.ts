import { StyleSheet } from "react-native";

export const SalonDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
  },
  ImageContainer: {
    height: 376,
    zIndex: -10,
  },

  Image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -10,
  },
  overlay: {
    flex: 1,
    // backgroundColor: "red",
    // position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.29)",
  },

  ContentContainerWrapper: {
    // height: 534,
    minHeight: 1000,
    // paddingTop: 534,
    // flex:1
  },
  _body_section: {
    // position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    // overflow: "hidden",
    // height: 934,
    // backgroundColor:"red",
    flexDirection: "column",
    // paddingTop:434
    justifyContent: "flex-end",
    flex: 1,
    zIndex: 300,
    marginTop: -534,
  },
  ContentContainer: {
    flex: 1,
    backgroundColor: "#FCFCFC",

    paddingHorizontal: 15,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "popins-semibold",
  },
  TextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  openContainer: {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
  },
  openContainerText: {
    color: "#A4A4A4",
    fontSize: 18,
  },
  AboutContainer: {
    paddingLeft: 10,
  },
  AboutText: {
    color: "#A4A4A4",
    fontWeight: "400",
    fontFamily: "popins-medium",
    padding: 3,
  },
});
