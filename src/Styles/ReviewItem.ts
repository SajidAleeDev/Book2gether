import { StyleSheet } from "react-native";

export const ReviewItemStyle = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: "row",
    padding: 10,
  },
  ImageContainer: {
    paddingRight: 10,
    paddingTop: 5,
  },
  Image: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  TextContainer: {
    flex: 1,
    flexDirection: "column",
  },
  titleContainer: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Title: {
    color: "#000",
    fontWeight: "600",
    fontFamily: "popins-semibold",
    fontSize: 16,
  },
  Date: {
    color: "#9E9E9E",
    fontSize: 11,
    fontWeight: "400",
    fontFamily: "popins-regular",
    letterSpacing: 0.4,
  },
  RatingText: {
    color: "#A4A4A4",
    fontWeight: "400",
    fontFamily: "popins-medium",
  },
  ReviewText: {
    color: "#9E9E9E",
    fontWeight: "500",
    fontFamily: "popins-regular",
    fontSize: 12,
    marginTop: 5,
  },
  ReviewTextContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
