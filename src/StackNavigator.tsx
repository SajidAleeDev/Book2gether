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
import OverviewScreen from "./Screens/OverviewScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useBucket } from "./Hooks/Context";
import RegisterScreen from "./Screens/RegisterScreen";
import OTP from "./Screens/OTP";
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
  const { user } = useBucket();

  const authenticatedRoutes = [
    {
      name: "Language",
      component: LanguageScreen,
    },

    {
      name: "Notification",
      component: NotificationScreen,
    },
    {
      name: "Location",
      component: LocationScreen,
    },
    {
      name: "Service",
      component: ServiceScreen,
    },
    {
      name: "MyTab",
      component: MyTabs,
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
       name : "UserProfile",
        component: UserProfile
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
       name : "OPT",
       component: OTP
     }
  ];

  const Routes = !user ? unAuthenticatedRoutes : authenticatedRoutes 
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

