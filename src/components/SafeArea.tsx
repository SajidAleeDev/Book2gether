import React from "react";
import { View } from "react-native";
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
        backgroundColor: gray ? "#FCFCFC" : "#FFF",
      }}
    >
      {children}
    </View>
  );
};

export default SafeArea;
