import { StyleSheet } from "react-native";
import { globalStyle } from "../GlobalStyles/global.style";

export const s = StyleSheet.create({
  root: {
    ...globalStyle.root,
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
  header: { flex: 1 },
  body: { flex: 5 },
  footer: { backgroundColor: "white", height: 70 },
});
