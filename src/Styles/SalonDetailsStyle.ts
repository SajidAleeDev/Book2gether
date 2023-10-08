import { StyleSheet } from "react-native";

export const SalonDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  ImageContainer: {
    height: 376,
  },

  Image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.29)",
  },

  ContentContainerWrapper: {
    height: 534,
    overflow: "hidden",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  ContentContainer: {
    flex: 1,
    backgroundColor: "#FCFCFC",

    paddingHorizontal: 15,
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
