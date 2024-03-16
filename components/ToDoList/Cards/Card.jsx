import { Image, Text, TouchableOpacity } from "react-native";
import checkImage from "../../../assets/check.png";
import { s } from "./Card.style";

export const Card = ({ todo, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      style={s.card}
      onPress={() => {
        todo.isStateChanged = !todo.isStateChanged;
        onPress(todo);
      }}
      onLongPress={() => onLongPress(todo)}
    >
      <Text
        style={[
          s.title,
          // todo.markedAsCompleted && { textDecorationLine: "line-through" },
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {/*{todo.markedAsCompleted && <Image style={s.img} source={checkImage} />}*/}
      {todo.isCompleted && <Image style={s.img} source={checkImage} />}
    </TouchableOpacity>
  );
};
