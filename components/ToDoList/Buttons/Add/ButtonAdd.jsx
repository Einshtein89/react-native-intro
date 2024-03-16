import { s } from "./ButtonAdd.style";
import { Text, TouchableOpacity } from "react-native";

export const ButtonAdd = ({ onPress }) => {
  return (
    <TouchableOpacity style={s.btn} onPress={onPress}>
      <Text style={s.txt}>+ New Todo</Text>
    </TouchableOpacity>
  );
};
