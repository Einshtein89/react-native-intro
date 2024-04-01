import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  global_row_style: {
    minWidth: 50,
    maxWidth: 50,
    textAlign: "right",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  day: { fontSize: 20 },
  date: {
    fontSize: 20,
  },
  temperature: {
    fontSize: 20,
  },
});
