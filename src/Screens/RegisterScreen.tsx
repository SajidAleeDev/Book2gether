import { View, Text, StyleSheet, TouchableOpacity,StatusBar } from "react-native";
import React from "react";
import SafeArea from "../components/SafeArea";
import BackButton from "../components/BackButton";
import Input, { InputStyle } from "../components/Input";
import { HomeIcon, LockIcon, MailIcon, Smartphone } from "lucide-react-native";
import PhoneInput from "react-native-phone-input";
import Button from "../components/Button";
import { styles } from "./LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/type";
 
const RegisterScreen = () => {
  const navigation:NavigationProps = useNavigation()
 

  return (
    <SafeArea>
      <StatusBar backgroundColor="#fff" />

      <View style={style.container}>
        <BackButton color="#000" title="Create New Account" onPress={
          ()=>{
            navigation.goBack() 
          }
        } />
        <View style={style.ItemContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              
            }}
          >
            <Input placeholder="First Name" width={180} />
            <View
              style={{
                margin: 4,
              }}
            />
            <Input placeholder="First Name" width={180} />
          </View>
          <Input
            placeholder="Email"
            marginBottom={20}
            icon={<MailIcon size={20} color="#A7A7A7" />}
          />
          <View
            style={[
              InputStyle.InputBackground,
              {
                marginBottom: 20,
              },
            ]}
          >
            <PhoneInput
              initialCountry={"us"}
              autoFormat
              textProps={{
                placeholder: "Enter a phone number...",
              }}
              style={{
                padding: 17,
              }}
            />
          </View>
          <Input
            placeholder="Address (Optional)"
            icon={<HomeIcon size={20} color="#A7A7A7" />}
            marginBottom={20}
          />
           <Input
            placeholder="Password"
            icon={<LockIcon size={20} color="#A7A7A7" />}
            marginBottom={20}
          />
           <Input
            placeholder="Confirm Password"
            icon={<LockIcon size={20} color="#A7A7A7" />}
            marginBottom={20}
          />
      <Button title="Sign Up" 
       ButtonPress={()=>{
        navigation.navigate('OPT')
       }}
       />
        </View>
        <View style={styles.bottomSec}>
        <Text style={styles.bottomTxt1}>Already have an account? </Text>
        <TouchableOpacity 
         onPress={()=> {
           navigation.navigate('Login')
         }}
         >
          <Text style={styles.bottomTxt2}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeArea>
  );
};

export default RegisterScreen;
const style = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  ItemContainer: {
    marginTop: 30,
    flex : 1
    
  },
});
