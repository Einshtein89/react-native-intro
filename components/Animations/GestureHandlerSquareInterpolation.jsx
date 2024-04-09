import { Dimensions, View } from "react-native";
import { CIRCLE_RADIUS, s, SQUARE_SIZE } from "./Animaton.style";
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("screen");
export const GestureHandlerSquareInterpolation = () => {
  const squareAnimTranslateX = useSharedValue(0);
  const squareAnimTranslateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart((e) => {})
    .onChange((e) => {
      squareAnimTranslateX.value += e.changeX;
      squareAnimTranslateY.value += e.changeY;
    });

  const squareAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      squareAnimTranslateX.value,
      [0, SCREEN_W / 2 - SQUARE_SIZE / 2],
      [1, 3],
      Extrapolation.CLAMP
    );
    return {
      transform: [
        { translateX: squareAnimTranslateX.value },
        { translateY: squareAnimTranslateY.value },
        { scale },
      ],
    };
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={s.rootAlignLeft}>
        <GestureDetector gesture={panGesture} style={{ flex: 1 }}>
          <Animated.View style={[s.square, squareAnimatedStyle]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};
