import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import useWeather from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import AirQuality from "./components/AirQuality";
import { getWeatherBackground } from "./utils/weatherBackground";
import Hero from "./components/Hero";
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

  const handleSearch = (city) => {
    searchWeather(city);
  };

  const handleCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
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
      alert("Unable to access your location.");
    }
  );
};

  const weatherType = weather?.weather?.[0]?.main;

const background = getWeatherBackground(weatherType);

  return (
    <div className={`relative min-h-screen overflow-hidden ${background} transition-all duration-700`}>
  {/* Background Blur */}
  <div className="absolute inset-0 backdrop-blur-3xl bg-black/20"></div>

  {/* Content */}
  <div className="relative z-10 min-h-screen">
      <Navbar weather={weather} />

      <main className="mx-auto max-w-7xl px-6 py-6">
        {/* Hero Section */}
        <Hero weather={weather} />

        {/* Search */}
        <SearchBar
  onSearch={handleSearch}
  onCurrentLocation={handleCurrentLocation}
  loading={loading}
/>

        {/* Loading */}
        {loading && (
          <div className="mt-8 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-6 text-center text-sky-300">
            Loading weather...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center text-red-300">
            {error}
          </div>
        )}

        <WeatherCard weather={weather} />
        <WeatherDetails weather={weather} />
        <Forecast forecast={forecast} />
        <AirQuality airQuality={airQuality} />
      </main>
    </div>
    </div>
  );
}

export default App;