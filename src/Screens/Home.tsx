import { useNavigation } from "@react-navigation/native";
import { LayoutGrid, Search } from "lucide-react-native";
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { HomeStyle } from "../Styles/HomeStyle";
import HomeItem from "../components/HomeItem";
import { HomeItemData } from "../data/HomeItemData";
import Input from "../components/Input";
import SafeArea from "../components/SafeArea";
import { NavigationProps } from "../types/type";

import { useState } from "react";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { styles } from "./LoginScreen";

const Home = () => {
  const navigation: NavigationProps = useNavigation();
  const [query, setQuery] = useState("");
  const data = ["Apple", "Apricot", "Avocado", "Banana", "Blackberry"];

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
            alignSelf: "center",
            alignItems: "center",
            height: 60,
          }}
        >
          <Text
            style={{
              marginRight: 10,
            }}
          >
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              // onSelectItem={setSelectedItem}
              dataSet={[
                { id: "1", title: "Alpha" },
                { id: "2", title: "Beta" },
                { id: "3", title: "Gamma" },
              ]}
              inputContainerStyle={{
                backgroundColor: "#F5F5F5",
                borderRadius: 10,
                height: 59,
              }}
              containerStyle={{
                width: Dimensions.get("window").width / 2.2,
                height: 59,
              }}
              suggestionsListContainerStyle={{
                width: Dimensions.get("window").width / 2.2,
                backgroundColor: "#F5F5F5",
              }}
              InputComponent={TextInput}
              textInputProps={{
                placeholder: "Select City",
                placeholderTextColor: "#A7A7A7",
              }}
              suggestionsListTextStyle={{
                color: "#000",
                borderWidth: 0,
                fontSize: 14,
                borderRadius: 16,
              }}
              inputHeight={59}
            />
          </Text>
          <Text>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              // onSelectItem={setSelectedItem}
              dataSet={[
                { id: "1", title: "Alpha" },
                { id: "2", title: "Beta" },
                { id: "3", title: "Gamma" },
              ]}
              inputContainerStyle={{
                backgroundColor: "#F5F5F5",
                borderRadius: 10,
                height: 59,
              }}
              containerStyle={{
                width: Dimensions.get("window").width / 2.2,
                height: 59,
              }}
              suggestionsListContainerStyle={{
                width: Dimensions.get("window").width / 2.2,
                backgroundColor: "#F5F5F5",
              }}
              InputComponent={TextInput}
              textInputProps={{
                placeholder: "Select City",
                placeholderTextColor: "#A7A7A7",
              }}
              suggestionsListTextStyle={{
                color: "#000",
                borderWidth: 0,
                fontSize: 14,
                borderRadius: 16,
              }}
              inputHeight={59}
            />
          </Text>
        </View>

        <View style={HomeStyle.ItemContainer}>
          <Text style={HomeStyle.ItemAvailable}>
            Results found ({HomeItemData.length})
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 10,
          }}
        >
          <FlatList
            data={HomeItemData}
            renderItem={({ item, index }) => (
              <HomeItem key={index} item={item} />
            )}
            keyExtractor={({ id }: any) => id}
            style={{
              flex: 1,
              paddingBottom: 10,
            }}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default Home;
