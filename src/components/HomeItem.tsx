import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Dot, MapPin } from "lucide-react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { HomeItemNavigationProps } from "../types/type";

const HomeItem = ({ item }: any) => {
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
        <Image source={item.Image} style={HomeItemStyle.Image} />
      </View>
      <View style={HomeItemStyle.TextContainer}>
        <View style={HomeItemStyle.TitleContainer}>
          <Text style={HomeItemStyle.Title}>{item.name}</Text>
          <Dot
            size={60}
            style={{
              position: "absolute",
              right: -20,
              top: -22,
            }}
            color={item.open ? "#00BA88" : "#FF647C"}
          />
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
              navigation.navigate("SalonDetails", {
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
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeItem;

export const HomeItemStyle = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fff",
    height: 138,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },

    borderRadius: 16,
    elevation: 3,
    flexDirection: "row",
  },
  ImageContainer: {
    width: 110,
    height: 110,
    borderRadius: 16,
    margin: 13,
  },
  Image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    objectFit: "cover",
  },
  TextContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
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
    paddingVertical: 8,
    borderRadius: 12,
  },
});
