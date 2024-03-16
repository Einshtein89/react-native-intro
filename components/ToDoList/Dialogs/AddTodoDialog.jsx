import Dialog from "react-native-dialog";

export const AddTodoDialog = ({
  showAddDialog,
  setIsAddDialogDisplayed,
  setInputValue,
  inputValue,
  addTodo,
}) => {
  return (
    <Dialog.Container
      visible={showAddDialog}
      onBackdropPress={() => setIsAddDialogDisplayed(false)}
    >
      <Dialog.Title>Add todo</Dialog.Title>
      <Dialog.Description>Choose a name for your todo</Dialog.Description>
      <Dialog.Input
        onChangeText={setInputValue}
        placeholder="Ex: Go to the dentist"
      ></Dialog.Input>
      <Dialog.Button
        label="Cancel"
        color="grey"
        onPress={() => setIsAddDialogDisplayed(false)}
      />
      <Dialog.Button
        disabled={inputValue.length === 0}
        label="Save"
        onPress={addTodo}
      />
    </Dialog.Container>
  );
};
