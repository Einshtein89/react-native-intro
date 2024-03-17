import { s } from "./ButtonAdd.style";
import { Text, TouchableOpacity } from "react-native";
import { globalStyle } from "../../../GlobalStyles/global.style";

export const ButtonAdd = ({ onPress }) => {
  return (
    <TouchableOpacity style={[globalStyle.btn, s.btn]} onPress={onPress}>
      <Text style={globalStyle.btnTxt}>+ New Todo</Text>
    </TouchableOpacity>
  );
};
