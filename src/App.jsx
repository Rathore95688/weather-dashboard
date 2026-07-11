import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import AirQuality from "./components/AirQuality";
import RecentSearches from "./components/RecentSearches";
import useWeather from "./hooks/useWeather";
import { getWeatherBackground } from "./utils/weatherBackground";
import EmptyState from "./components/EmptyState";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  const {
    weather,
    forecast,
    airQuality,
    loading,
    error,
    searchWeather,
    fetchByLocation,
  } = useWeather();

  // -----------------------------
  // Recent Searches
  // -----------------------------

  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("recentSearches")) || [];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRecentSearches(stored);
  }, []);

  // -----------------------------
  // Search
  // -----------------------------

  const saveRecentSearch = (city) => {
    let updated = [
      city,
      ...recentSearches.filter((item) => item !== city),
    ];

    updated = updated.slice(0, 5);

    setRecentSearches(updated);

    localStorage.setItem(
      "recentSearches",
      JSON.stringify(updated)
    );
  };

  const handleSearch = async (city) => {
    await searchWeather(city);

    saveRecentSearch(city);
  };

  // -----------------------------
  // Current Location
  // -----------------------------

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchByLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      () => {
        alert("Unable to fetch your location.");
      }
    );
  };

  // -----------------------------
  // Recent Searches
  // -----------------------------

  const clearRecentSearches = () => {
    setRecentSearches([]);

    localStorage.removeItem("recentSearches");
  };

  // -----------------------------
  // Dynamic Background
  // -----------------------------

  const weatherType = weather?.weather?.[0]?.main;

  const background = getWeatherBackground(weatherType);

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${background}`}
    >
      <AnimatedBackground weatherType={weatherType} />
      <div className="min-h-screen bg-black/30">
        <Navbar weather={weather} />

        <main className="mx-auto max-w-7xl px-5 py-10">
          {/* Hero */}
          <Hero weather={weather} />

          {/* Search */}
          <SearchBar
            onSearch={handleSearch}
            onCurrentLocation={handleCurrentLocation}
            loading={loading}
          />

          {/* Recent Searches */}
          <RecentSearches
            searches={recentSearches}
            onSelect={handleSearch}
            onClear={clearRecentSearches}
          />

          {/* Loading */}
          {loading && (
            <div className="mt-8 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-5 text-center text-sky-300">
              Loading weather...
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-center text-red-300">
              {error}
            </div>
          )}

          {/* Weather Sections */}
          {weather ? (
  <>
    <WeatherCard weather={weather} />
    <WeatherDetails weather={weather} />
    <Forecast forecast={forecast} />
    <AirQuality airQuality={airQuality} />
  </>
) : (
  <EmptyState />
)}
        </main>
      </div>
    </div>
  );
}

export default App;