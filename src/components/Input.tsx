import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { InputProps } from "../types/type";

const Input = ({
  icon,
  width,
  height,
  marginBottom,
  ...props
}: InputProps & React.ComponentProps<typeof TextInput>) => {
  return (
    <View
      style={[
        InputStyle.InputBackground,
        {
          width: width ? width : "100%",
          height: height ? height : 59,
          marginBottom : marginBottom
        },
      ]}
    >
      {icon}
      <TextInput
        style={InputStyle.Input}
        placeholderTextColor={"#BDBDBD"}
        inputMode="text"
        {...props}
      />
    </View>
  );
};

export default Input;

export const InputStyle = StyleSheet.create({
  InputBackground: {
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 12,
  },
  Input: {
    flex: 1,

    fontWeight: "400",
    fontFamily: "popins-regular",
    color: "#BDBDBD",
    fontSize: 14,
  },
});
