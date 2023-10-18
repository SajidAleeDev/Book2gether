import { View, Text, Image, Switch } from "react-native";
import React, { useState } from "react";
import SafeArea from "../components/SafeArea";
import { ProfileStyle } from "../Styles/profile";
import { StatusBar } from "expo-status-bar";
import ProfileItems from "../components/ProfileItems";
import { Images } from "../../assets/Images";
import { userData } from "../data/Profiledata";
const Profile = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  return (
    <SafeArea gray>
      <StatusBar backgroundColor="#75BDE0" />
      <View style={ProfileStyle.profileContainer}>
        <View style={ProfileStyle.profileheader}>
          <Text style={ProfileStyle.headerHeading}>Profile</Text>

          <View style={ProfileStyle.profileData}>
            <View>
              <Image
                source={userData.Image}
                style={ProfileStyle.profileImage}
              />
            </View>
            <View style={ProfileStyle.profileDetails}>
              <Text style={ProfileStyle.profileName}>{userData.name}</Text>
              <Text style={ProfileStyle.profileEmail}>{userData.email}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={ProfileStyle.profileItems}>
        <ProfileItems
          imageSource={Images.profilemini}
          buttonText="User Profile "
          lastbtn={Images.arrow}
          destination="UserProfile"
        />
        <ProfileItems
          imageSource={Images.appoinetment}
          buttonText="Appointment History "
          lastbtn={Images.arrow}
          destination="AppointmentHistory"
        />
        <ProfileItems
          imageSource={Images.notificationicon}
          buttonText="Enable Notification"
          toggleSwitch={toggleSwitch1}
          isEnabled={isEnabled1}
          showText={false}
        />
        <ProfileItems
          imageSource={Images.languageicon}
          buttonText="Language"
          showText={true}
          lastbtn={Images.arrow}
          destination="SelectLanguage"


        />
        <ProfileItems
          imageSource={Images.locationicon}
          buttonText="Location"
          lastbtn={Images.arrow}
          destination="SelectLocation"
        />
        <ProfileItems
          imageSource={Images.logout}
          buttonText="Log Out"
          lastbtn={Images.arrow}
          destination="Login"
        />
      </View>
    </SafeArea>
  );
};

export default Profile;
