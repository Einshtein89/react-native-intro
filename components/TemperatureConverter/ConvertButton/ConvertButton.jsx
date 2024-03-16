import { Text, TouchableOpacity } from "react-native";
import { s } from "./ConvertButton.style";

export const ConvertButton = ({ oppositeUnit, onPress }) => {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.btnTxt}>Change unit to {oppositeUnit}</Text>
    </TouchableOpacity>
  );
};
