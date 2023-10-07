import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OpenTimeTextProps } from "../types/type";

const OpenTimeText = ({ item }: OpenTimeTextProps) => {
  return (
    <View style={OpenTimeTextStyles.container}>
      <Text style={OpenTimeTextStyles.days}>{item.day}</Text>
      <Text style={OpenTimeTextStyles.timing}>
        {item.Closed ? "Closed" : `${item?.openTime} - ${item?.closeTime}`}
      </Text>
    </View>
  );
};

export default OpenTimeText;

const OpenTimeTextStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  days: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "popins-regular",
  },
  timing: {
    color: "#A4A4A4",
    fontSize: 16,
    fontFamily: "popins-regular",
  },
});
