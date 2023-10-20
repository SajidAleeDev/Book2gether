import { StyleSheet } from "react-native";
import { adjustSize } from "./ServiceStyle";

export const LanguageStyle = StyleSheet.create({
  LanguageHeader: {
    height: adjustSize(280),
  },
  TextContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop:40,
    padding:10
    // alignItems: "center",
  },
  _list:{
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:15,
    borderBottomWidth:1,
    borderColor:"#EEEEEE",
    paddingLeft:0
},
_name:{
    fontFamily:"popins-medium",
    paddingLeft:10,
    fontSize:16,
    flex:1,
    textAlign:"left"
},
_image:{
    height:32.84,
    width:32.84
}
});
