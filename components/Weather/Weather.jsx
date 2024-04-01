import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, ImageBackground, StyleSheet } from "react-native";
import { Home } from "./pages/Home";
import background from "../../assets/background.png";
import { useEffect, useState } from "react";
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { MeteoAPI } from "./api/meteo";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Forecasts } from "./pages/Forecasts/Forecasts";
import DropDown from "./components/Dropdown/DropDown";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};
export const Weather = () => {
  const [coordinates, setCoordinates] = useState(undefined);
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("../../assets/fonts/Alata-Regular.ttf"),
  });
  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherBy(coordinates);
    }
  }, [coordinates]);

  const fetchWeatherBy = async (coordinates) => {
    const weatherResponse = await MeteoAPI.fetchWeatherBy(coordinates);
    const cityResponse = await MeteoAPI.fetchCityBy(coordinates);
    setWeather(weatherResponse);
    setCity(cityResponse);
  };

  const fetchCoordsBy = async (city) => {
    try {
      const coordsResponse = await MeteoAPI.fetchCoordsBy(city);
      setCoordinates(coordsResponse);
    } catch (err) {
      Alert.alert("Aouch !", err);
    }
  };

  const getUserCoordinates = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync({
        accuracy: LocationAccuracy.High,
      });
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "49.59", lng: "34.54" });
    }
  };

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        imageStyle={s.img}
        style={s.backgroundImg}
        source={background}
      >
        <SafeAreaView style={s.container}>
          {isFontLoaded && weather ? (
            <Stack.Navigator
              screenOptions={{ headerShown: false, animation: "fade" }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home">
                {() => (
                  <Home
                    weather={weather}
                    city={city}
                    onSubmitSearch={fetchCoordsBy}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="Forecasts" component={Forecasts} />
            </Stack.Navigator>
          ) : (
            <ActivityIndicator
              size="large"
              color={"white"}
              style={{ flex: 1, justifyContent: "center" }}
            />
          )}
        </SafeAreaView>
      </ImageBackground>
    </NavigationContainer>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImg: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    opacity: 0.75,
  },
});
