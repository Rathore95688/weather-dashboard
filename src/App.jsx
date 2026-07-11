import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import useWeather from "./hooks/useWeather";

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

        {/* Weather Preview */}
        {weather && (
          <section className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white">
              {weather.name}, {weather.sys.country}
            </h2>

            <p className="mt-6 text-6xl font-bold text-white">
              {Math.round(weather.main.temp)}°C
            </p>

            <p className="mt-2 text-xl capitalize text-slate-300">
              {weather.weather[0].description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-slate-400">Feels Like</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {Math.round(weather.main.feels_like)}°C
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-slate-400">Humidity</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {weather.main.humidity}%
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-slate-400">Wind Speed</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {weather.wind.speed} m/s
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-slate-400">Pressure</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {weather.main.pressure} hPa
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;