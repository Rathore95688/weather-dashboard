const Loader = () => {
  return (
    <div className="mt-10 animate-pulse space-y-8">
      {/* Main Weather Card */}
      <div className="h-72 rounded-3xl border border-slate-700 bg-slate-900/80"></div>

      {/* Weather Details */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-36 rounded-3xl border border-slate-700 bg-slate-900/80"
          />
        ))}
      </div>

      {/* Forecast */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-52 rounded-3xl border border-slate-700 bg-slate-900/80"
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;