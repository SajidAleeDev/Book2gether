import { View, Text } from "react-native";
import React from "react";
import { LanguageStyle } from "../Styles/LanguageStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { children } from "../types/type";

const SafeArea = ({ children, gray }: children & { gray?: boolean }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
        backgroundColor: gray ? "" : "#FFF",
      }}
    >
      {children}
    </View>
  );
};

export default SafeArea;