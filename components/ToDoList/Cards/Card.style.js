import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  wrapper: {
    height: 115,
    borderRadius: 13,
  },
  card: {
    backgroundColor: "white",
    height: 115,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 13,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 25,
  },
  img: {
    height: 25,
    width: 25,
  },
});
