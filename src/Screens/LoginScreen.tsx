import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useBucket } from "../Hooks/Context";
import { Images } from "../../assets/Images";
import Input from "../components/Input";
import { LockIcon, MailIcon } from "lucide-react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/type";
import SafeArea from "../components/SafeArea";

const LoginScreen = () => {
  const { saveUser } = useBucket();

  const navigation: NavigationProps = useNavigation();

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <SafeArea>
      <View style={styles.View}>
        <Image source={Images.Logo} style={styles.Image} />
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            placeholder="Email"
            icon={<MailIcon size={20} color="#A7A7A7" />}
            keyboardType="email-address"
          />
        </View>
        <View>
          <Input
            placeholder="Email"
            icon={<LockIcon size={20} color="#A7A7A7" />}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.ButtonView}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"#000f"} />
        ) : (
          <>
            <Button
              title="Login"
              ButtonPress={() => {
                saveUser({ name: "John Doe" });
                navigation.navigate("MyTab");
              }}
            />
          </>
        )}
      </View>
      <View style={styles.bottomSec}>
        <Text style={styles.bottomTxt1}>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.bottomTxt2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default LoginScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  ButtonView: {
    flex: 1,
    marginTop: 20,
  },

  Logo: {
    width: 30,
    height: 30,
  },
  Image: {
    height: 228,
    width: 340,
    alignSelf: "center",
    marginTop: 30,
  },
  View: {
    padding: 30,
    marginTop: 40,
  },

  bottomSec: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottomTxt1: {
    color: "#000000",

    fontSize: 15,
  },
  bottomTxt2: {
    color: "#75BDE0",

    fontSize: 15,
    fontWeight: "600",
  },
});
