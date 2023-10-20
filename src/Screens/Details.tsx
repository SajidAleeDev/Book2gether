import React, { useState, useMemo, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { useBucket } from "../Hooks/Context";
import OpenTimeText from "../components/OpenTimeText";
import { DetailsProps } from "../types/type";
import EmployeeCard from "../components/EmployeeCard";
import TreatmentButton from "../components/TreatmentButton";
import TreatmentDetails from "../components/TreatmentDetails";
import { EmployeeNavigationProps, TreatmentsItemProps } from "../types/type";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
const Details = ({ route }: DetailsProps) => {
  const { data } = route?.params ?? {};
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(0);
  const [selectedTreatmentDetailsItem, setSelectedTreatmentDetailsItem] =
    useState<any[]>([]);
  const [selectedTreatmentDetails, setSelectedTreatmentDetails] =
    useState<any>(null);

  const navigation = useNavigation<EmployeeNavigationProps | any>();

  // const Navigate = () => {
  //   if (selectedTreatmentDetailsItem.length > 0) {
  //     navigation.navigate("Employee", {
  //       data: FullData?.Employees,
  //     });
  //     setSelectedTreatmentDetailsItem([]);
  //   } else {
  //     alert("Please Select Treatment");
  //     return;
  //   }
  // };

  useMemo(() => {
    if (
      data &&
      selectedTreatment !== null &&
      selectedTreatment >= 0 &&
      selectedTreatment < data.length
    ) {
      setSelectedTreatmentDetails(data[selectedTreatment].Treatments);
    }
  }, [data, selectedTreatment]);

  // const { setSelectedSalon } = useBucket();
  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      style={DetailsStyle.container}
    >
      <Text style={[DetailsStyle.HeaderText, { marginTop: 10 }]}>
        Opening Hours
      </Text>
      <View style={DetailsStyle.openingContainer}>
        <FlatList
          data={data?.OpenTiming}
          renderItem={({ item, index }) => (
            <OpenTimeText item={item} key={index} />
          )}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          style={{
            padding: 10,
            paddingBottom: 0,
          }}
        />
      </View>
      <Text style={[DetailsStyle.HeaderText, { marginTop: 20 }]}>
        Employees ({data?.Employees.length}){" "}
      </Text>

      <FlatList
        horizontal
        data={data?.Employees}
        renderItem={({ item, index }) => (
          <EmployeeCard item={item} key={index} />
        )}
        showsHorizontalScrollIndicator={false}
        style={{
          padding: 10,
        }}
      />
      <Text style={[DetailsStyle.HeaderText, { marginTop: 20 }]}>
        Treatments ({data?.Treatment.length}){" "}
      </Text>
      <View style={TreatmentsStyle.TreatmentFilter}>
        <FlatList
          data={data?.Treatment}
          horizontal
          renderItem={({ item, index }: any) => (
            <TreatmentButton
              item={item}
              SelectedTreatment={selectedTreatment === index}
              key={index + 1}
              // onPress={() => {
              //   setSelectedTreatment(index);
              // }}
            />
          )}
        />
      </View>
      <View
        style={{
          paddingVertical: 10,
          flex: 1,
        }}
      >
        <FlatList
          horizontal
          data={data?.Treatment[selectedTreatment].Treatments}
          renderItem={({ item, index }) => (
            <TreatmentDetails key={index + 1} item={item} />
          )}
          showsHorizontalScrollIndicator={false}
          style={{
            flex: 1,
          }}
        />
      </View>
      <Button
        title="Book"
        ButtonPress={() => {
          navigation.navigate("Treatments", {
            data: data,
          });
        }}
        // marginBottom={-11}
      />
    </ScrollView>
  );
};

export default Details;

export const DetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 10,
    backgroundColor: "#FCFCFC",
  },
  HeaderText: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "popins-semibold",
    fontWeight: "600",
    lineHeight: 19,
  },
  openingContainer: {
    marginVertical: 8,
    paddingBottom: 13,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 0.5,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export const TreatmentsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    paddingBottom: 0,
  },
  TreatmentFilter: {
    marginTop: 20,
  },
});
