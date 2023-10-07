import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { Dot, MapPin, PhoneCall } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import BackButton from "../components/BackButton";
import { HomeItemData } from "../data/HomeItemData";
import { SalonDetailsProps } from "../types/type";
import Details from "./Details";
import Reviews from "./Reviews";
import { SalonDetailsStyle } from "../Styles/SalonDetailsStyle";

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
  if (data === null) {
    fetchDataById(id as number);
  }

  return (
    <View style={SalonDetailsStyle.container}>
      <View style={SalonDetailsStyle.ImageContainer}>
        <Image source={data?.Image} style={SalonDetailsStyle.Image} />
        <View style={SalonDetailsStyle.overlay} />
      </View>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={SalonDetailsStyle.ContentContainerWrapper}>
        <ScrollView
          style={SalonDetailsStyle.ContentContainer}
          showsVerticalScrollIndicator={false}
        >
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
              // height: Dimensions.get("window").height - 300,
              height: 600,
            }}
          >
            <Tab.Navigator
              initialRouteName="Details"
              sceneContainerStyle={{
                backgroundColor: "transparent",
                shadowColor: "transparent",
              }}
              screenOptions={{
                tabBarIndicatorStyle: {
                  backgroundColor: "#75BDE0",
                  height: 3,
                  borderRadius: 30,
                },
                tabBarLabelStyle: {
                  fontFamily: "popins-medium",
                  fontSize: 13,
                },
                tabBarStyle: {
                  backgroundColor: "#fff",
                  elevation: 1,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowRadius: 20,
                  shadowOpacity: 1,
                },
              }}
            >
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
