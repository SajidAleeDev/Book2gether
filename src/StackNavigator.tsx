import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BellIcon, CompassIcon, User } from "lucide-react-native";
import { Platform } from "react-native";
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
import OverviewScreen from "./Screens/OverviewScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useBucket } from "./Hooks/Context";
import RegisterScreen from "./Screens/RegisterScreen";
import OTP from "./Screens/OTP";
import UserProfile from "./components/UserProfile";
import AppointmentHistory from "./Screens/AppointmentHistory";
import AppointmentDetails from "./Screens/AppointmentDetails";
import SelectLanguage from "./Screens/SelectLanguage";
import SelectedLocationScreen from "./Screens/SelectedLocationScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const { user } = useBucket();
  const Ios = Platform.OS === "ios";

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
            height: Ios ? 66 : 60,
            paddingBottom: Ios ? 20 : 10,
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

  const authenticatedRoutes = [
    {
      name: "Location",
      component: LocationScreen,
    },
    {
      name: "Service",
      component: ServiceScreen,
    },

    {
      name: "SalonDetails",
      component: SalonDetails,
    },
    {
      name: "Treatments",
      component: TreatmentsScreen,
    },
    {
      name: "Employee",
      component: EmployeeScreen,
    },
    {
      name: "TimeTable",
      component: TimeTableScreen,
    },
    {
      name: "Overview",
      component: OverviewScreen,
    },
    {
      name: "UserProfile",
      component: UserProfile,
    },
    {
      name: "AppointmentHistory",
      component: AppointmentHistory,
    },
    {
      name: "AppointmentDetails",
      component: AppointmentDetails,
    },
    {
      name: "Login",
      component: LoginScreen,
    },
    {
      name: "Register",
      component: RegisterScreen,
    },
    {
      name: "OPT",
      component: OTP,
    },
    {
      name: "SelectLanguage",
      component: SelectLanguage,
    },
    {
      name: "MyTab",
      component: MyTabs,
    },
    {
      name: "Language",
      component: LanguageScreen,
    },
    {
      name: "SelectedLocation",
      component: SelectedLocationScreen,
    },

    {
      name: "Notification",
      component: NotificationScreen,
    },
  ];
  const unAuthenticatedRoutes = [
    {
      name: "Login",
      component: LoginScreen,
    },
    {
      name: "Register",
      component: RegisterScreen,
    },
    {
      name: "OPT",
      component: OTP,
    },
  ];

  const Routes = user ? unAuthenticatedRoutes : authenticatedRoutes;
  return (
    <Stack.Navigator
      initialRouteName={Routes[0].name}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#FCFCFC",
        },
      }}
    >
      {Routes.map((route) => {
        return (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
