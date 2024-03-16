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

let isFirstRender = true;
let isLoadUpdate = false;

export const ToDoList = () => {
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [todoList, setTodoList] = useState([]);
  const [isAddDialogDisplayed, setIsAddDialogDisplayed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollViewRef = useRef();
  // const [tempList, setTempList] = useState(todoList);

  useEffect(() => {
    isLoadUpdate = loadTodoList(setTodoList, isLoadUpdate);
  }, []);

  useEffect(() => {
    if (!isLoadUpdate) {
      if (!isFirstRender) {
        saveTodoList(todoList);
      } else {
        isFirstRender = false;
      }
    } else {
      isLoadUpdate = false;
    }
  }, [todoList]);

  const updateTodoHandler = (todo) => updateTodo(todo, todoList, setTodoList);

  const getFilteredTodoList = () => {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => {
          // console.log("todo: " + todo.isCompleted);
          return !todo.isCompleted;
        });
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
    }
  };

  const deleteTodoHandler = (todo) => deleteTodo(todo, setTodoList, todoList);

  const addTodoHandler = () =>
    addTodo(
      inputValue,
      setTodoList,
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
          {/*<ButtonSave*/}
          {/*  onPress={() => {*/}
          {/*    // const a = selectedTabName;*/}
          {/*    updateTodoList();*/}
          {/*    // updateTodo();*/}
          {/*    setSelectedTabName("all");*/}
          {/*    // setSelectedTabName(a);*/}
          {/*    //*/}
          {/*    // updateTodoList();*/}

          {/*    // getFilteredTodoList();*/}
          {/*  }}*/}
          {/*/>*/}
          {selectedTabName !== "done" && (
            <ButtonAdd onPress={() => setIsAddDialogDisplayed(true)} />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Footer
          todoList={todoList}
          selectedTabName={selectedTabName}
          onPress={(tabName) => {
            setSelectedTabName(tabName);
            // updateTodoList();
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
