import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useBucket } from "../Hooks/Context";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import EmployeesItem from "../components/EmployeesItem";
import SafeArea from "../components/SafeArea";
import {
  EmployeePropsBucket,
  Employeeprops,
  NavigationProps,
} from "../types/type";

const EmployeeScreen = ({ route }: Employeeprops) => {
  const data = route?.params.data || [];
  const [selectedEmployees, setSelectedEmployees] = React.useState<
    EmployeePropsBucket | any
  >(null);
  const navigation = useNavigation<NavigationProps | any>();

  const { setSelectedEmployee } = useBucket();

  const Navigate = () => {
    setSelectedEmployee(selectedEmployees);
    if (selectedEmployees !== null) {
      navigation.navigate("TimeTable");
    } else {
      alert("Please Select Employee");
      return;
    }
  };

  return (
    <SafeArea>
      <View style={EmployeeStyle.container}>
        <BackButton
          color="#000"
          title="Select Employee"
          onPress={() => navigation.goBack()}
        />
        <View style={EmployeeStyle.ItemContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <EmployeesItem
                item={item}
                selectedEmployee={selectedEmployees === item}
                onPress={() => {
                  setSelectedEmployees(item);
                }}
              />
            )}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            style={{ flex: 1 }}
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

export default EmployeeScreen;
export const EmployeeStyle = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  ItemContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
    flex: 1,
  },
});
