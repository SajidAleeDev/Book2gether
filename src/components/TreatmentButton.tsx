import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TreatmentProps } from "../types/type";

const TreatmentButton = ({
  item,

  SelectedTreatment,
  ...props
}: TreatmentProps & TouchableOpacity["props"]) => {
  return (
    <View style={TreatmentStyle.container}>
      <TouchableOpacity
        style={[
          TreatmentStyle.Button,
          {
            backgroundColor: SelectedTreatment ? "#75BDE0" : "#fff",
            borderWidth: SelectedTreatment ? 0 : 1,
          },
        ]}
        {...props}
      >
        <Text
          style={[
            TreatmentStyle.Text,
            {
              color: SelectedTreatment ? "#fff" : "#A7A7A7",
            },
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TreatmentButton;

export const TreatmentStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
  },
  Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderColor: "#A7A7A7",
    borderStyle: "solid",
    borderRadius: 10,
  },
  Text: {
    fontSize: 14,
    fontWeight: "400",
  },
});
