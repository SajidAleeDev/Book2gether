import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { EmployeeProps } from "../types/type";

const EmployeesItem = ({ item }: EmployeeProps) => {
  return (
    <View
      style={{
        ...EmployeesItemStyles.container,
      }}
    >
      <Image source={item.Image} style={EmployeesItemStyles.Image} />

      <View style={{ alignItems: "center" }}>
        <Text style={EmployeesItemStyles.MainTitle}>{item?.name}</Text>
        <Text style={EmployeesItemStyles.Expertise}>{item?.Expertise}</Text>
      </View>
    </View>
  );
};

export default EmployeesItem;

export const EmployeesItemStyles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  Image: {
    width: 66,
    height: 66,
    resizeMode: "cover",
    borderRadius: 66 / 2,
    marginBottom: 8,
  },
  MainTitle: {
    fontSize: 16,
    fontFamily: "popins-semibold",
    fontWeight: "600",
    lineHeight: 19,
    color: "#212121",
  },
  Expertise: {
    fontSize: 13,
    fontFamily: "popins-regular",
    fontWeight: "400",
    lineHeight: 17,
    color: "#A4A4A4",
  },
});
