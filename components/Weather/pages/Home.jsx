import { Text, View } from "react-native";
import { s } from "./Home.style";
import { MeteoBasic } from "../components/MeteoBasic/MeteoBasic";
import { Txt } from "../components/Txt/Txt";
import { getWeatherInterpretation } from "../utils/meteo-utils";
import { MeteoAdvanced } from "../components/MeteoAdvanced/MeteoAdvanced";
import { SearchBar } from "../components/SearchBar/SearchBar";
import DropDown from "../components/Dropdown/DropDown";

export const Home = ({ weather, city, onSubmitSearch }) => {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode
  );
  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          dailyWeater={weather.daily}
          city={city}
          temperatureFromApi={currentWeather.temperature}
          temperatureUnitFromApi={weather.current_weather_units.temperature}
          interpretation={currentInterpretation}
        />
      </View>
      <View style={s.search}>
        <SearchBar onSubmit={onSubmitSearch} />
      </View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          sunrise={weather.daily.sunrise[0].split("T")[1]}
          sunset={weather.daily.sunset[0].split("T")[1]}
          windSpeedFromApi={currentWeather.windspeed}
          windSpeedUnitsFromApi={weather.current_weather_units.windspeed}
        />
      </View>
    </>
  );
};
