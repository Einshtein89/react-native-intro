import {
  s,
  StyledContainer,
  StyledLabel,
  StyledValue,
} from "./MeteoAdvansed.style";
import { View } from "react-native";
import DropDown from "../Dropdown/DropDown";
import { useState } from "react";
import { dropdownGlobalStyles } from "../Dropdown/Dropdown.style";

export const MeteoAdvanced = ({
  sunrise,
  sunset,
  windSpeedFromApi,
  windSpeedUnitsFromApi,
}) => {
  const windSpeedUnitsAll = [
    { label: "m/s", value: "m/s" },
    { label: "km/h", value: "km/h" },
  ];
  const convertWindSpeedMap = new Map([
    ["m/s", 3.6],
    ["km/h", 0.28],
  ]);
  const [selectedWindSpeedUnit, setSelectedWindSpeedUnit] = useState(
    windSpeedUnitsFromApi
  );
  const windSpeedValue =
    windSpeedUnitsFromApi === selectedWindSpeedUnit
      ? windSpeedFromApi
      : (
          windSpeedFromApi * convertWindSpeedMap.get(windSpeedUnitsFromApi)
        ).toFixed(2);

  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledLabel>{sunrise}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{sunset}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 0,
            marginLeft: 15,
          }}
        >
          <StyledLabel>{windSpeedValue}</StyledLabel>
          <DropDown
            items={windSpeedUnitsAll}
            selectedItem={selectedWindSpeedUnit}
            setSelectedItem={setSelectedWindSpeedUnit}
            styles={{
              ...dropdownGlobalStyles,
              textStyle: { ...dropdownGlobalStyles.textStyle, fontSize: 13 },
              containerStyle: {
                ...dropdownGlobalStyles.containerStyle,
                width: 60,
              },
            }}
          />
        </View>
        <StyledValue>Wind Speed</StyledValue>
      </StyledContainer>
    </View>
  );
};
