import React from "react";
import { StyleSheet, View, Image as Img } from "react-native";
import { Images } from "../../assets/Images";
import { ImageStyle } from "../Styles/Image";
import { ImageProps } from "../types/type";
import { adjustSize } from "../Styles/ServiceStyle";

const Image = ({ ImageSource, lang }: ImageProps & { lang?: boolean }) => {
  return (
    <View style={ImageStyle.container}>
      <Img source={Images.BackgroundGray} />
      <Img
        source={ImageSource}
        style={[
          ImageStyle.frontImage,
          {
            width: lang ? adjustSize(100) : adjustSize(80),
            height: lang ? adjustSize(100) : adjustSize(100),
          },
        ]}
      />
    </View>
  );
};

export default Image;
