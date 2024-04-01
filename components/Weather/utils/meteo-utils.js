export const WEATHER_INTERPRETATIONS = [
  {
    codes: [0],
    label: "Sunny",
    image: require("../../../assets/meteo_img/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Cloudy",
    image: require("../../../assets/meteo_img/clouds.png"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Rainy",
    image: require("../../../assets/meteo_img/rain.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Snowy",
    image: require("../../../assets/meteo_img/snow.png"),
  },
  {
    codes: [96, 99],
    label: "Thunderous",
    image: require("../../../assets/meteo_img/thunder.png"),
  },
];

export function getWeatherInterpretation(code) {
  return WEATHER_INTERPRETATIONS.find((interpretation) =>
    interpretation.codes.includes(code)
  );
}

export const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
