import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

export async function loadTodoList(setTodoList, setTempList, isLoadUpdate) {
  try {
    // await AsyncStorage.removeItem("@todoList");
    const todoList = await AsyncStorage.getItem("@todoList");
    const parsedTodoList = JSON.parse(todoList);
    setTodoList(parsedTodoList || []);
    setTempList(parsedTodoList || []);
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

export function updateTodo(todo, todoList, setTempList) {
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
  setTempList(updatedTodoList);
}

export function deleteTodoWithAlert(
  todoToDelete,
  setTempList,
  tempList,
  setHasCountChanges
) {
  Alert.alert("Delete todo", "Are you sure you want to delete this todo?", [
    {
      text: "Delete",
      style: "destructive",
      onPress: () => {
        setHasCountChanges(true);
        setTempList(tempList.filter((todo) => todo.id !== todoToDelete.id));
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
  scrollViewRef,
  setHasCountChanges
) {
  const newTodo = {
    id: uuid.v4(),
    title: inputValue,
    isCompleted: false,
    markedAsCompleted: false,
    isStateChanged: false,
  };
  setTodoList((prevState) => [...prevState, newTodo]);
  setIsAddDialogDisplayed(false);
  setInputValue("");
  setHasCountChanges(true);
  setTimeout(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
  }, 300);
}
