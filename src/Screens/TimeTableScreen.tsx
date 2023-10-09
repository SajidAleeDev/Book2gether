import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import SafeArea from "../components/SafeArea";
import { TimeData } from "../data/TimeData";
import { TimeProps } from "../types/type";
import DateTimeItem from "../components/DateTimeItem";
import { useBucket } from "../Hooks/Context";

const TimeTableScreen = () => {
  const [selectedDate, setSelectedData] = useState<number | null>(null);

  console.log(selectedDate);

  return (
    <SafeArea>
      <View style={TimeTableStyle.container}>
        <BackButton color="#000" title="Select Date & Time" />
        <View style={{ flex: 1, marginTop: 20 }}>
          <CalendarPicker
            nextComponent={<ArrowRight size={24} color="#000" />}
            previousComponent={<ArrowLeft size={24} color="#000" />}
            scrollable={false}
            onDateChange={(date) => console.log(date.toString())}
            textStyle={{ color: "#000" }}
            todayBackgroundColor="#fff"
            todayTextStyle={{
              color: "#fff",
              height: 40,
              width: 40,
              borderRadius: 10, // in ios not working in android it's working properly
              backgroundColor: "#75BDE0",
              textAlign: "center",
              padding: 10,
              margin: 2,
            }}
            selectedDayColor="#75BDE0"
            selectedDayTextColor="#fff"
            selectedDayStyle={{
              height: 40,
              width: 40,
              borderRadius: 10,
              backgroundColor: "#75BDE0",

              padding: 10,
            }}
            dayShape="square"
          />
          <View style={TimeTableStyle.TimeContainer}>
            <Text style={TimeTableStyle.TimeText}>Available Time Slots</Text>
            <FlatList
              data={TimeData}
              renderItem={({ item, index }) => (
                <DateTimeItem
                  item={item}
                  onPress={() => setSelectedData(index)}
                  SelectedDate={selectedDate === index}
                />
              )}
              numColumns={3}
              keyExtractor={(item) => item.startTime}
              style={{ marginTop: 10 }}
            />
          </View>
        </View>
        <Button title="Next" />
      </View>
    </SafeArea>
  );
};

export default TimeTableScreen;

export const TimeTableStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
