import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EmployeePropsItem } from "../types/type";
import { Platform } from "react-native";

const EmployeesItem = ({
  item,
  selectedEmployee,

  ...props
}: EmployeePropsItem & TouchableOpacity["props"]) => {
  const ios = Platform.OS === "ios";
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      {...props}
      style={[
        EmployeesItemStyles.container,
        {
          backgroundColor: selectedEmployee ? "#75BDE0" : "#fff",
          
          margin: ios ? 0 : 4,
        },
      ]}
    >
      <Image
        source={{
          uri: item?.Image,
        }}
        style={EmployeesItemStyles.Image}
      />

      <View style={{ alignItems: "center" }}>
        <Text
          style={[
            EmployeesItemStyles.MainTitle,
            {
              color: selectedEmployee ? "#fff" : "#000",
            },
          ]}
        >
          {item?.name}
        </Text>
        <Text
          style={[
            EmployeesItemStyles.Expertise,
            {
              color: selectedEmployee ? "#fff" : "#A4A4A4",
            },
          ]}
        >
          {item?.Expertise}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EmployeesItem;

export const EmployeesItemStyles = StyleSheet.create({
  container: {
    width: 107,

    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
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
  },
  Expertise: {
    fontSize: 13,
    fontFamily: "popins-regular",
    fontWeight: "400",
    lineHeight: 17,
  },
});
