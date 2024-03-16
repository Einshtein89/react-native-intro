import { StyleSheet } from "react-native";
import { globalStyle } from "../GlobalStyles/global.style";

export const s = StyleSheet.create({
  root: {
    ...globalStyle.root,
  },
  workspace: {
    height: 450,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  backgroundImg: {
    height: "100%",
    width: "100%",
  },
});
