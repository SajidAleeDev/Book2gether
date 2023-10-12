import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import SafeArea from "../components/SafeArea";
import TreatmentButton from "../components/TreatmentButton";
import TreatmentDetails from "../components/TreatmentDetails";
import { EmployeeNavigationProps, TreatmentsItemProps } from "../types/type";
const TreatmentsScreen = ({ route }: TreatmentsItemProps) => {
  const navigation = useNavigation<EmployeeNavigationProps | any>();
  const data = route?.params.data.Treatment;
  const FullData = route?.params.data;
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(0);
  const [selectedTreatmentDetailsItem, setSelectedTreatmentDetailsItem] =
    useState<any[]>([]);
  const [selectedTreatmentDetails, setSelectedTreatmentDetails] =
    useState<any>(null);

  
  
  

  const Navigate = () => {
    if (selectedTreatmentDetailsItem.length > 0) {
      
      
      navigation.navigate("Employee", {
        data: FullData?.Employees,
      });
      setSelectedTreatmentDetailsItem([]);
    } else {
      alert("Please Select Treatment");
      return;
    }
  };

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

  return (
    <SafeArea gray>
      <View style={TreatmentsStyle.container}>
        <BackButton
          color="#000"
          title="Select Treatment"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={TreatmentsStyle.TreatmentFilter}>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item, index }: any) => (
              <TreatmentButton
                item={item}
                SelectedTreatment={selectedTreatment === index}
                key={index + 1}
                onPress={() => {
                  setSelectedTreatment(index);
                }}
              />
            )}
          />
        </View>

        <View
          style={{
            paddingTop: 10,
            flex: 1,
          }}
        >
          <FlatList
            data={selectedTreatmentDetails}
            renderItem={({ item, index }) => (
              <TreatmentDetails
                key={index + 1}
                item={item}
                selected={selectedTreatmentDetailsItem
                  .map((item: any) => item.id)
                  .includes(item.id)}
                onPress={() => {
                  setSelectedTreatmentDetailsItem([
                    ...selectedTreatmentDetailsItem,
                    item,
                  ]);
                }}
              />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
            }}
          />
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

export default TreatmentsScreen;

export const TreatmentsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
  },
  TreatmentFilter: {
    marginTop: 20,
  },
});
