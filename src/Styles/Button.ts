import { StyleSheet } from "react-native";
export const ButtonStyle = StyleSheet.create({
  ButtonBackground: {
    backgroundColor: "#75BDE0",
    height: 58,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontWeight: "600",
    fontFamily: "popins-bold",
    letterSpacing: 0.5,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  container: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  SkipButton: {
    marginTop: 6,

    textAlign: "center",
  },
  TextSkip: {
    fontWeight: "500",
    fontFamily: "popins-medium",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 22,
    color: "#75BDE0",
  },
});
