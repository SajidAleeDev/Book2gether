import { useState } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
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
import { Services } from "../data/ServicesData";
import { styles } from "./LoginScreen";

const ServiceScreen = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const navigation: NavigationProps = useNavigation();

  const { height, width } = useWindowDimensions();
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
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={LanguageStyle.LanguageHeader}>
          <Image ImageSource={Images.Service} />
          <ImageDescription
            ImageTitle="Service"
            ImageDescription="Please select the service you'd like to continue with"
          />
        </View>
        <View style={ServiceStyle.container}>
          <FlatList
            data={Services}
            renderItem={({ item, index }) => (
              <ServiceCard
                title={item.name}
                key={index}
                ImageSource={item.Image}
                onPress={() => selectedItem(index)}
                Selected={selected === index}
              />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
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
