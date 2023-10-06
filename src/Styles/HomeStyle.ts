import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  HeadText: {
    color: "#75BDE0",
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "popins-semibold",
    fontStyle: "normal",
    lineHeight: 31,

    opacity: 0.8,
    width: "80%",
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  InputContainer: {
    marginVertical: 20,
  },
  ItemContainer: {
    marginTop: 20,

    marginBottom: 10,
  },
  ItemAvailable: {
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "popins-semibold",
    lineHeight: 19,
    color: "#212121",
  },
});
