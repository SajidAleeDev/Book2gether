import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ServiceStyle } from "../Styles/ServiceStyle";
import { ImageProps } from "../types/type";

const ServiceCard = ({
  ImageSource,
  Selected,
  title,
  ...props
}: ImageProps & {
  Selected: boolean;
  title: string;
} & TouchableOpacity["props"]) => {
  return (
    <TouchableOpacity
      style={[
        ServiceStyle.card,
        {
          borderColor: "#75BDE0",
          borderWidth: Selected ? 2 : 0,
          borderStyle: "solid",
        },
      ]}
      {...props}
    >
      <Image source={ImageSource} style={ServiceStyle.image} />
      <Text style={ServiceStyle.Text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ServiceCard;
