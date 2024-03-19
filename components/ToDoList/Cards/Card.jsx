import { Image, Text, TouchableHighlight, View } from "react-native";
import checkImage from "../../../assets/check.png";
import { s } from "./Card.style";

export const Card = ({ todo, onPress, onLongPress }) => {
  return (
    <TouchableHighlight
      style={s.wrapper}
      onPress={() => {
        todo.isStateChanged = !todo.isStateChanged;
        onPress(todo);
      }}
      // onLongPress={() => {
      //   onLongPress(todo);
      // }}
    >
      <View style={s.card}>
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
      </View>
    </TouchableHighlight>
  );
};
