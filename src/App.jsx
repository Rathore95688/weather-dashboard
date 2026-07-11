import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-4xl font-bold text-white">
          Welcome to Weather Dashboard
        </h2>

        <p className="mt-3 text-gray-400">
          We'll build an amazing weather experience here.
        </p>
      </main>
    </div>
  );
}

export default App;