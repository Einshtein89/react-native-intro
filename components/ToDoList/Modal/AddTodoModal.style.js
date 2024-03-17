import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 20,
  },
  btn: {
    position: "relative",
  },
  cancelBtn: {
    marginRight: 40,
    marginTop: 20,
    backgroundColor: "red",
  },
  cancelBtnTxt: {
    color: "white",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    // color: "white",
    fontWeight: "bold",
    // textAlign: "center",
    marginBottom: 15,
    textAlign: "center",
  },
  saveBtn: {
    marginTop: 20,
  },
  saveBtnDsbld: {
    backgroundColor: "grey",
  },
  saveBtnDsbldTxt: {
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    // alignItems: "stretch",
    // justifyContent: "space-evenly",
  },
});
