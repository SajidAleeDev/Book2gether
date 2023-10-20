import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import { useBucket } from "../Hooks/Context";
import Button from "../components/Button";
import ReviewItem from "../components/ReviewItem";
import { DetailsProps, TreatmentsNavigationProps } from "../types/type";
import { DetailsStyle } from "./Details";

const Reviews = ({ route }: DetailsProps) => {
  const data = route?.params.data;
  const navigation = useNavigation<TreatmentsNavigationProps>();
  // const { setSelectedSalon } = useBucket();

  function Navigate() {
    navigation.navigate("Treatments", {
      data: data,
    });
  }

  return (
    <View style={[DetailsStyle.container]}>
      <FlatList
        data={data?.Review}
        renderItem={({ item, index }) => <ReviewItem item={item} key={index} />}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
      />

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

export default Reviews;
