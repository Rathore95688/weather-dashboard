import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import useWeather from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const {
    weather,
    loading,
    error,
    searchWeather,
  } = useWeather();

  const handleSearch = (city) => {
    searchWeather(city);
  };

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-blue-950
        transition-all
        duration-500
      "
    >
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Hero Section */}
        <section className="mb-10">
          <p className="font-medium text-blue-400">
            Good Morning 👋
          </p>

          <h1 className="mt-2 text-5xl font-extrabold text-white">
            SkyCast
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Get accurate weather forecasts, air quality insights, and
            beautiful visualizations with a modern dashboard.
          </p>
        </section>

        {/* Search */}
        <SearchBar
          onSearch={handleSearch}
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
      </main>
    </div>
  );
}

export default App;