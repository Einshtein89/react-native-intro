import { s } from "./List.style";
import { Dimensions, ScrollView } from "react-native";
import { list_images } from "../constants";
import { ListItem } from "./ListItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { IMG_SIZE } from "./ListItem.style";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
export const List = () => {
  const scrollDistance = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollDistance.value = e.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView
      snapToInterval={IMG_SIZE.MIN}
      contentContainerStyle={{
        height: list_images.length * IMG_SIZE.MIN + 2 * IMG_SIZE.MAX,
      }}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
    >
      {list_images.map((image, i) => (
        <ListItem
          key={image.title + i}
          scrollDistance={scrollDistance}
          image={image}
          index={i}
          screen_height={SCREEN_HEIGHT}
        />
      ))}
    </Animated.ScrollView>
  );
};
