import { View, TextInput, Text } from "react-native";
import { s } from "./input.style";
import { ClearButton } from "../ClearButton/ClearButton";

export const Input = ({ defaultValue, onInputChangeHandler, unit, value }) => {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        placeholder="Type your temperature"
        maxLength={4}
        onChangeText={(text) => {
          onInputChangeHandler(text);
        }}
        defaultValue={defaultValue.toString()}
        value={value.toString()}
      />
      <View style={s.clearUnitWrapper}>
        {value !== "" && (
          <ClearButton
            onPress={() => {
              onInputChangeHandler("");
            }}
          />
        )}
        <Text style={s.unit}>{unit}</Text>
      </View>
    </View>
  );
};
