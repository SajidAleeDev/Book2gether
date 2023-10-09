import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { TreatmentDetailsProps } from "../types/type";
import { Banknote, Clock7 } from "lucide-react-native";

interface props {
  item: TreatmentDetailsProps;
  selected: boolean;
}

const TreatmentDetails = ({
  item,
  selected,
  ...props
}: props & TouchableOpacity["props"]) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        TreatmentDetailsStyle.container,
        {
          backgroundColor: selected ? "#75BDE0" : "#fff",
        },
      ]}
    >
      <Text
        style={[
          TreatmentDetailsStyle.Title,
          {
            color: selected ? "#fff" : "#000",
          },
        ]}
      >
        {item.name}
      </Text>
      <View style={TreatmentDetailsStyle.IconText}>
        <Clock7 size={18} color={selected ? "#fff" : "#000"} />
        <Text
          style={{
            marginLeft: 6,
            color: selected ? "#fff" : "#A4A4A4",
            fontSize: 14,
            fontWeight: "400",
          }}
        >
          {item.duration}
        </Text>
      </View>
      <View style={TreatmentDetailsStyle.IconText}>
        <Banknote size={18} color={selected ? "#fff" : "#000"} />
        <Text
          style={{
            marginLeft: 6,
            color: selected ? "#fff" : "#A4A4A4",
            fontSize: 14,
            fontWeight: "400",
          }}
        >
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TreatmentDetails;

export const TreatmentDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginHorizontal: 5,
    padding: 10,
    height: 117,

    borderRadius: 20,
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  Title: {
    fontSize: 16,
    fontWeight: "600",
  },
  IconText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
});
