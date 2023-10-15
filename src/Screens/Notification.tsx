import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import React from "react";
import SafeArea from "../components/SafeArea";
import { NotificationStyle } from "../Styles/Notification";
import NotificationList from "../components/NotificationList";
import NotificaionToday from "../components/NotificaionToday";
import { NotificationData } from "../data/NotificationData";
import { today } from "../data/NotificationData";
import { notificationProps } from "../types/type";
const Notification = () => {
  return (
    <SafeArea gray>
      <StatusBar backgroundColor="#ffff" />
      <ScrollView style={NotificationStyle.container}>
        <View style={NotificationStyle.headingsContainer}>
          <Text style={NotificationStyle.headingText}>Notifications</Text>
        </View>
        <View>
          <Text style={NotificationStyle.daytext}>Today</Text>
        </View>
        <FlatList
          data={today}
          renderItem={({ item, index }) => (
            <NotificaionToday key={index} item={item} />
          )}
          keyExtractor={({ index }: any) => index}
          style={{
            flex: 1,
            paddingBottom: 10,
          }}
          scrollEnabled={false}
        />

        <View>
          <Text style={NotificationStyle.daytext}>Yesterday</Text>
        </View>
        <FlatList
          data={NotificationData}
          renderItem={({ item, index }) => (
            <NotificationList key={index} item={item} />
          )}
          keyExtractor={({ index }: any) => index}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeArea>
  );
};

export default Notification;
