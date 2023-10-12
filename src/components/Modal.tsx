import React from "react";
import { Image, Modal as Model, StyleSheet, Text, View } from "react-native";
import { ModelProps } from "../types/type";
import Button from "./Button";
const CustomeModal = ({
  modalVisible,
  HandleClicked,
  setModalVisible,
  image,
  Title,
  Description,
  ButtonTitle,
}: ModelProps) => {
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
        <View style={styles.modalView}>
          <View
            style={{
              alignContent: "center",
            }}
          >
            <Image
              source={image}
              style={{
                width: 270,
                height: 230,
                resizeMode: "cover",
                marginHorizontal: "auto",
                marginRight: 30,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text
              style={[
                styles.Title,
                {
                  fontSize: 20,
                  fontWeight: "700",

                  marginVertical: 10,
                  textAlign: "center",
                },
              ]}
            >
              {Title}
            </Text>
            <Text
              style={[
                styles.EmployeeitemsText,
                {
                  fontSize: 16,
                  fontWeight: "400",

                  marginVertical: 10,
                  textAlign: "center",
                },
              ]}
            >
              {Description}
            </Text>

            <Button
              title={ButtonTitle}
              ButtonPress={() => HandleClicked()}
              modalButton
            />
          </View>
        </View>
      </View>
    </Model>
  );
};

export default CustomeModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    width: 340,
    padding: 20,
    height: 423,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
});
