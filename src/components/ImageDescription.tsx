import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ImageStyle } from "../Styles/Image";
import { ImageTextProps } from "../types/type";

const ImageDescription = ({ ImageTitle, ImageDescription }: ImageTextProps) => {
  return (
    <View style={ImageStyle.containerDescription}>
      <Text style={ImageStyle.Title}>{ImageTitle}</Text>
      <Text style={ImageStyle.Description}>{ImageDescription}</Text>
    </View>
  );
};

export default ImageDescription;
