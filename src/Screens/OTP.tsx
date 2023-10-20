import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import SafeArea from "../components/SafeArea";
import BackButton from "../components/BackButton";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/type";
import { useBucket } from "../Hooks/Context";

const OTP = () => {
  const navigation = useNavigation();

  const CELL_COUNT = 4;
  const [email, setEmail] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const { saveUser } = useBucket();

  const handleLogin = async () => {
    if (value.length < 4) return alert("Please fill all the fields");
    setIsLoading(true);
    try {
      saveUser({
        name: "any",
      });
      navigation.navigate("Language")
    } catch (error: any) {
      switch (error.code) {
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeArea>
      <StatusBar backgroundColor="#fff" />

      <View style={styles.container}>
        <BackButton
          color="#000"
          title="Account Verification"
          onPress={() => {
            navigation.goBack();
          }}
        />

        <View
          style={{
            marginTop: 30,
          }}
        >
          <View>

          <Text style={styles.infoTxt}>
            Enter 4-digit code that we just send to your email {" "}
          <Text
            style={[
              styles.infoTxt,
              { color: "#03110A", marginTop: 0 },
            ]}
            >
            john123@gmail.com
          </Text>
          </Text>
            </View>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            numberOfLines={1}
            verticalAlign="bottom"
            textContentType="oneTimeCode"
            textAlign="center"
            maxLength={4}
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}                
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <View style={{ marginTop: 20 }}>
            <Text style={styles.Text}>
              Resend in{" "}
              <Text
                style={{
                  color: "#75BDE0",
                  fontFamily:"popins-medium"
                }}
              >
                00:54
              </Text>
            </Text>
          </View>

          <Button title="Verify" ButtonPress={handleLogin} />
        </View>
      </View>
    </SafeArea>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },

  Text: {
    color: "#A4A4A4",
    fontSize: 14,
    fontFamily: "popins-medium",

    textAlign: "center",
    marginVertical: 10,
  },
  infoTxt: {
    color: "#92929D",
    fontFamily: "popins-regular",
    fontSize: 16,
    marginTop: 5,
  },
  cell: {
    width: 68.87,
    height: 68.87,
    fontSize: 25,
    borderWidth: 1,
    borderColor: "#fff",
    textAlign: "center",
    borderRadius: 19.68, //borderRadius
    color: "#03110A",
    backgroundColor: "#F5F5F5",
    textAlignVertical: "center",
    borderStartColor:"red",
    fontFamily: "popins-semibold",

  },

  codeFieldRoot: {
    width: "100%",
    marginTop: 40,
   
  },
  focusCell: {
    width: 68.87,
    height: 68.87,
    fontSize: 25,
    borderWidth: 1.23,
    borderColor: "#75BDE0",
    textAlign: "center",
    borderRadius: 19.68, //borderRadius
    color: "#03110A",
    backgroundColor: "#F5F5F5",
    textAlignVertical: "center",
    fontFamily: "popins-semibold",
    borderEndWidth:2,
    
  },
});
