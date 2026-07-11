import Navbar from "./components/Navbar";

function App() {
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

        <section className="mb-10">

          <p className="text-blue-400 font-medium">
            Good Morning 👋
          </p>

          <h1 className="mt-2 text-5xl font-extrabold text-white">
            Weather Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Get accurate weather forecasts, air quality insights,
            and beautiful visualizations with a modern dashboard.
          </p>

        </section>

      </main>
    </div>
  );
}

export default App;