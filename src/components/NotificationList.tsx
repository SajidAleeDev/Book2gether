import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { NotificationStyle } from "../Styles/Notification";
import { NotificationData } from "../data/NotificationData";
function NotificationList({ item, index }: any) {
  return (
    <View>
      <StatusBar backgroundColor="#ffff" />
      <View style={NotificationStyle.NotificationContainer} key={index}>
        <View>
          <Image
            source={item.Image}
            style={[NotificationStyle.notificationIcon]}
          />
        </View>
        <View style={NotificationStyle.NotificationDetail}>
          <Text style={NotificationStyle.notificationText}>{item.status}</Text>
          <Text style={NotificationStyle.opinion}>{item.comments}</Text>
        </View>
      </View>
    </View>
  );
}

export default NotificationList;
