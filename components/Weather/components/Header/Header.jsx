import { TouchableOpacity, View } from "react-native";
import { Txt } from "../Txt/Txt";
import { useNavigation } from "@react-navigation/native";
import { s } from "./Header.style";

export const Header = ({ city }) => {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={nav.goBack} style={s.back_btn}>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View style={s.header}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={s.subtitle}>7 days forecast</Txt>
      </View>
    </View>
  );
};
