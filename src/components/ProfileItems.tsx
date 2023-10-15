import { View, Text, Image, TouchableOpacity, Switch } from "react-native";
import { Images } from "../../assets/Images";
import { ProfileStyle } from "../Styles/profile";
import { useNavigation } from "@react-navigation/native";

function ProfileItems({
  imageSource,
  buttonText,
  lastbtn,
  toggleSwitch,
  isEnabled,
  destination,
  showText,
}: any) {
  const navigation: any = useNavigation();

  const handlePress = () => {
    if (lastbtn === Images.arrow && !isEnabled) {
      navigation.navigate(destination);
    } else if (lastbtn != Images.arrow) {
      toggleSwitch();
    }
  };
  return (
    <TouchableOpacity style={ProfileStyle.profilebtn} onPress={handlePress}>
      <View>
        <Image source={imageSource} style={ProfileStyle.profileimage} />
      </View>
      <View style={ProfileStyle.profileView}>
        <Text style={ProfileStyle.itemtext}>{buttonText}</Text>
      </View>
      {lastbtn && (
        <View>
          <Image source={lastbtn} />
        </View>
      )}
      {toggleSwitch && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {showText && (
            <Text style={{ marginRight: 10, color: "#75BDE0" }}>
              {isEnabled ? "English" : "Dutch"}
            </Text>
          )}
          <Switch
            trackColor={{
              false: "gray",
              true: "#75BDE0",
            }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              transform: [{ scale: 1.3 }],
            }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

export default ProfileItems;
