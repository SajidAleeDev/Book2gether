import React, {  useState,  useRef } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"; // Import Marker component
import HomeItem from "../components/HomeItem";
import { HomeItemData } from "../data/HomeItemData";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default function EventsMap({ navigation, route }: any) {
  const [show,setshow] = useState(false)
  const [coordinates, setCoordinates] = useState([
    {
      latitude: 37.3317876,
      longitude: -122.0054812,
    },
    {
      latitude: 37.771707,
      longitude: -122.4053769,
    },

    {
      latitude: 37.771707,
      longitude: -122.4053769,
    },

    {
      latitude: 37.771707,
      longitude: -122.4053769,
    },
  ]);

  const mapView = useRef(null);

  const onMapPress = (e: any) => {
    setCoordinates([...coordinates, e.nativeEvent.coordinate]);
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.body]}>
        <MapView
          provider={PROVIDER_GOOGLE}
          mapType="standard"
          showsBuildings={false}
          minZoomLevel={15}
          showsIndoors={false}
          style={{ flex: 1 }}
          showsUserLocation={true}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          ref={mapView}
          onPress={onMapPress}
        >
          {coordinates.map((coordinate, index) => (
            <Marker
            onPress={()=>setshow(true)}
              key={`coordinate_${index}`}
              image={
                "https://firebasestorage.googleapis.com/v0/b/cityportal-84540.appspot.com/o/pointer.png?alt=media&token=ab688e54-3fc5-4787-aae4-6c2b382f3e7d&_gl=1*16szer0*_ga*MTY1NTc4Njc0MS4xNjk0NTgwMDkx*_ga_CW55HF8NVT*MTY5NzU5MTk2NS45NC4xLjE2OTc1OTIwNzUuNTIuMC4w"
              }
              coordinate={coordinate}
            />
          ))}
        </MapView>
      </View>
      {show &&
      <View style={styles.bottomSec}>
        <Text style={styles._heading}>Details</Text>
        <View style={styles._details_card}>
          <HomeItem key={0} item={HomeItemData[0]} />
        </View>
      </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  heading: {
    fontSize: 20,
  },
  body: {
    flex: 1,
  },

  bottomSec: {
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    elevation: 6,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  _details_card: {
    height: 138,
    width: "100%",
    marginBottom: 20,
  },
  _heading: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "popins-semibold",
    fontWeight: "600",
    marginVertical: 20,
  },
});
