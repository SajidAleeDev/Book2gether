import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonProps } from "../types/type";
import { ButtonStyle } from "../Styles/Button";

const Button = ({ skip, title, ButtonPress, SkipButtonPress }: ButtonProps) => {
  return (
    <View
      style={[
        ButtonStyle.container,
        {
          height: skip ? 88 : 60,
        },
      ]}
    >
      <TouchableOpacity
        style={ButtonStyle.ButtonBackground}
        onPress={ButtonPress}
      >
        <Text style={ButtonStyle.Text}>{title}</Text>
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
