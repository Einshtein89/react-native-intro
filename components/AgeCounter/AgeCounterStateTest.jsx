import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export const AgeCounterStateTest = () => {
  const [age, setAge] = useState(30);
  const increaseAge = () => {
    setAge((prevState) => (prevState += 1));
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <TouchableOpacity
        onPress={increaseAge}
        style={{ backgroundColor: "#00A2FF" }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Increase age</Text>
      </TouchableOpacity>
      <Text>I am {age} years old</Text>
    </SafeAreaView>
  );
};
