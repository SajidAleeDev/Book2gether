import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import SafeArea from "../components/SafeArea";

const Maps = () => {
  return (
    <SafeArea gray>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          isTVSelectable
          userInterfaceStyle="dark"
          accessibilityLiveRegion="polite"
          accessibilityViewIsModal
          pitchEnabled
        />
      </View>
    </SafeArea>
  );
};

export default Maps;
