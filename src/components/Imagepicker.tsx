import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Images } from "../../assets/Images";
import { ProfileStyle } from "../Styles/profile";
import { userData } from "../data/Profiledata";
import { ImagePickerProps } from "../types/type";
export default function ImagePickerExample({
  setImge,
  updateProfileImage,
}: any) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImge(result.assets[0].uri);
      updateProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable onPress={pickImage}>
        <Image source={Images.camera} style={ProfileStyle.camera} />
      </Pressable>
    </View>
  );
}
