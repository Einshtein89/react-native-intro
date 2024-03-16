const UNITS = {
  celsius: "˚C",
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

const getConvertedTemperature = (inputValue, oppositeUnit) => {
  return isNaN(inputValue)
    ? ""
    : convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
};

const isIceTemperature = (temperature, unit) => {
  switch (unit) {
    case UNITS.celsius:
      return temperature <= 0;
    case UNITS.fahrenheit:
      return temperature <= 32;
    default:
      throw new Error("Invalid clearUnitWrapper");
  }
};

export { getOppositeUnit, getConvertedTemperature, isIceTemperature };
