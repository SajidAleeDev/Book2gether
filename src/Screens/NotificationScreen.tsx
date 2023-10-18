import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,StatusBar } from "react-native";
import { Images } from "../../assets/Images";
import { LanguageStyle } from "../Styles/LanguageStyle";
import { NotificationStyle } from "../Styles/Notification";
import Button from "../components/Button";
import Image from "../components/Image";
import ImageDescription from "../components/ImageDescription";
import SafeArea from "../components/SafeArea";
import { NavigationProps } from "../types/type";

const NotificationScreen = () => {
  const navigation: NavigationProps = useNavigation();
  return (
    <SafeArea>
      <StatusBar backgroundColor="#fff" />

      <View style={LanguageStyle.LanguageHeader}>
        <Image ImageSource={Images.Bell} />
        <ImageDescription
          ImageTitle="Notifications"
          ImageDescription="Please enable notifications to receive updates and reminders"
        />
      </View>
      <View style={NotificationStyle.container} />
      <Button
        title="Allow"
        skip
        ButtonPress={() => {
          navigation.navigate("Location");
        }}
        SkipButtonPress={() => {
          navigation.navigate("Location");
        }}
      />
    </SafeArea>
  );
};

export default NotificationScreen;
