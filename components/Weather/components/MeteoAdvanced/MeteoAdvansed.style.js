import { StyleSheet, View } from "react-native";
import { Txt } from "../Txt/Txt";
import styled from "styled-components/native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0000004b",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
  },
});

export const StyledContainer = styled.View`
  align-items: center;
`;

export const StyledLabel = styled(Txt)`
  font-size: 15px;
`;

export const StyledValue = styled(Txt)`
  font-size: 20px;
`;
