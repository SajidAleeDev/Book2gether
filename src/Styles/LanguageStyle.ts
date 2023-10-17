import { StyleSheet } from "react-native";
import { adjustSize } from "./ServiceStyle";

export const LanguageStyle = StyleSheet.create({
  LanguageHeader: {
    height: adjustSize(280),
  },
  TextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
