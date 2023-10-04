import { View, Text, ScrollView } from "react-native";
import React from "react";
import SafeArea from "../components/SafeArea";

const Home = () => {
  return (
    <SafeArea gray>
      <ScrollView>
        <Text>Find Salon Services around you</Text>
      </ScrollView>
    </SafeArea>
  );
};

export default Home;
