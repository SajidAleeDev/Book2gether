import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SalonDetailsProps } from "../types/type";
import { HomeItemData } from "../data/HomeItemData";
import { ArrowLeft, Dot, PhoneCall } from "lucide-react-native";
import { MapPin } from "lucide-react-native";
import StarRating from "react-native-star-rating-widget";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Details from "./Details";
import Reviews from "./Reviews";

const SalonDetails = ({ route }: SalonDetailsProps) => {
  const Tab = createMaterialTopTabNavigator();
  const id = route?.params?.id;
  const [data, setData] = useState<any>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (id) {
      fetchDataById(id);
    }
  }, [id]);

  const fetchDataById = (id: number) => {
    const item = HomeItemData.find((item) => item.id === id);
    setData(item);
  };

  return (
    <View style={SalonDetailsStyle.container}>
      <View style={SalonDetailsStyle.ImageContainer}>
        <Image source={data?.Image} style={SalonDetailsStyle.Image} />
        <View style={SalonDetailsStyle.overlay} />
      </View>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={SalonDetailsStyle.ContentContainerWrapper}>
        <ScrollView style={SalonDetailsStyle.ContentContainer}>
          <View style={SalonDetailsStyle.TextContainer}>
            <Text style={SalonDetailsStyle.text}>{data?.name}</Text>
            <View style={SalonDetailsStyle.openContainer}>
              <Dot
                size={60}
                style={{
                  right: -20,
                  position: "relative",
                }}
                color={data?.open ? "#00BA88" : "#FF647C"}
              />
              <Text style={SalonDetailsStyle.openContainerText}>
                {data?.open ? "Open" : "Close"}
              </Text>
            </View>
          </View>
          <View style={SalonDetailsStyle.AboutContainer}>
            <Text style={SalonDetailsStyle.AboutText}>
              <MapPin
                size={20}
                color="#000"
                style={{
                  marginRight: 5,
                }}
              />{" "}
              {data?.Location}
            </Text>
            <Text style={SalonDetailsStyle.AboutText}>
              <PhoneCall
                size={20}
                color="#000"
                style={{
                  marginRight: 5,
                }}
              />{" "}
              {data?.number}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <StarRating
                rating={data?.Rating}
                onChange={(rating) => console.table(rating)} // for ignoring
                starSize={25}
                emptyColor="#DFDFDF"
                enableHalfStar
                maxStars={5}
              />
              <Text style={SalonDetailsStyle.AboutText}>{data?.Rating}</Text>
            </View>
          </View>
          <View
            style={{
              height: 500,
            }}
          >
            <Tab.Navigator initialRouteName="Details" sceneContainerStyle={{}}>
              <Tab.Screen
                name="Details"
                component={Details}
                initialParams={{
                  data: data,
                }}
              />
              <Tab.Screen name="Review" component={Reviews} />
            </Tab.Navigator>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SalonDetails;

const SalonDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  ImageContainer: {
    height: 376,
  },

  Image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.29)",
  },

  ContentContainerWrapper: {
    height: 534,
    overflow: "hidden",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  ContentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "popins-semibold",
  },
  TextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  openContainer: {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
  },
  openContainerText: {
    color: "#A4A4A4",
    fontSize: 18,
  },
  AboutContainer: {
    paddingLeft: 10,
  },
  AboutText: {
    color: "#A4A4A4",
    fontWeight: "400",
    fontFamily: "popins-medium",
    padding: 3,
  },
});
