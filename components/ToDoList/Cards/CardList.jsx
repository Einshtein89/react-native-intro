import { Card } from "./Card";

export const CardList = ({ todoList, onPress, onLongPress }) => {
  return todoList.map((todo) => (
    <Card
      key={todo.id}
      todo={todo}
      onPress={onPress}
      onLongPress={onLongPress}
    />
  ));
};
