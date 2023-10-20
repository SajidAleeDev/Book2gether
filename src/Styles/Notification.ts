import { StyleSheet } from "react-native";

export const NotificationStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  headingsContainer: {
    marginTop: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "popins-bold",
  },
  daytext: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "popins-bold",
    marginVertical: 10,
  },
  notificationText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "popins-semibold",
  },
  opinion: {
    fontSize: 12,
    color: "#A4A4A4",
    fontWeight: "400",
    fontFamily: "popins-medium",
  },
  notificationIcon: {
    backgroundColor: "#F5F5F5",
    padding: 5,
    height: 52,
    width: 52,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  NotificationContainer: {
    backgroundColor: "#fff",
    marginVertical: 4,
    marginHorizontal: 4,
    flex: 1,
    justifyContent: "space-between",
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
    padding: 10,
  },
  NotificationDetail: {
    paddingHorizontal: 10,
    marginLeft: 0,

    flex: 1,
  },
});
