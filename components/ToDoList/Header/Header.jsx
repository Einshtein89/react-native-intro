import { Image, Text } from "react-native";
import logoImg from "../../../assets/logo.png";
import { s } from "./Header.style";

export const Header = () => {
  return (
    <>
      <Image style={s.img} source={logoImg} resizeMode="contain" />
      <Text style={s.subtitle}>Your To-Do list</Text>
    </>
  );
};
