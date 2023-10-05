import { useState } from "react";
import { View, ScrollView } from "react-native";
import { Images } from "../../assets/Images";
import { LanguageStyle } from "../Styles/LanguageStyle";
import { ServiceStyle } from "../Styles/ServiceStyle";
import Button from "../components/Button";
import Image from "../components/Image";
import ImageDescription from "../components/ImageDescription";
import SafeArea from "../components/SafeArea";
import ServiceCard from "../components/ServiceCard";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/type";

const ServiceScreen = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const navigation: NavigationProps = useNavigation();

  function selectedItem(index: number) {
    setSelected(index);
  }

  function navigate() {
    if (selected === null) {
      alert("Please select a service");
      return;
    }
    navigation.navigate("MyTab");
  }

  return (
    <SafeArea>
      <View style={LanguageStyle.LanguageHeader}>
        <Image ImageSource={Images.Service} />
        <ImageDescription
          ImageTitle="Service"
          ImageDescription="Please select the service you'd like to continue with"
        />
      </View>
      <View style={ServiceStyle.container}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <ServiceCard
              key={index}
              ImageSource={Images.Service}
              onPress={() => selectedItem(index)}
              Selected={selected === index}
            />
          );
        })}
      </View>

      <Button
        title="Next"
        ButtonPress={() => {
          navigate();
        }}
      />
    </SafeArea>
  );
};

export default ServiceScreen;
