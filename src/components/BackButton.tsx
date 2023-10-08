import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { BackButtonProps } from "../types/type";

const BackButton = ({
  color,
  title,
  ...props
}: BackButtonProps & React.ComponentProps<typeof TouchableOpacity>) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "row",
      }}
      {...props}
    >
      <ArrowLeft size={26} color={color} />
      {title && (
        <Text
          style={{
            marginLeft: 20,
            color: "#000",
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Select Treatment
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default BackButton;

export const styles = StyleSheet.create({
  // container: {
  // },
});
