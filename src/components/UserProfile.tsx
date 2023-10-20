import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import SafeArea from "./SafeArea";

import * as ImagePicker from "expo-image-picker";

import { ProfileStyle } from "../Styles/profile";
import { Images } from "../../assets/Images";
import BackButton, { styles } from "./BackButton";
import ImagePickerExample from "./Imagepicker";
import ProfileInput from "./ProfileInput";
import { userData } from "../data/Profiledata";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps, UserProfileProps } from "../types/type";

function UserProfile() {
  const [editable, setEditable] = useState<boolean>(false);
  const [updatedUserData, setUpdatedUserData] = useState(userData);
  const [dataSaved, setDataSaved] = useState(userData);
  const [img, setImge] = useState(dataSaved.image);

  const handleTextChange = (fieldName: any, text: any) => {
    setDataSaved({ ...dataSaved, [fieldName]: text });
    console.log(dataSaved);
  };

  const handleEditProfile = () => {
    setEditable(true);
  };
  const handleSaveProfile = (names1: any) => {
    setEditable(false);
    setUpdatedUserData({ ...updatedUserData, dataSaved });
  };
  const navigation = useNavigation<NavigationProps | any>();
  const goToProfile = (profile: any) => {
    navigation.navigate("Profile");
  };
  const updateProfileImage = (imageUri: string) => {
    setUpdatedUserData((prevData: any) => {
      return { ...prevData, Image: imageUri };
    });
  };
  console.log(updatedUserData);

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImge(result.assets[0].uri);
      updateProfileImage(result.assets[0].uri);
    }
  };
  return (
    <SafeArea>
      <View
        style={{
          padding: 10,
        }}
      >
        <BackButton
          onPress={() => navigation.goBack()}
          color="#000"
          title="Profile"
        />
      </View>
      <ScrollView style={ProfileStyle.userProfileContainer}>
        {/* <TouchableOpacity
          onPress={goToProfile}
          style={ProfileStyle.Profileback}
        >
          <View>
            <Image source={Images.arrowleft} style={ProfileStyle.backarrow} />
          </View>
          <Text style={ProfileStyle.headerHeading}>Profile</Text>
        </TouchableOpacity> */}

        <View style={ProfileStyle.profieBox}>
          <View
            style={{
              height: 125,
              width: 125,
              borderWidth: 1,
              borderRadius: 100,
              borderColor: "#F5F5F5",
            }}
          >
            <Image
              source={{
                uri: img,
              }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
                overflow: "hidden",
              }}
            />
            <TouchableOpacity
              onPress={() => {
                pickImage();
              }}
            >
              <Image
                source={Images.camera}
                style={{
                  position: "absolute",
                  // backgroundColor: "orange",
                  height: 40,
                  width: 40,
                  right: 5,
                  bottom: 0,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAvoidingView>
          <ProfileInput
            user={dataSaved.name}
            icon={Images.users}
            editable={editable}
            setUpdatedUserData={setUpdatedUserData}
            updatedUserData={updatedUserData}
            handleTextChange={(text: any) => handleTextChange("name", text)}
          />
          <ProfileInput
            user={dataSaved.email}
            icon={Images.sms}
            editable={editable}
            setUpdatedUserData={setUpdatedUserData}
            handleTextChange={(text: any) => handleTextChange("email", text)}
          />
          <ProfileInput
            user={dataSaved.mobile}
            icon={Images.mobiles}
            editable={editable}
            setUpdatedUserData={setUpdatedUserData}
            handleTextChange={(text: any) => handleTextChange("mobile", text)}
          />
          <ProfileInput
            user={dataSaved.address}
            icon={Images.home}
            editable={editable}
            setUpdatedUserData={updatedUserData}
            handleTextChange={(text: any) => handleTextChange("address", text)}
          />
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={ProfileStyle.profilesbtn}>
        {editable ? (
          <Button
            title="Save"
            ButtonPress={() => handleSaveProfile("names1")}
          />
        ) : (
          <Button title="Edit Profile" ButtonPress={handleEditProfile} />
        )}
      </View>
    </SafeArea>
  );
}

export default UserProfile;
