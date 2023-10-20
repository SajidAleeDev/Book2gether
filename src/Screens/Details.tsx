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
    <View style={DetailsStyle.container}>
      <Text style={[DetailsStyle.HeaderText, { marginTop: 10 }]}>
        Opening Hours
      </Text>
      <View style={DetailsStyle.openingContainer}>
        {data?.OpenTiming?.length > 0 &&
          data?.OpenTiming.map((item, index) => (
            <OpenTimeText item={item} key={index} />
          ))}
      </View>
      <Button
        title="Book"
        ButtonPress={() => {
          navigation.navigate("Treatments", {
            data: data,
          });
        }}
      />
    </View>
  );
};

export default Details;

export const DetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#FCFCFC",
    // backgroundColor: "red",
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
    paddingBottom: "20%",
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
