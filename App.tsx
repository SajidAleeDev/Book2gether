import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useMemo } from "react";
import { StyleSheet, View,LogBox} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ContextProvider } from "./src/Hooks/Context";
import StackNavigator from "./src/StackNavigator";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);
// Ignore all log notifications:
LogBox.ignoreAllLogs();
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
      <ContextProvider>
        <SafeAreaProvider>
          <NavigationContainer>
          <AutocompleteDropdownContextProvider>
            
            <StackNavigator />
          </AutocompleteDropdownContextProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </ContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
