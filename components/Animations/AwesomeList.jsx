import { s } from "./Animaton.style";
import { Dimensions, ScrollView, View } from "react-native";
import { List } from "./components/List";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("screen");

export const AwesomeList = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView>
          <List />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
