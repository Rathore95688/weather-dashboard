import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = (city) => {
    console.log("Searching for:", city);
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
            Get accurate weather forecasts, air quality insights, and beautiful
            visualizations with a modern dashboard.
          </p>
        </section>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Placeholder Section */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-white">
            Weather Data Will Appear Here
          </h2>

          <p className="mt-3 text-slate-400">
            Search for a city above to fetch real-time weather information.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;