import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 20,
    paddingLeft: 25,
  },
  clearUnitWrapper: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "flex-end",
    // alignItems: "flex-end",
  },
  unit: {
    paddingRight: 5,
    paddingVertical: 10,
    fontSize: 30,
  },
});
