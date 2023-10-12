import { StyleSheet } from "react-native";

export const ImageStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 270,
  },
  frontImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    
  },
  containerDescription: {
    paddingHorizontal: 20,
    paddingVertical: 10,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  Title: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "popins-bold",
  },
  Description: {
    fontWeight: "400",
    fontSize: 15,
    textAlign: "center",
    color: "#A4A4A4",
    fontFamily: "popins-regular",
    marginTop: 6,
    width: 340,
  },
});
