import { s } from "./ButtonSave.style";
import { globalStyle } from "../../../GlobalStyles/global.style";
import { Text, TouchableOpacity } from "react-native";

export const ButtonSave = ({ onPress }) => {
  return (
    <TouchableOpacity style={[globalStyle.btn, s.btn]} onPress={onPress}>
      <Text style={globalStyle.btnTxt}>Save</Text>
    </TouchableOpacity>
  );
};
