import React from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  View
} from "react-native";
import { NotificationStyle } from "../Styles/Notification";
import NotificaionToday from "../components/NotificaionToday";
import NotificationList from "../components/NotificationList";
import SafeArea from "../components/SafeArea";
import { NotificationData, today } from "../data/NotificationData";
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
        key={
          Math.random().toString()
        }
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
