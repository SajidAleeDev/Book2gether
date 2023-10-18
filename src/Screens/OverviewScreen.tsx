import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Images } from "../../assets/Images";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { EmployeesItemStyles } from "../components/EmployeesItem";
import CustomeModal from "../components/Modal";
import SafeArea from "../components/SafeArea";
import { OverviewScreenData } from "../data/OverviewScreeData";
import { NavigationProps, OverviewScreenDataPoops } from "../types/type";
import TreatmentDetails from "../components/TreatmentDetails";
import { useNavigation } from "@react-navigation/native";

const OverviewScreen = () => {
  const [Data, setData] = useState<OverviewScreenDataPoops | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation: NavigationProps = useNavigation();

  useEffect(() => {
    setData(OverviewScreenData);
  }, [Data]);
  const handleClicked = () => {
    console.log("clicked");
    navigation.navigate("Home");

    setModalVisible(false);
  };

  return (
    <SafeArea>
      <View style={OverviewStyle.container}>
        <BackButton
          color="#000"
          title="Overview Appointment"
          onPress={() => navigation.goBack()}
        />
        <ScrollView
          style={OverviewStyle.ItemsContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={OverviewStyle.ImageContainer}>
            <Image
              source={{
                uri: Data?.ImageUrl,
              }}
              style={OverviewStyle.Image}
            />
            <View style={OverviewStyle.TextContainer}>
              <Text style={OverviewStyle.Title}>{Data?.name}</Text>
              <Text style={OverviewStyle.TotalPrice}>${Data?.TotalPrice}</Text>
            </View>
          </View>
          <View style={OverviewStyle.TreatmentContainer}>
            <Text style={OverviewStyle.Title}>Treatment</Text>
            <FlatList
              horizontal
              data={Data?.Treatments}
              keyExtractor={(item) => item?.id.toString()}
              renderItem={({ item }) => (
                <TreatmentDetails item={item} overView />
              )}
              showsHorizontalScrollIndicator={false}
              snapToAlignment="start"
              snapToInterval={280}
              decelerationRate="fast"
              bounces={false}
            />
          </View>
          <View style={OverviewStyle.TreatmentContainer}>
            <Text style={OverviewStyle.Title}>Employee</Text>
            <View style={OverviewStyle.Employeeitems}>
              <Image
                source={{
                  uri: Data?.Employees.Image,
                }}
                style={OverviewStyle.EmployeeitemsImage}
              />

              <View>
                <Text
                  style={[
                    EmployeesItemStyles.MainTitle,
                    {
                      color: "#000",
                    },
                  ]}
                >
                  {Data?.Employees.name}
                </Text>
                <Text
                  style={[
                    EmployeesItemStyles.Expertise,
                    {
                      color: "#A4A4A4",
                    },
                  ]}
                >
                  {Data?.Employees.Expertise}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              OverviewStyle.TreatmentContainer,
              {
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 15,
              },
            ]}
          >
            <View
              style={{
                flex: 1,
                padding: 5,
              }}
            >
              <Text
                style={[
                  OverviewStyle.Title,
                  {
                    fontSize: 16,
                  },
                ]}
              >
                Date
              </Text>
              <Text style={OverviewStyle.EmployeeitemsText}>{Data?.Date}</Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 5,
              }}
            >
              <Text
                style={[
                  OverviewStyle.Title,
                  {
                    fontSize: 16,
                  },
                ]}
              >
                Time
              </Text>
              <Text style={OverviewStyle.EmployeeitemsText}>{Data?.Time}</Text>
            </View>
          </View>

          <View style={[OverviewStyle.TreatmentContainer]}>
            <Text style={OverviewStyle.Title}>Address</Text>
            <Text
              style={[
                OverviewStyle.EmployeeitemsText,
                {
                  fontSize: 16,
                  fontWeight: "400",
                  width: "90%",
                  marginVertical: 10,
                },
              ]}
            >
              {Data?.Location}
            </Text>
          </View>
          <View
            style={{
              padding: 5,
              marginTop: 10,
            }}
          >
            <Text style={OverviewStyle.Title}>Phone</Text>
            <Text
              style={[
                OverviewStyle.EmployeeitemsText,
                {
                  fontSize: 16,
                  fontWeight: "400",
                  width: "90%",
                  marginVertical: 10,
                },
              ]}
            >
              {Data?.number}
            </Text>
          </View>
        </ScrollView>
        <Button
          title="Confirm Booking"
          ButtonPress={() => setModalVisible(true)}
        />
      </View>
      <CustomeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        Title="Congratulations!"
        image={Images.CoinIcon}
        Description="Your appointment has been successfully booked."
        ButtonTitle="Go to home"
        HandleClicked={handleClicked}
      />
    </SafeArea>
  );
};

export default OverviewScreen;

export const OverviewStyle = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    paddingVertical: 0,
  },
  ItemsContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
    flex: 1,
  },
  ImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingBottom: 14,

    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5E5",
    borderStyle: "solid",
  },
  Image: {
    width: 98,
    height: 98,
    borderRadius: 20,
    marginRight: 10,
  },
  Title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 21,
    marginBottom: 6,
  },
  TextContainer: {
    flex: 1,
    padding: 5,
  },
  TotalPrice: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16,
    color: "#75BDE0",
  },
  TreatmentContainer: {
    padding: 5,
    marginTop: 10,

    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5E5",
    borderStyle: "solid",
  },
  Employeeitems: {
    marginTop: 10,

    flexDirection: "row",
    alignItems: "center",
  },
  EmployeeitemsImage: {
    marginRight: 10,
    width: 66,
    height: 66,
    resizeMode: "cover",
    borderRadius: 66 / 2,
    marginBottom: 8,
  },
  EmployeeitemsText: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 16,
    color: "#A7A7A7",
    marginLeft: -4,
  },
});
