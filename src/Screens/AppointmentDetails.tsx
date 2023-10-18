import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import SafeArea from "../components/SafeArea";

import { MaterialIcons } from "@expo/vector-icons";
import { ProfileStyle } from "../Styles/profile";
import { Images } from "../../assets/Images";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/type";
import { AppointmentData } from "../data/AppointmentData";
import AppointmentCard from "../components/AppointmentCard";
import ReveiwModal from "../components/ReveiwModal";
const AppointmentDetails = ({ route }: any) => {
  const navigation = useNavigation<NavigationProps | any>();
  const [modalVisible, setModalVisible] = useState(false);

  const item = AppointmentData.filter((val) => (val.id = route.params.id))[0];
  const handleClicked = () => {
    setModalVisible(true);
  };

  return (
    <SafeArea>
      <StatusBar backgroundColor="#fff" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[
          ProfileStyle.Profileback,
          { paddingHorizontal: 10, marginVertical: 20 },
        ]}
      >
        <Image source={Images.arrowleft} style={ProfileStyle.backarrow} />
        <Text style={ProfileStyle.headerHeading}>Appointment Details</Text>
      </TouchableOpacity>
      <ScrollView>
      <View style={styles._body}>
        <View style={styles._details_section}>
          <View style={styles._row}>
              <Image
                source={{
                  uri: item?.Image,
                }}
                style={styles.Image}
              />
            <View>
              <Text style={styles.Title}>{item?.name}</Text>
              <Text style={styles._charges}>$200</Text>
            </View>
          </View>
          <View style={styles._line} />
          <Text style={styles._label}>Treatment</Text>
          <Text style={styles._value}>Hair dyeing & Straightening</Text>
          <View style={[styles._row, { marginVertical: 5 }]}>
            <MaterialIcons
              name="access-time"
              size={20}
              style={{ marginTop: -5, marginRight: 4 }}
              color="#000000"
            />
            <Text style={[styles._value, { fontSize: 14, fontWeight: "400" }]}>
              1.5 Hour
            </Text>
          </View>

          <View style={styles._line} />
          <Text style={styles._label}>Employee</Text>
          <View style={[styles._row,{marginTop:10}]}>
            <Image
              source={{
                uri: item?.Image,
              }}
              style={styles._employee}
            />
            <View>
              <View style={styles._employee_section}>
                <Text style={[styles._label, { fontFamily: "popins-medium" }]}>
                  {item?.name}
                </Text>
                <Text
                  style={[
                    styles._value,
                    { fontFamily: "popins-medium", fontWeight: "400" },
                  ]}
                >
                  Hair Stylist
                </Text>
              </View>
            </View>
          </View>
          <View style={styles._line} />

          <View style={styles._row}>
            <View style={styles._timing_section}>
              <Text style={styles._label}>Date</Text>
              <Text style={styles._value}>24 Sep 2023</Text>
            </View>

            <View style={styles._timing_section}>
              <Text style={styles._label}>Time</Text>
              <Text style={styles._value}>11:30 -12:00</Text>
            </View>
          </View>

          <View style={styles._line} />
          <Text style={styles._label}>Address</Text>
          <Text style={styles._value}>
            42 Baker Street, London 567 Elmwood Avenue.
          </Text>

          <View style={styles._line} />
          <Text style={styles._label}>Phone</Text>
          <Text style={styles._value}>+1 2487865278</Text>
        </View>
      </View>


      <ReveiwModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        Title="Congratulations!"
        image={Images.CoinIcon}
        Description="Your appointment has been successfully booked."
        ButtonTitle="Go to home"
        HandleClicked={handleClicked}
      />



      </ScrollView>
      <View style={ProfileStyle.profilesbtn}>
        <Button title="Add Review" ButtonPress={() => handleClicked()} />
      </View>
    </SafeArea>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  _body: {
    flex: 1,
  },
  _details_section: {
    backgroundColor: "#fff",
    marginVertical: 4,
    marginHorizontal: 10,

    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    borderRadius: 16,
    elevation: 4,
    padding: 10,
  },

  ImageContainer: {
    width: 110,
    height: 110,
    borderRadius: 16,
  },
  Image: {
    width: 98,
    height: 98,
    borderRadius: 16,
    objectFit: "cover",
    marginRight:15
  },
  TextContainer: {
    paddingHorizontal: 3,
    paddingVertical: 10,
    flex: 1,
    margin: 6,
  },
  Title: {
    fontSize: 18,
    fontFamily: "popins-semibold",
    fontWeight: "600",
    marginBottom: 7,
    color: "#000",
    lineHeight: 21,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom:5
  },
  _charges: {
    color: "#75BDE0",
    fontFamily: "popins-medium",
    fontWeight: "600",
  },
  _line: {
    borderColor: "#ECECEC",
    borderTopWidth: 1,
    marginVertical: 20,
  },
  _label: {
    color: "#000000",
    fontFamily: "popins-bold",
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
  },
  _value: {
    color: "#A4A4A4",
    fontFamily: "popins-medium",
    fontWeight: "500",
    fontSize: 16,
  },
  _employee: {
    width: 61,
    height: 61,
    borderRadius: 61 / 2,
    objectFit: "cover",
  },
  _employee_section: {
    marginLeft: 10,
  },
  _timing_section: {
    flex: 1,
  },
});
