import { Text } from "react-native";
import { s } from "./DisplayTemperature.style";

export const DisplayTemperature = ({ temperature, unit }) => {
  return (
    <Text style={s.temperatureTxt}>
      {temperature} {unit}
    </Text>
  );
};
