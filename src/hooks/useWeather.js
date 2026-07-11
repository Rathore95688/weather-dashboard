import { useState } from "react";
import {
  getCurrentWeather,
  getForecast,
  getAirQuality,
  getCurrentWeatherByCoords,
  getForecastByCoords,
  getAirQualityByCoords,
} from "../services/weatherApi";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Search Weather by City
  const searchWeather = async (city) => {
    if (!city.trim()) return;

    try {
      setLoading(true);
      setError("");

      const weatherData = await getCurrentWeather(city);

      const forecastData = await getForecast(city);

      const airData = await getAirQuality(
        weatherData.coord.lat,
        weatherData.coord.lon
      );

      setWeather(weatherData);
      setForecast(forecastData);
      setAirQuality(airData);
    } catch (err) {
      console.error(err);
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Search Weather by Current Location
  const fetchByLocation = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");

      const weatherData = await getCurrentWeatherByCoords(lat, lon);

      const forecastData = await getForecastByCoords(lat, lon);

      const airData = await getAirQualityByCoords(lat, lon);

      setWeather(weatherData);
      setForecast(forecastData);
      setAirQuality(airData);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch weather for your location.");
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
    fetchByLocation,
  };
};

export default useWeather;