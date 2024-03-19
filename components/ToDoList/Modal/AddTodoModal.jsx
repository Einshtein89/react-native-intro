import {
  Alert,
  Button,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import { globalStyle } from "../../GlobalStyles/global.style";
import { s } from "./AddTodoModal.style";
import { useRef } from "react";

export const AddTodoModal = ({
  showAddDialog,
  setIsAddDialogDisplayed,
  setInputValue,
  inputValue,
  addTodo,
}) => {
  const inputRef = useRef();
  const saveButtonDisabled = inputValue.length === 0;
  const focusOnInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Modal
      onModalShow={focusOnInput}
      isVisible={showAddDialog}
      onBackButtonPress={() => setIsAddDialogDisplayed(false)}
      animationOut={"slideOutUp"}
      backdropTransitionOutTiming={0}
      supportedOrientations={["portrait", "landscape"]}
      onBackdropPress={() => setIsAddDialogDisplayed(false)}
    >
      <View style={s.modalView}>
        <Text style={s.modalText}>Add todo</Text>
        <TextInput
          ref={inputRef}
          placeholder="Ex: Go to the dentist"
          style={s.input}
          onChangeText={setInputValue}
        />
        <View style={s.buttons}>
          <TouchableOpacity
            style={[globalStyle.btn, s.btn, s.cancelBtn]}
            onPress={() => setIsAddDialogDisplayed(false)}
          >
            <Text style={[globalStyle.btnTxt, s.cancelBtnTxt]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={saveButtonDisabled}
            style={[
              globalStyle.btn,
              s.btn,
              s.saveBtn,
              saveButtonDisabled && s.saveBtnDsbld,
            ]}
            onPress={addTodo}
          >
            <Text
              style={[
                globalStyle.btnTxt,
                saveButtonDisabled && s.saveBtnDsbldTxt,
              ]}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
