import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Dot, MapPin } from "lucide-react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { HomeItemNavigationProps, HomeItemProps } from "../types/type";

const AppointmentCard = ({ item }: HomeItemProps) => {
  const navigation: HomeItemNavigationProps = useNavigation();

  return (
    <TouchableOpacity
      style={HomeItemStyle.container}
      onPress={() => {
        navigation.navigate("SalonDetails", {
          id: item?.id,
        });
      }}
    >
      <View style={HomeItemStyle.ImageContainer}>
        <Image
          source={{
            uri: item?.Image,
          }}
          style={HomeItemStyle.Image}
        />
      </View>
      <View style={HomeItemStyle.TextContainer}>
        <View style={HomeItemStyle.TitleContainer}>
          <Text style={HomeItemStyle.Title}>{item?.name}</Text>
        </View>
        <Text style={HomeItemStyle.LocationText}>{item.Location}</Text>
        <View style={HomeItemStyle.ButtonContainer}>
          <Text style={HomeItemStyle.TextCity}>
            <MapPin
              size={15}
              color="#75BDE0"
              style={{
                marginRight: 5,
              }}
            />
            {item.city}
          </Text>
          <TouchableOpacity
            style={HomeItemStyle.Button}
            onPress={() => {
              navigation.navigate("AppointmentDetails", {
                id: item?.id,
              });
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "popins-semibold",
              }}
            >
              Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppointmentCard;

export const HomeItemStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 4,
    marginHorizontal: 4,
    flex: 1,

    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    borderRadius: 16,
    elevation: 4,
    flexDirection: "row",
  },
  ImageContainer: {
    width: 110,
    height: 110,
    borderRadius: 16,
    margin: 8,
  },
  Image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    objectFit: "cover",
  },
  TextContainer: {
    paddingHorizontal: 3,
    paddingVertical: 10,
    flex: 1,
    margin: 6,
  },
  Title: {
    fontSize: 18,
    fontFamily: "popins-semibold",
    fontWeight: "600",
    marginBottom: 7,
    color: "#000",
    lineHeight: 21,
  },
  LocationText: {
    fontSize: 14,
    fontFamily: "popins-regular",
    fontWeight: "400",
    color: "#BDBDBD",
    lineHeight: 16,
    flex: 1,
  },
  TitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  ButtonContainer: {
    marginVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TextCity: {
    fontSize: 16,
    fontFamily: "popins-regular",
    fontWeight: "400",
    color: "#000",
    lineHeight: 19,
    flexDirection: "row",
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#75BDE0",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 12,
  },
});
