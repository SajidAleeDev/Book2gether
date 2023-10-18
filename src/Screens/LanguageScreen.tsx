import React,{useState} from "react";
import { Text, View ,StatusBar,FlatList,TouchableOpacity, ImageBackground} from "react-native";
import { Images } from "../../assets/Images";
import { LanguageStyle } from "../Styles/LanguageStyle";
import Button from "../components/Button";
import Image from "../components/Image";
import ImageDescription from "../components/ImageDescription";
import SafeArea from "../components/SafeArea";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/type";
import { Ionicons } from '@expo/vector-icons';

const LanguageScreen = () => {
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
     }
  ])
  const navigation: NavigationProps = useNavigation();
  return (
    <SafeArea>
      <StatusBar backgroundColor="#fff" />

      <View style={LanguageStyle.LanguageHeader}>
        <Image ImageSource={Images.Language} lang />
        <ImageDescription
          ImageTitle="Language"
          ImageDescription="Please select the language you'd like to continue with"
        />
      </View>
      <View style={LanguageStyle.TextContainer}>
        {/* <Text>Languages Section</Text> */}
        <FlatList
            data={languages}
            contentContainerStyle={{paddingHorizontal:10}}
            renderItem={({ item, index }) => (
             <TouchableOpacity style={LanguageStyle._list} key={index} onPress={()=>setselected(index)}>
                <ImageBackground source={item.icon} style={LanguageStyle._image} ></ImageBackground>
                <Text style={LanguageStyle._name}>{item.name}</Text>
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
          />
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
