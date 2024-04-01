import { View, Image, TouchableOpacity } from "react-native";
import { Txt } from "../Txt/Txt";
import { s } from "./MeteoBasic.style";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import DropDown from "../Dropdown/DropDown";
import { dropdownGlobalStyles } from "../Dropdown/Dropdown.style";
import {
  convertTemperatureTo,
  getOppositeUnit,
  getTemperatureValue,
  temperatureUnitsAll,
} from "../utils/meteoUtils";

export const MeteoBasic = ({
  temperatureFromApi,
  temperatureUnitFromApi,
  interpretation,
  city,
  dailyWeater,
}) => {
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState(
    temperatureUnitFromApi
  );
  const temperatureValue = getTemperatureValue(
    temperatureUnitFromApi,
    selectedTemperatureUnit,
    temperatureFromApi
  );

  const nav = useNavigation();
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={s.temp_box}>
        <Txt style={s.temp}>{Math.round(temperatureValue)}˚</Txt>
        <DropDown
          items={temperatureUnitsAll}
          selectedItem={selectedTemperatureUnit}
          setSelectedItem={setSelectedTemperatureUnit}
          styles={dropdownGlobalStyles}
        />
        <Image source={interpretation.image} style={s.image} />
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() =>
            nav.navigate("Forecasts", {
              city,
              temperatureUnitFromApi,
              selectedTemperatureUnit,
              ...dailyWeater,
            })
          }
        >
          <Txt>7 Days Forecast ></Txt>
        </TouchableOpacity>
      </View>
    </>
  );
};
