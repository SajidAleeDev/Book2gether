import React from "react";
import { StyleSheet, View, Image as Img } from "react-native";
import { Images } from "../../assets/Images";
import { ImageStyle } from "../Styles/Image";
import { ImageProps } from "../types/type";

const Image = ({ ImageSource , lang }: ImageProps & {lang?:boolean}
  ) => {
  return (
    <View style={ImageStyle.container}>
      <Img source={Images.BackgroundGray} />
      <Img source={ImageSource} style={[ImageStyle.frontImage, {
        width: lang?110 : 100,
        height:  lang ? 110 : 120
      }]} />
    </View>
  );
};

export default Image;
