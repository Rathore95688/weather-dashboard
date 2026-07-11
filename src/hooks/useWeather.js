import { useState } from "react";
import {
  getCurrentWeather,
  getForecast,
  getAirQuality,
} from "../services/weatherApi";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const currentData = await getCurrentWeather(city);

      const forecastData = await getForecast(city);

      const airData = await getAirQuality(
        currentData.coord.lat,
        currentData.coord.lon
      );

      setWeather(currentData);
      setForecast(forecastData);
      setAirQuality(airData);
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong."
      );

      setWeather(null);
      setForecast(null);
      setAirQuality(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    forecast,
    airQuality,
    loading,
    error,
    searchWeather,
  };
};

export default useWeather;