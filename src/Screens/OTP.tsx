import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
  const CELL_COUNT = 4;
  const [email, setEmail] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const {saveUser} = useBucket()



  const handleLogin = async () => {
    if (email) return alert("Please fill all the fields");
    setIsLoading(true);
    try {

        saveUser({
            name : "any"
        })
    
    } catch (error: any) {
      switch (error.code) {
      }
    } finally {
      setIsLoading(false);
    }
  };

  const navigation = useNavigation()
  return (
    <SafeArea>
      <View style={styles.container}>
        <BackButton color="#000" title="Account Verification" onPress={
          ()=>{
            navigation.goBack()
          }
        } />

        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text style={styles.infoTxt}>
            Enter 4-digit code that we just send to your email
          </Text>
          <Text
            style={[
              styles.infoTxt,
              { color: "#343434", marginTop: 0, fontFamily: "Poppins-Medium" },
            ]}
          >
            john123@gmail.com
          </Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
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
                }}
              >
                00:54
              </Text>
            </Text>
          </View>

          <Button title="Verify" ButtonPress={handleLogin }  />
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
    fontFamily: "Poppins-Medium",

    textAlign: "center",
    marginVertical: 10,
  },
  infoTxt: {
    color: "#92929D",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginTop: 5,
  },
  cell: {
    width: 70,
    height: 70,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#fff",
    textAlign: "center",
    borderRadius: 10,
    color: "#15206F",
    fontFamily: "Poppins-SemiBold",
    backgroundColor: "#fff",
    elevation: 4,
    textAlignVertical: "center",
  },
  focusCell: {
    borderColor: "#fff",
  },
  codeFieldRoot: {
    width: "100%",
    marginTop: 40,
  },
});
