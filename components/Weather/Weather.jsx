import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, ImageBackground, Platform, StyleSheet } from "react-native";
import { Home } from "./pages/Home";
import background from "../../assets/background.png";
import { useEffect, useRef, useState } from "react";
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
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import * as Constants from "constants";

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
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState();
  const notificationListener = useRef();
  const responseListener = useRef();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("../../assets/fonts/Alata-Regular.ttf"),
  });
  useEffect(() => {
    // subscribeToNotifications().then((token) => setExpoPushToken(token));
    // App is in background or killed and then the notification is pressed
    // Notifications.addNotificationResponseReceivedListener((response) => {
    //   console.log(
    //     "addNotificationResponseReceivedListener",
    //     response.notification.request.content.data
    //   );
    // });
    // // App is opened and notification and is received
    // Notifications.addNotificationReceivedListener((notification) => {
    //   console.log(
    //     "addNotificationReceivedListener",
    //     notification.request.content.data
    //   );
    //   setNotification(notification);
    // });
    getUserCoordinates();

    return () => {
      // Notifications.removeNotificationSubscription(
      //   notificationListener.current
      // );
      // Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherBy(coordinates);
    }
  }, [coordinates]);

  const subscribeToNotifications = async () => {
    let token;
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
          alert("Failed to get permisions");
          return;
        }
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig?.extra?.eas?.projectId,
        })
      ).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  };

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
              screenOptions={{
                headerShown: false,
              }}
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
