import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { Dot, MapPin, PhoneCall } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  StatusBar,
  Animated,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import { SalonDetailsStyle } from "../Styles/SalonDetailsStyle";

import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { HomeItemData } from "../data/HomeItemData";
import { SalonDetailsProps, TreatmentsNavigationProps } from "../types/type";
import Details from "./Details";
import Reviews from "./Reviews";

import { useRef } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const BANNER_H = 300;

const SalonDetails = ({ route }: SalonDetailsProps) => {
  const Tab = createMaterialTopTabNavigator();
  const id = route?.params?.id;
  const [data, setData] = useState<any>(null);

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
  const navigation = useNavigation<TreatmentsNavigationProps | any>();

  function Navigate() {
    navigation.navigate("Treatments", {
      data: data,
    });
  }

  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollA } } }],
        { useNativeDriver: true }
      )}
      style={styles.scrollView}
    >
      <BackButton
        onPress={() => navigation.goBack()}
        color="#000"
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 15,
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <Animated.Image
          style={styles.banner(scrollA)}
          width={Dimensions.get("window").width}
          height={BANNER_H}
          source={{
            uri: data?.Image,
          }}
          resizeMode={"cover"}
        />
        <View style={styles.ContainerContent}>
          <View style={SalonDetailsStyle.ContentContainer}>
            <View style={[SalonDetailsStyle.TextContainer, { paddingTop: 10 }]}>
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
                flex: 1,
                height: Dimensions.get("window").height / 2,
                // zIndex: 10,
              }}
            >
              <Tab.Navigator
                initialRouteName="Details"
                screenOptions={{
                  // swipeEnabled: false,
                  tabBarIndicatorStyle: {
                    backgroundColor: "#75BDE0",

                    height: 3,
                    borderRadius: 30,

                    // flex: 1,
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
                    shadowRadius: 3,
                    shadowOpacity: 0.1,
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
                <Tab.Screen
                  name="Review"
                  component={Reviews}
                  initialParams={{
                    data: data,
                  }}
                />
              </Tab.Navigator>
            </View>
          </View>
        </View>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 26,
    padding: 20,
    paddingBottom: 0,
  },
  ContainerContent: {
    // justifyContent: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -30,
    height: Dimensions.get("window").height - 70,
  },
  banner: (scrollA) => ({
    height: BANNER_H,
    width: "100%",
    transform: [
      {
        translateY: scrollA,
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 5, BANNER_H, BANNER_H + 2],
          outputRange: [3, 1, 1.5, 3],
        }),
      },
    ],
  }),
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default SalonDetails;
