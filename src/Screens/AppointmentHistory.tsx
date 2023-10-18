import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import SafeArea from "../components/SafeArea";

import * as ImagePicker from "expo-image-picker";

import { ProfileStyle } from "../Styles/profile";
import { Images } from "../../assets/Images";
import { userData } from "../data/Profiledata";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps, UserProfileProps } from "../types/type";
import { AppointmentData } from "../data/AppointmentData";

import AppointmentCard from "../components/AppointmentCard";
function AppointmentHistory() {
  const navigation = useNavigation<NavigationProps | any>();

 
  return (
    <SafeArea>
        <StatusBar backgroundColor="#fff" />
        <TouchableOpacity
          onPress={()=>navigation.goBack()}
          style={[ProfileStyle.Profileback,{paddingHorizontal:10,marginVertical:20}]}
        >
            <Image source={Images.arrowleft} style={ProfileStyle.backarrow} />
          <Text style={ProfileStyle.headerHeading}>Appointment History</Text>
        </TouchableOpacity>
 
          <FlatList
            data={AppointmentData}
            contentContainerStyle={{paddingHorizontal:10}}
            renderItem={({ item, index }) => (
              <AppointmentCard key={index} item={item} />
            )}
            keyExtractor={({ id }: any) => id}
            style={{
              flex: 1,
              paddingBottom: 10,
            }}
            // scrollEnabled={false}
          />
      
      
      <View style={ProfileStyle.profilesbtn}>
    
          <Button title="Save" ButtonPress={()=>null} />
      </View>
    </SafeArea>
  );
}

export default AppointmentHistory;
