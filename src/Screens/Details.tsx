import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import EmployeesItem from "../components/EmployeesItem";
import OpenTimeText from "../components/OpenTimeText";
import TreatmentButton from "../components/TreatmentButton";
import {
  DetailsProps,
  TreatmentDetailsProps,
  TreatmentProps,
} from "../types/type";
import TreatmentDetails from "../components/TreatmentDetails";

const Details = ({ route }: DetailsProps) => {
  const { data } = route?.params ?? {};
  const [selected, setSelected] = useState<any>(null);
  const [treatment, setTreatment] = useState<any>([]);

  function SelectingItem(index: number, item: any) {
    setSelected(index);
    setTreatment(item);
  }

  return (
    <View style={DetailsStyle.container}>
      <Text style={DetailsStyle.HeaderText}>Opening Hours</Text>
      <View style={DetailsStyle.openingContainer}>
        <FlatList
          data={data?.OpenTiming}
          renderItem={({ item, index }) => (
            <OpenTimeText item={item} key={index} />
          )}
          scrollEnabled={false}
          style={{
            padding: 10,
          }}
        />
      </View>
      <Text style={DetailsStyle.HeaderText}>
        Employees {data?.Employees?.length}{" "}
      </Text>
      <View
        style={{
          marginBottom: 10,
        }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data?.Employees}
          renderItem={({ item, index }) => (
            <EmployeesItem item={item} key={index} />
          )}
          style={{
            padding: 10,
          }}
        />
      </View>

      <Text style={DetailsStyle.HeaderText}>Treatments (48)</Text>
      <View style={{ marginVertical: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data?.Treatment}
          renderItem={({ item, index }) => (
            <TreatmentButton
              item={item}
              key={index + 1}
              SelectedTreatment={selected === index}
              onPress={() => SelectingItem(index, item.Treatments)}
            />
          )}
          style={{
            padding: 10,
          }}
        />
      </View>
      <FlatList
        data={treatment}
        renderItem={({ item, index }) => (
          <TreatmentDetails item={item} key={index} />
        )}
        style={{
          padding: 10,
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
  },
  HeaderText: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "popins-semibold",
    fontWeight: "600",
    lineHeight: 19,
  },
  openingContainer: {
    margin: 10,
    height: 209,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 0.5,
    marginBottom: 20,
  },
});
