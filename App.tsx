import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/StackNavigator";
import * as SplashScreen from "expo-splash-screen";
import { View, StyleSheet } from "react-native";
import React, { useCallback, useMemo } from "react";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "popins-bold": require("./assets/font/Poppins-Bold.ttf"),
    "popins-regular": require("./assets/font/Poppins-Regular.ttf"),
    "popins-medium": require("./assets/font/Poppins-Medium.ttf"),
    "popins-semibold": require("./assets/font/Poppins-SemiBold.ttf"),
    "popins-light": require("./assets/font/Poppins-Light.ttf"),
    "popins-thin": require("./assets/font/Poppins-Thin.ttf"),
  });

  useMemo(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
