import { View, Text } from "react-native";
import React from "react";
import SafeArea from "../components/SafeArea";
import { LanguageStyle } from "../Styles/LanguageStyle";
import Image from "../components/Image";
import ImageDescription from "../components/ImageDescription";
import { Images } from "../../assets/Images";
import { LocationStyle } from "../Styles/LocationStyle";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/type";

const LocationScreen = () => {
  const navigation: NavigationProps = useNavigation();
  return (
    <SafeArea>
      <View style={LanguageStyle.LanguageHeader}>
        <Image ImageSource={Images.Location} />
        <ImageDescription
          ImageTitle="Location"
          ImageDescription="Allow maps to access your location while you use the app?"
        />
      </View>
      <View style={LocationStyle.container} />
      <Button
        title="Allow"
        skip
        ButtonPress={() => {
          navigation.navigate("Service");
        }}
        SkipButtonPress={() => {
          navigation.navigate("Service");
        }}
      />
    </SafeArea>
  );
};

export default LocationScreen;
