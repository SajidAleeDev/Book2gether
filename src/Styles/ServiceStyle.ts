import {
  Dimensions,
  Platform,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export const adjustSize = (size: number) => {
  // Get the device's screen width
  const baseScreenWidth = 320;
  const screenWidth = Dimensions.get("window").width;

  // Calculate the adjusted size
  const adjustedSize = (size * screenWidth) / baseScreenWidth;

  return adjustedSize;
};

export const defaultShadow = () => {
  return generateBoxShadowStyle(2, 2, "red", 20, 3, 3, "red");
};

export const generateBoxShadowStyle = (
  xOffset: number,
  yOffset: number,
  shadowColorIos: string,
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number,
  shadowColorAndroid: string
) => {
  if (Platform.OS === "ios") {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
      elevation,
    };
  } else if (Platform.OS === "android") {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

export const ServiceStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",

    alignSelf: "center",
  },

  // card style

  card: {
    width: adjustSize(120),
    height: adjustSize(120),
    backgroundColor: "#F5F5F5",
    borderRadius: 17,
    margin: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 75.49,
    height: 75.49,
    marginBottom: 10,
  },
  Text: {
    fontWeight: "600",
    fontFamily: "popins-medium",
    fontSize: 14,
    color: "#000000",
    textAlign: "center",
    lineHeight: 16.8,
  },
});
