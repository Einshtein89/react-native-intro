import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { CarbonTest } from "./components/CarbonTest/CarbonTest";
import { ProfileCards } from "./components/ProfileCard/ProfileCards";
import { AgeCounterStateTest } from "./components/AgeCounter/AgeCounterStateTest";
import { Alert, Text, Platform, View } from "react-native";
import { TemperatureConverter } from "./components/TemperatureConverter/TemperatureConverter";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { Weather } from "./components/Weather/Weather";
import { GalleryPicker } from "./components/Gallery/GalleryPicker";
import { TimingAnimationView } from "./components/Animations/TimingAnimationView";
import { GestureHandlerSquareInCircle } from "./components/Animations/GestureHandlerSquareInCircle";
import { GestureHandlerSquareInterpolation } from "./components/Animations/GestureHandlerSquareInterpolation";
import { AwesomeList } from "./components/Animations/AwesomeList";

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <AgeCounterStateTest />
    //   <ProfileCards />
    //   <CarbonTest />
    //   <TemperatureConverter />
    //   <ToDoList />
    //   <Weather />
    //   <GalleryPicker />
    //   <TimingAnimationView />
    //   <GestureHandlerSquareInCircle />
    //   <GestureHandlerSquareInterpolation />
    // </SafeAreaProvider>
    <AwesomeList />
  );
}
