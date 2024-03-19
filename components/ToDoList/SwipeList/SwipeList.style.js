import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hiddenContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 115,
    borderRadius: 13,
  },
  hiddenButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 115,
  },
  closeButton: {
    backgroundColor: "green", // Blue
    borderRadius: 20,
  },
  deleteButton: {
    backgroundColor: "#E74C3C", // Red
    borderRadius: 20,
  },
  detailsButton: {
    backgroundColor: "blue", // Blue
    borderRadius: 20,
    position: "absolute",
    left: 0,
    // alignItems: "center",
    // justifyContent: "center",
    // alignItems: "center",
    // width: 75,
    // height: 115,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
