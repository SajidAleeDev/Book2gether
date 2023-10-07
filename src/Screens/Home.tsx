import { useNavigation } from "@react-navigation/native";
import { LayoutGrid, Search } from "lucide-react-native";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HomeStyle } from "../Styles/HomeStyle";
import HomeItem from "../components/HomeItem";
import Input from "../components/Input";
import SafeArea from "../components/SafeArea";
import { HomeItemData } from "../data/HomeItemData";
import { NavigationProps } from "../types/type";

const Home = () => {
  const navigation: NavigationProps = useNavigation();

  return (
    <SafeArea gray>
      <ScrollView style={HomeStyle.container}>
        <View style={HomeStyle.HeaderContainer}>
          <Text style={HomeStyle.HeadText}>Find Salon Services around you</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Service");
            }}
          >
            <LayoutGrid size={33} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={HomeStyle.InputContainer}>
          <Input
            icon={<Search size={20} color="#BDBDBD" />}
            placeholder="Search..."
            cursorColor={"#BDBDBD"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Input placeholder="Search country" />
          <Input placeholder="Selected your city" />
        </View>
        <View style={HomeStyle.ItemContainer}>
          <Text style={HomeStyle.ItemAvailable}>
            Results found ({HomeItemData.length})
          </Text>
        </View>
        <FlatList
          data={HomeItemData}
          renderItem={({ item, index }) => <HomeItem key={index} item={item} />}
          keyExtractor={({ id }: any) => id}
          style={{
            flex: 1,
            marginBottom: 20,
          }}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeArea>
  );
};

export default Home;
