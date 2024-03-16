import { s } from "./ButtonSave.style";
import { Text, TouchableOpacity } from "react-native";

export const ButtonSave = ({ onPress }) => {
  return (
    <TouchableOpacity style={s.btn} onPress={onPress}>
      <Text style={s.txt}>Save</Text>
    </TouchableOpacity>
  );
};
