import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

export async function loadTodoList(setTodoList, isLoadUpdate) {
  try {
    const todoList = await AsyncStorage.getItem("@todoList");
    const parsedTodoList = JSON.parse(todoList);
    setTodoList(parsedTodoList || []);
    isLoadUpdate = true;
    return isLoadUpdate;
  } catch (e) {
    alert(e);
  }
}

export async function saveTodoList(todoList) {
  try {
    await AsyncStorage.setItem("@todoList", JSON.stringify(todoList));
  } catch (e) {
    alert(e);
  }
}

export function updateTodo(todo, todoList, setTodoList) {
  const updatedTodo = {
    ...todo,
    // markedAsCompleted: !todo.markedAsCompleted,
    isCompleted: !todo.isCompleted,
  };
  const updatedTodoList = [...todoList];
  const indexToUpdate = updatedTodoList.findIndex(
    (t) => t.id === updatedTodo.id
  );
  updatedTodoList[indexToUpdate] = updatedTodo;
  // setTempList(updatedTodoList);
  setTodoList(updatedTodoList);
}

export function deleteTodo(todoToDelete, setTodoList, todoList) {
  Alert.alert("Delete todo", "Are tou sure you want to delete this todo?", [
    {
      text: "Delete",
      style: "destructive",
      onPress: () => {
        setTodoList(todoList.filter((todo) => todo.id !== todoToDelete.id));
      },
    },
    { text: "Cancel", style: "cancel" },
  ]);
}

export function addTodo(
  inputValue,
  setTodoList,
  setIsAddDialogDisplayed,
  setInputValue,
  scrollViewRef
) {
  const newTodo = {
    id: uuid.v4(),
    title: inputValue,
    isCompleted: false,
    markedAsCompleted: false,
  };
  setTodoList((prevState) => [...prevState, newTodo]);
  setIsAddDialogDisplayed(false);
  setInputValue("");
  setTimeout(() => {
    scrollViewRef.current.scrollToEnd();
  }, 300);
}
