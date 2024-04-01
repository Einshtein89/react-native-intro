import { s } from "./ForecastListItem.style";
import { Txt } from "../Txt/Txt";
import { Image, View } from "react-native";

export const ForecastListItem = ({ image, day, date, temperature }) => {
  return (
    <View style={s.container}>
      <Image source={image} style={s.image} />
      <View style={s.global_row_style}>
        <Txt style={s.day}>{day}</Txt>
      </View>
      <View style={s.global_row_style}>
        <Txt style={s.date}>{date}</Txt>
      </View>
      <View style={s.global_row_style}>
        <Txt style={s.temperature}>{temperature}°</Txt>
      </View>
    </View>
  );
};
