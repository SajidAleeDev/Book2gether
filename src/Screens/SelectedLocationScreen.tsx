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
import BackButton from "../components/BackButton";

const SelectedLocationScreen = () => {
  const navigation: NavigationProps = useNavigation();
  return (
    <SafeArea>
      <BackButton
        color="#000"
        customStyles={{
          view: {
            marginTop: 20,
          },
        }}
        title="Profile"
        onPress={() => navigation.goBack()}
      />
      <View style={LanguageStyle.LanguageHeader}>
        <Image ImageSource={Images.Location} />
        <ImageDescription
          ImageTitle="Location"
          ImageDescription="Allow maps to access your location while you use the app?"
        />
      </View>
      <View style={LocationStyle.container} />
      <Button title="Allow" />
    </SafeArea>
  );
};

export default SelectedLocationScreen;
