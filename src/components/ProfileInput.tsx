import React, { useState } from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import { userData } from "../data/Profiledata";

function ProfileInput({ user, icon, editable, handleTextChange }: any) {
  // const [text, setText] = useState(user);
  type handleTextChange = (text: any) => void;
  return (
    <View style={profInputStyle.Inputs}>
      <Image source={icon} style={profInputStyle.inputimage} />
      <TextInput
        style={profInputStyle.InputBackground}
        pointerEvents={editable ? "auto" : "none"}
        autoCorrect={false}
        spellCheck={false}
        value={user}
        onChangeText={(text) => handleTextChange(text)}
        editable={editable}
      />
    </View>
  );
}

export default ProfileInput;

export const profInputStyle = StyleSheet.create({
  InputBackground: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 12,
    fontWeight: "400",
    fontFamily: "popins-regular",
    color: "#000000",
    fontSize: 14,
    flex: 1,
    paddingVertical: 10,
  },
  Inputs: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  inputimage: {
    height: 20,
    width: 20,
  },
});
