import { View, Text } from "react-native";
import React from "react";

const Details = ({ route }: any) => {
  const data = route.params.data;

  console.log(data, "data");

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>Detaicsajncciusals</Text>
    </View>
  );
};

export default Details;
