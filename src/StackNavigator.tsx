import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BellIcon, CompassIcon, User } from "lucide-react-native";
import React from "react";
import HomeIcon from "../assets/Svg/HomeIcon";
import EmployeeScreen from "./Screens/EmployeeScreen";
import Home from "./Screens/Home";
import LanguageScreen from "./Screens/LanguageScreen";
import LocationScreen from "./Screens/LocationScreen";
import Maps from "./Screens/Maps";
import Notification from "./Screens/Notification";
import NotificationScreen from "./Screens/NotificationScreen";
import Profile from "./Screens/Profile";
import SalonDetails from "./Screens/SalonDetails";
import ServiceScreen from "./Screens/ServiceScreen";
import TimeTableScreen from "./Screens/TimeTableScreen";
import TreatmentsScreen from "./Screens/TreatmentsScreen";
import UserProfile from "./components/UserProfile";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        safeAreaInsets={{ bottom: 0, top: 0 }}
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#75BCDF",
          tabBarInactiveTintColor: "#BDBDBD",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 0,
            elevation: 20,
            height: 60,
            paddingBottom: 10,
            borderRadius: 30,
            margin: 1,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <HomeIcon color={color} size={size} />;
            },

            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Maps"
          component={Maps}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <CompassIcon color={color} size={size} />;
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <BellIcon color={color} size={size} />;
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <User color={color} size={size} />;
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="Language"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#FCFCFC",
        },
      }}
    >
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Service" component={ServiceScreen} />
      <Stack.Screen name="SalonDetails" component={SalonDetails} />
      <Stack.Screen name="Treatments" component={TreatmentsScreen} />
      <Stack.Screen name="Employee" component={EmployeeScreen} />
      <Stack.Screen name="TimeTable" component={TimeTableScreen} />
      <Stack.Screen name="MyTab" component={MyTabs} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
