import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useBucket } from "../Hooks/Context";
import OpenTimeText from "../components/OpenTimeText";
import { DetailsProps } from "../types/type";

const Details = ({ route }: DetailsProps) => {
  const { data } = route?.params ?? {};

  const { setSelectedSalon } = useBucket();

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
    </View>
  );
};

export default Details;

export const DetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
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
    margin: 8,
    height: 209,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 0.5,
  },
});
