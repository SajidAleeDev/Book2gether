import React, { useState } from "react";
import {
  Image,
  Modal as Model,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ModelProps } from "../types/type";
import Button from "./Button";
import StarRating from "react-native-star-rating-widget";
import { AntDesign } from '@expo/vector-icons';
const ReveiwModal = ({
  modalVisible,
  HandleClicked,
  setModalVisible,
}: ModelProps) => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [text,settext] = useState("")

  return (
    <Model
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        {!isSubmitted ? (
          <View style={styles.modalView}>
             <TouchableOpacity style={styles._close_btn} onPress={()=>{setModalVisible(false),setIsSubmitted(false)}}>
      <AntDesign name="closecircleo" size={24} color="#A4A4A4" />
            </TouchableOpacity>

            <View
              style={{
                alignContent: "center",
              }}
            >
              <Text
                style={[
                  styles.Title,
                  {
                    fontSize: 20,
                    fontWeight: "600",
                    marginVertical: 10,
                    textAlign: "center",
                  },
                ]}
              >
                Write a Review
              </Text>
              <Image
                source={require("../../assets/Images/reviewImg.png")}
                style={{
                  width: 136,
                  height: 136,
                  resizeMode: "cover",
                  marginTop: 20,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StarRating rating={rating} onChange={setRating} />
            </View>
            <TextInput
              placeholderTextColor={"#BDBDBD"}
              style={styles._input}
              placeholder="Add review"
              value={text}
             onChangeText={settext}              
            />

            <Button
              fontSize={14}
              title={"Submit"}
              ButtonPress={() => text && setIsSubmitted(true)}
              modalButton
            />
          </View>
        ) : (
          // submitted successfully

          <View style={styles.modalView}>
             <TouchableOpacity style={styles._close_btn} onPress={()=>{setModalVisible(false),setIsSubmitted(false)}}>
      <AntDesign name="closecircleo" size={24} color="#A4A4A4" />
            </TouchableOpacity>
            <View
              style={{
                alignContent: "center",
              }}
            >
             
              <Image
                source={require("../../assets/Images/thank-you.png")}
                style={{
                  width: 136,
                  height: 136,
                  resizeMode: "cover",
                  marginTop: 20,
                }}
              />
            </View>
            <Text
                style={[
                  styles.Title,
                  {
                    fontSize: 18,
                    fontWeight: "600",
                    marginVertical: 20,
                    textAlign: "center",
                  },
                ]}
              >
                Thanks for your review! 🌟
              </Text>

              <Text style={styles._descritpion}>We appreciate your feedback for 
improving our service. 😊📱</Text>
           

            <Button
              fontSize={14}
              title={"Go back"}
              ButtonPress={() => setModalVisible(false)}
              modalButton
            />
          </View>
        )}
      </View>
    </Model>
  );
};

export default ReveiwModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // marginTop: 22,
    backgroundColor: "#fafafa9c",
  },
  Title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 21,
    marginBottom: 6,
  },
  EmployeeitemsText: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 16,
    color: "#A7A7A7",
  },

  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    // width: 340,
    padding: 20,
    paddingBottom: 10,
    // height: 423,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  _input: {
    fontWeight: "400",
    fontFamily: "popins-regular",
    color: "#BDBDBD",
    fontSize: 14,
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 72,
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  _descritpion:{
    fontWeight: "400",
    fontFamily: "popins-regular",
    color: "#BDBDBD",
    fontSize: 14,
    marginVertical: 20,
    textAlign:"center"
  },
  _close_btn:{
    alignSelf:"flex-end"
  }
});
