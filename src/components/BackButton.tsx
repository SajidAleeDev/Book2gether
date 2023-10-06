import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackButton = ({
  ...props
}: React.ComponentProps<typeof TouchableOpacity>) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ArrowLeft size={26} color="#fff" />
    </TouchableOpacity>
  );
};

export default BackButton;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
