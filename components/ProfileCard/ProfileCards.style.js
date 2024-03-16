import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  container: {
    marginBottom: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
    //ios shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    //android shadow
    elevation: 17,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  header: {
    flexDirection: "row",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  texts: {
    flex: 1,
    paddingLeft: 15,
  },
  social: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialButton: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#eee",
  },
});
