import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { s } from "./TemperatureConverter.style";
import hotBackground from "../../assets/hot.png";
import coldBackground from "../../assets/cold.png";
import { Input } from "./Input/Input";
import { useEffect, useState } from "react";
import { DisplayTemperature } from "./DisplayTemperature/DisplayTemperature";
import {
  getConvertedTemperature,
  getOppositeUnit,
  isIceTemperature,
} from "./utils/temperature";
import { ConvertButton } from "./ConvertButton/ConvertButton";
import { TransformXWithSpringView } from "../Animations/TransformXWithSpringView";
import { ClearButton } from "./ClearButton/ClearButton";

export const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("˚C");
  const [currentBackground, setCurrentBackground] = useState(coldBackground);

  useEffect(() => {
    setCurrentBackground(
      isIceTemperature(inputValue, currentUnit) ? coldBackground : hotBackground
    );
  }, [inputValue, currentUnit]);
  const onInputChangeHandler = (text) => {
    setInputValue(text);
  };
  const oppositeUnit = getOppositeUnit(currentUnit);

  return (
    <ImageBackground style={s.backgroundImg} source={currentBackground}>
      <TransformXWithSpringView initValue={-300}>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              temperature={getConvertedTemperature(inputValue, oppositeUnit)}
              unit={oppositeUnit}
            />
            <Input
              unit={currentUnit}
              defaultValue={0}
              onInputChangeHandler={onInputChangeHandler}
              value={inputValue}
            />
            <ConvertButton
              onPress={() => setCurrentUnit(oppositeUnit)}
              oppositeUnit={oppositeUnit}
            />
          </View>
        </SafeAreaView>
      </TransformXWithSpringView>
    </ImageBackground>
  );
};
