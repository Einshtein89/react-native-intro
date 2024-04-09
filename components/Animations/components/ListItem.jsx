import { IMG_SIZE, s } from "./ListItem.style";
import { Image } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export const ListItem = ({ image, scrollDistance, index, screen_height }) => {
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollDistance.value,
      [
        index * IMG_SIZE.MIN,
        index * IMG_SIZE.MIN - IMG_SIZE.MIN,
        // screen_height - IMG_SIZE.MAX,
      ],
      [
        IMG_SIZE.MIN,
        IMG_SIZE.MAX,
        // IMG_SIZE.MIN
      ],
      Extrapolation.CLAMP
    );
    return {
      height,
    };
  });
  // const centerImageStyle =
  //   index === 4 ? { height: IMG_SIZE.MAX } : { height: IMG_SIZE.MIN };
  return (
    <Animated.Image
      source={image.picture}
      style={[s.image, imageAnimatedStyle]}
    />
  );
};
