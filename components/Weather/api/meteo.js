import axios from "axios";

export class MeteoAPI {
  static async fetchWeatherBy(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true&wind_speed_unit=ms&temperature_unit=celsius`
      )
    ).data;
  }

  static async fetchCityBy(coords) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;

    return city || village || town;
  }

  static async fetchCoordsBy(city) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=ru&format=json&accept-language=ru`
        )
      ).data.results[0];

      return { lat, lng };
    } catch (err) {
      throw "Invalid city name";
    }
  }
}
