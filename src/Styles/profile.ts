import { StyleSheet } from "react-native";

export const ProfileStyle = StyleSheet.create({
  profileContainer: {
    width: "100%",
  },
  profileheader: {
    backgroundColor: "#75BDE0",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerHeading: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "popins-bold",
    color: "#000000",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
    fontFamily: "popins-bold",
    marginBottom: 0,
  },
  profileEmail: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    fontFamily: "popins-medium",
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  profileData: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20,
  },
  profileDetails: {
    paddingHorizontal: 10,
  },
  profileItems: {
    paddingHorizontal: 10,
  },
  profilebtn: {
    backgroundColor: "#fff",
    marginVertical: 10,
    // paddingVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    borderRadius: 16,
    elevation: 4,
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 60,
  },
  itemtext: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "popins-medium",
  },
  profileView: {
    flex: 1,
    paddingHorizontal: 10,
  },
  profileimage: {
    width: 27,
    height: 27,
  },
  userProfileContainer: {
    width: "100%",
    paddingHorizontal: 10,
    // marginTop: 20,
    height: "100%",
  },
  Profileback: {
    flexDirection: "row",
    alignItems: "center",
  },
  backarrow: {
    marginTop: 8,
    marginRight: 7,
    width: 25,
    height: 20,
  },
  profieBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    overflow: "hidden",
  },
  profileImage2: {
    width: 125,
    height: 125,
    borderRadius: 100,
    overflow: "hidden",
  },
  profileImgBox: {
    position: "relative",
  },
  camera: {
    width: 20,
    height: 20,
  },
  fixCamera: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  profilesbtn: {
    width: "100%",
    paddingVertical: 20,
    // shadowColor: "rgba(0,0,0,0.4)",
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 0.4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    // elevation: 4,
  },
});
