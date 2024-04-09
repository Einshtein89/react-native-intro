import { s } from "./Animaton.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { View } from "react-native";

export const TimingAnimationView = () => {
  // 1 - Declare an animation value
  const squareAnimX = useSharedValue(0);
  const squareAnimY = useSharedValue(0);
  const squareAnimOpacity = useSharedValue(1);

  // 2 - Run animation and update the animation value
  useEffect(() => {
    squareAnimX.value = withTiming(300, { duration: 2000 }, () => {
      squareAnimY.value = withTiming(100, { duration: 4000 });
      squareAnimOpacity.value = withTiming(1, { duration: 4000 });
    });
    squareAnimOpacity.value = withTiming(0, { duration: 2000 });
  }, []);

  //withRepeat - repeat animation x times (or forever if -1)
  useEffect(() => {
    squareAnimX.value = withRepeat(withSpring(300), -1);
  }, []);

  // 3 - Create an animated style and send it the animation value
  const squareAnimStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: squareAnimX.value },
      { translateY: squareAnimY.value },
    ],
    opacity: squareAnimOpacity.value,
  }));
  // 4 - Send the animated style to an animated component
  return (
    <View style={s.root}>
      <Animated.View style={[s.square, squareAnimStyle]} />
    </View>
  );
};
