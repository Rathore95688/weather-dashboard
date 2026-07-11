import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

// Weather by City
export const getCurrentWeather = async (city) => {
  const response = await api.get("/weather", {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};

// Forecast by City
export const getForecast = async (city) => {
  const response = await api.get("/forecast", {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};

// Air Quality by Coordinates
export const getAirQuality = async (lat, lon) => {
  const response = await api.get("/air_pollution", {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  return response.data;
};

// Weather by Coordinates
export const getCurrentWeatherByCoords = async (lat, lon) => {
  const response = await api.get("/weather", {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};

// Forecast by Coordinates
export const getForecastByCoords = async (lat, lon) => {
  const response = await api.get("/forecast", {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};

// Air Quality by Coordinates
export const getAirQualityByCoords = async (lat, lon) => {
  const response = await api.get("/air_pollution", {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  return response.data;
};