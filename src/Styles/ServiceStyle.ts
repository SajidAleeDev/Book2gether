import { StyleSheet } from "react-native";

export const ServiceStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,

    flexWrap: "wrap",
    // justifyContent: "space-between",
    alignItems: "center",
  },

  // card style

  card: {
    width: 157.85,
    height: 157.85,
    backgroundColor: "#F5F5F5",
    borderRadius: 17,
    margin: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 75.49,
    height: 75.49,
    marginBottom: 10,
  },
  Text: {
    fontWeight: "600",
    fontFamily: "popins-medium",
    fontSize: 14,
    color: "#000000",
    textAlign: "center",
    lineHeight: 16.8,
  },
});
