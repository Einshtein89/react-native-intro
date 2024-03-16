import { s } from "./ToDoList.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Header } from "./Header/Header";
import { CardList } from "./Cards/CardList";
import { ScrollView } from "react-native";
import { Footer } from "./Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { ButtonAdd } from "./Buttons/Add/ButtonAdd";
import { AddTodoDialog } from "./Dialogs/AddTodoDialog";
import {
  addTodo,
  deleteTodo,
  loadTodoList,
  saveTodoList,
  updateTodo,
} from "./Utils/utils";
import { ButtonSave } from "./Buttons/Save/ButtonSave";

let isFirstRender = true;
let isLoadUpdate = false;

export const ToDoList = () => {
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [todoList, setTodoList] = useState([]);
  const [isAddDialogDisplayed, setIsAddDialogDisplayed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollViewRef = useRef();
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    isLoadUpdate = loadTodoList(setTodoList, setTempList, isLoadUpdate);
    setTempList(todoList);
  }, []);

  useEffect(() => {
    if (!isLoadUpdate) {
      if (!isFirstRender) {
        saveTodoList(tempList);
      } else {
        isFirstRender = false;
      }
    } else {
      isLoadUpdate = false;
    }
  }, [todoList]);

  const getFilteredTodoList = () => {
    switch (selectedTabName) {
      case "all":
        return tempList;
      case "inProgress":
        return tempList.filter((todo) => {
          // console.log("todo: " + todo.isCompleted);
          return !todo.isCompleted;
        });
      case "done":
        return tempList.filter((todo) => todo.isCompleted);
    }
  };
  const updateTodoHandler = (todo) => updateTodo(todo, tempList, setTempList);
  const deleteTodoHandler = (todo) => deleteTodo(todo, setTempList, tempList);
  const addTodoHandler = () =>
    addTodo(
      inputValue,
      setTempList,
      setIsAddDialogDisplayed,
      setInputValue,
      scrollViewRef
    );

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView ref={scrollViewRef}>
              <CardList
                todoList={getFilteredTodoList()}
                onPress={updateTodoHandler}
                onLongPress={deleteTodoHandler}
              />
            </ScrollView>
          </View>
          {tempList.some((todo) => todo.isStateChanged) && (
            <ButtonSave
              onPress={() => {
                tempList.forEach((todo) => (todo.isStateChanged = false));
                setTodoList(tempList);
              }}
            />
          )}
          {selectedTabName !== "done" && (
            <ButtonAdd onPress={() => setIsAddDialogDisplayed(true)} />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Footer
          todoList={tempList}
          selectedTabName={selectedTabName}
          onPress={(tabName) => {
            setSelectedTabName(tabName);
          }}
        />
      </View>
      <AddTodoDialog
        inputValue={inputValue}
        addTodo={addTodoHandler}
        setInputValue={setInputValue}
        setIsAddDialogDisplayed={setIsAddDialogDisplayed}
        showAddDialog={isAddDialogDisplayed}
      />
    </>
  );
};
