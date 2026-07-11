import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const weatherApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const getCurrentWeather = async (city) => {
  const response = await weatherApi.get("/weather", {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};

export const getForecast = async (city) => {
  const response = await weatherApi.get("/forecast", {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};

export const getAirQuality = async (lat, lon) => {
  const response = await weatherApi.get("/air_pollution", {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  return response.data;
};