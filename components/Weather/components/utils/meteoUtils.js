const UNITS = {
  celsius: "°C",
  fahrenheit: "˚F",
};

const convertTemperatureTo = (temperature, unitTo) => {
  switch (unitTo) {
    case UNITS.celsius:
      return (temperature - 32) / 1.8;
    case UNITS.fahrenheit:
      return temperature * 1.8 + 32;
    default:
      throw new Error("Invalid clearUnitWrapper");
  }
};

const getOppositeUnit = (unit) => {
  return unit === UNITS.celsius ? UNITS.fahrenheit : UNITS.celsius;
};

export const temperatureUnitsAll = [
  { label: "C", value: UNITS.celsius },
  { label: "F", value: UNITS.fahrenheit },
];

export const getTemperatureValue = (
  temperatureUnitFromApi,
  selectedTemperatureUnit,
  temperatureFromApi
) => {
  return temperatureUnitFromApi === selectedTemperatureUnit
    ? temperatureFromApi.toFixed(0)
    : convertTemperatureTo(
        temperatureFromApi,
        getOppositeUnit(temperatureUnitFromApi)
      ).toFixed(0);
};
