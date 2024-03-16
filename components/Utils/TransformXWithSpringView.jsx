import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";

export const TransformXWithSpringView = ({ initValue, children }) => {
  const offset = useSharedValue(initValue);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  useEffect(() => {
    offset.value = withSpring(-offset.value, {
      mass: 2,
      damping: 10,
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
      reduceMotion: ReduceMotion.System,
    });
  }, []);

  return <Animated.View style={animatedStyles}>{children}</Animated.View>;
};
