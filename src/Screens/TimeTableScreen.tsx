import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import DateTimeItem from "../components/DateTimeItem";
import SafeArea from "../components/SafeArea";
import { TimeData } from "../data/TimeData";
import { NavigationProps, SelectedTimeProps } from "../types/type";

const TimeTableScreen = () => {
  const [selectedTime, setSelectedTime] = useState<SelectedTimeProps | null>(
    null
  );
  const [date, setDate] = useState<string>("");

  const navigation: NavigationProps = useNavigation();

  const Navigate = () => {
    if (selectedTime === null) {
      alert("Please Select Time");
    } else {
      navigation.navigate("Overview");
    }
  };

  return (
    <SafeArea>
      <View style={TimeTableStyle.container}>
        <BackButton
          color="#000"
          title="Select Date & Time"
          onPress={() => navigation.goBack()}
        />
        <View style={{ flex: 1, marginTop: 20 }}>
          <CalendarPicker
            nextComponent={<ArrowRight size={24} color="#000" />}
            previousComponent={<ArrowLeft size={24} color="#000" />}
            scrollable={false}
            allowBackwardRangeSelect={false}
            onDateChange={(date) => setDate(date.toString().slice(0, 15))}
            weekdays={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
            months={[
              "January",
              "Febraury",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "Octomber",
              "November",
              "December",
            ]}
            textStyle={{ color: "#000" }}
            todayBackgroundColor="#fff"
            todayTextStyle={{
              color: "#fff",
              height: 40,
              width: 40,
              borderRadius: 20, // in ios not working in android it's working properly
              backgroundColor: "#A7A7A7",
              textAlign: "center",
              padding: 10,
              margin: 2,
            }}
            selectedDayColor="#75BDE0"
            selectedDayTextColor="#fff"
            // enableDateChange={false}
            selectedDayStyle={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: "#75BDE0",

              padding: 10,
            }}
            // disabledDates
            dayShape="circle"
          />
          <View style={TimeTableStyle.TimeContainer}>
            <Text style={TimeTableStyle.TimeText}>Available Time Slots</Text>
            <FlatList
              data={TimeData}
              renderItem={({ item, index }) => (
                <DateTimeItem
                  item={item}
                  onPress={() => setSelectedTime(item)}
                  SelectedDate={selectedTime === item}
                />
              )}
              numColumns={3}
              keyExtractor={(item) => item.startTime}
              style={{ marginTop: 10 }}
            />
          </View>
        </View>
        <Button
          title="Next"
          ButtonPress={() => {
            Navigate();
          }}
        />
      </View>
    </SafeArea>
  );
};

export default TimeTableScreen;

export const TimeTableStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
  },
  TimeContainer: {
    padding: 7,
  },
  TimeText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "popins-semibold",
    fontWeight: "600",
  },
  button: {
    alignItems: "center",
    width: 100,
    marginRight: 10,
    marginBottom: 10,

    paddingHorizontal: 18,
    paddingVertical: 11,
    borderColor: "#A7A7A7",
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
  },
  Text: {
    fontSize: 12,
    fontWeight: "400",
  },
});
