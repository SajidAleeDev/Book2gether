import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";
import SafeArea from "../components/SafeArea";

import { Ionicons } from '@expo/vector-icons';
import { ProfileStyle } from "../Styles/profile";
import { Images } from "../../assets/Images";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps, UserProfileProps } from "../types/type";
import { AppointmentData } from "../data/AppointmentData";

import AppointmentCard from "../components/AppointmentCard";
function SelectLanguage() {
  const navigation = useNavigation<NavigationProps | any>();
  const [selected,setselected] = useState(0)
 const  [languages,setlanguages] =useState([
    {
        name:"English",
        icon:require('../../assets/Images/English.png'),
    },
    {
        name:"Netherlands",
        icon:require('../../assets/Images/Netherlands.png'),
    },
    {
        name:"اردو",
        icon:require('../../assets/Images/اردو.png'),
    }, {
        name:"Indonesian",
        icon:require('../../assets/Images/Indonesian.png'),
    },
    {
        name:"Japanese",
        icon:require('../../assets/Images/Japanese.png'),
    }
 ])
 
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
            data={languages}
            contentContainerStyle={{paddingHorizontal:10}}
            renderItem={({ item, index }) => (
             <TouchableOpacity style={styles._list} key={index} onPress={()=>setselected(index)}>
                <Image source={item.icon} style={styles._image} />
                <Text style={styles._name}>{item.name}</Text>
                {index === selected &&
                <Ionicons name="checkmark" size={24} color="#02A7FD" />
                }
             </TouchableOpacity>
            )}
            keyExtractor={({ id }: any) => id}
            style={{
              flex: 1,
              paddingBottom: 10,
            }}
            // scrollEnabled={false}
          />
      
      
      <View style={ProfileStyle.profilesbtn}>
    
          <Button title="Save" ButtonPress={()=>navigation.goBack()} />
      </View>
    </SafeArea>
  );
}

export default SelectLanguage;


const styles = StyleSheet.create({
    _list:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15,
        borderBottomWidth:1,
        borderColor:"#EEEEEE",
        paddingLeft:0
    },
    _name:{
        fontFamily:"popins-medium",
        paddingLeft:10,
        fontSize:16,
        flex:1,
        textAlign:"left"
    },
    _image:{
        height:32.84,
        width:32.84
    }
})