import { s } from "./ToDoList.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { ButtonAdd } from "./Buttons/Add/ButtonAdd";
import {
  addTodo,
  deleteTodoWithAlert,
  loadTodoList,
  saveTodoList,
  updateTodo,
} from "./Utils/utils";
import { ButtonSave } from "./Buttons/Save/ButtonSave";
import { AddTodoModal } from "./Modal/AddTodoModal";
import { SwipeToDeleteWithButtons } from "./SwipeList/SwipeToDeleteWithButtons";

let isFirstRender = true;
let isLoadUpdate = false;

export const ToDoList = () => {
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [todoList, setTodoList] = useState([]);
  const [isAddDialogDisplayed, setIsAddDialogDisplayed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hasCountChanges, setHasCountChanges] = useState(false);
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
  const deleteTodoHandler = (todo) =>
    deleteTodoWithAlert(todo, setTempList, tempList, setHasCountChanges);
  const addTodoHandler = () =>
    addTodo(
      inputValue,
      setTempList,
      setIsAddDialogDisplayed,
      setInputValue,
      scrollViewRef,
      setHasCountChanges
    );

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            {/*<ScrollView ref={scrollViewRef}>*/}
            <SwipeToDeleteWithButtons
              dataList={getFilteredTodoList()}
              setTodoList={setTempList}
              onRowPress={updateTodoHandler}
              setHasCountChanges={setHasCountChanges}
            />
            {/*</ScrollView>*/}
          </View>
          {(tempList.some((todo) => todo.isStateChanged) ||
            hasCountChanges) && (
            <ButtonSave
              onPress={() => {
                setHasCountChanges(false);
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
      <AddTodoModal
        inputValue={inputValue}
        addTodo={addTodoHandler}
        setInputValue={setInputValue}
        setIsAddDialogDisplayed={setIsAddDialogDisplayed}
        showAddDialog={isAddDialogDisplayed}
      />
    </>
  );
};
