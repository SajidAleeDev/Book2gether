import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackButtonProps } from "../types/type";

const BackButton = ({
  color,
  title,
  ...props
}: BackButtonProps & React.ComponentProps<typeof TouchableOpacity>) => {
  return (
    <View
      style={{
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 4,
      }}
    >
      <TouchableOpacity {...props}>
        <ArrowLeft size={26} color={color} />
      </TouchableOpacity>
      {title && (
        <Text
          style={{
            marginLeft: 20,
            color: "#000",
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      )}
    </View>
  );
};

export default BackButton;

export const styles = StyleSheet.create({
  // container: {
  // },
});
