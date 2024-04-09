import { View } from "react-native";
import { CIRCLE_RADIUS, s } from "./Animaton.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export const GestureHandlerSquareInCircle = () => {
  const squareAnimTranslateX = useSharedValue(0);
  const squareAnimTranslateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart((e) => {})
    .onChange((e) => {
      squareAnimTranslateX.value += e.changeX;
      squareAnimTranslateY.value += e.changeY;
    })
    .onEnd((e) => {
      const distanceFromCenter = Math.sqrt(
        squareAnimTranslateX.value ** 2 + squareAnimTranslateY.value ** 2
      );
      if (distanceFromCenter < CIRCLE_RADIUS) {
        squareAnimTranslateX.value = withSpring(0);
        squareAnimTranslateY.value = withSpring(0);
      }
    });

  const squareAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: squareAnimTranslateX.value },
        { translateY: squareAnimTranslateY.value },
      ],
    };
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={s.root}>
        <View style={s.circle}>
          <GestureDetector gesture={panGesture} style={{ flex: 1 }}>
            <Animated.View style={[s.square, squareAnimatedStyle]} />
          </GestureDetector>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};
