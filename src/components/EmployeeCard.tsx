import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { adjustSize } from "../Styles/ServiceStyle";
import { EmployeePropsItem } from "../types/type";

const EmployeeCard = ({
  item,
  ...props
}: EmployeePropsItem & TouchableOpacity["props"]) => {
  const ios = Platform.OS === "ios";


console.log("====data======>",item)

  return (
    <TouchableOpacity
      activeOpacity={0.3}
      {...props}
      style={[
        EmployeesItemStyles.container,
        {
          margin: adjustSize(4),
          // height:120,
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
           
          ]}
        >
          {item?.name}
        </Text>
        <Text
          style={[
            EmployeesItemStyles.Expertise,
          ]}
        >
          {item?.Expertise}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EmployeeCard;

export const EmployeesItemStyles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 10,
    padding: 10,
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
  },
  Expertise: {
    fontSize: 13,
    fontFamily: "popins-regular",
    fontWeight: "400",
    lineHeight: 17,
  },
});
