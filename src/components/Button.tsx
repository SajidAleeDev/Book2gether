import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonProps } from "../types/type";
import { ButtonStyle } from "../Styles/Button";

const Button = ({
  skip,
  title,
  ButtonPress,
  SkipButtonPress,
  modalButton,
  height,
  marginBottom,
  fontSize,
}: ButtonProps) => {
  return (
    <View
      style={[
        ButtonStyle.container,
        {
          height: skip ? 88 : height ? height : 60,
          marginBottom: skip ? 10 : marginBottom ? marginBottom : 0,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          ButtonStyle.ButtonBackground,
          {
            width: modalButton ? 290 : 350,
          },
        ]}
        onPress={ButtonPress}
      >
        <Text
          style={[ButtonStyle.Text, { fontSize: fontSize ? fontSize : 16 }]}
        >
          {title}
        </Text>
      </TouchableOpacity>
      {skip && (
        <TouchableOpacity
          style={ButtonStyle.SkipButton}
          onPress={SkipButtonPress}
        >
          <Text style={ButtonStyle.TextSkip}>Skip for now</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Button;
