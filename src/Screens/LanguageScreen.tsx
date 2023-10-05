import React from "react";
import { Text, View } from "react-native";
import { Images } from "../../assets/Images";
import { LanguageStyle } from "../Styles/LanguageStyle";
import Button from "../components/Button";
import Image from "../components/Image";
import ImageDescription from "../components/ImageDescription";
import SafeArea from "../components/SafeArea";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/type";

const LanguageScreen = () => {
  const navigation: NavigationProps = useNavigation();
  return (
    <SafeArea>
      <View style={LanguageStyle.LanguageHeader}>
        <Image ImageSource={Images.Language} />
        <ImageDescription
          ImageTitle="Language"
          ImageDescription="Please select the language you'd like to continue with"
        />
      </View>
      <View style={LanguageStyle.TextContainer}>
        {/* <Text>Languages Section</Text> */}
      </View>
      <Button
        title="Next"
        ButtonPress={() => {
          navigation.navigate("Notification");
        }}
      />
    </SafeArea>
  );
};

export default LanguageScreen;
