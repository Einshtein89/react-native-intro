import { s } from "./ClearButton.style";
import { Text, TouchableOpacity } from "react-native";

export const ClearButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.btnTxt}>Clear input</Text>
    </TouchableOpacity>
  );
};
