import { View, Text, FlatList } from "react-native";
import React from "react";
import { DetailsProps, TreatmentsNavigationProps } from "../types/type";
import { DetailsStyle } from "./Details";
import ReviewItem from "../components/ReviewItem";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Reviews = ({ route }: DetailsProps) => {
  const data = route?.params.data;
  const navigation = useNavigation<TreatmentsNavigationProps>();

  return (
    <View style={[DetailsStyle.container]}>
      <FlatList
        data={data?.Review}
        renderItem={({ item, index }) => <ReviewItem item={item} key={index} />}
        showsVerticalScrollIndicator={false}
      />
      <Button
        title="Book"
        ButtonPress={() => {
          navigation.navigate("Treatments", {
            data: data?.Treatment,
          });
        }}
      />
    </View>
  );
};

export default Reviews;
