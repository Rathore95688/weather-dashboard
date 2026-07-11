import { motion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";

const Hero = ({ weather }) => {
  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17) {
    greeting = "Good Evening";
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <p className="flex items-center gap-2 text-sky-400 font-medium">
        <Sparkles size={18} />
        {greeting}
      </p>

      <h1 className="mt-3 text-6xl font-black tracking-tight text-white">
        SkyCast
      </h1>

      <h2 className="mt-2 text-2xl font-semibold text-slate-200">
        Modern Weather Intelligence Dashboard
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
        Explore real-time weather, air quality, five-day forecasts,
        and location-based insights through a beautiful modern dashboard.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/70 px-5 py-3">
          <p className="text-xs text-slate-400">
            Current City
          </p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            {weather
              ? `${weather.name}, ${weather.sys.country}`
              : "Search a city"}
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900/70 px-5 py-3">
          <p className="text-xs text-slate-400">
            Today
          </p>

          <h3 className="mt-1 flex items-center gap-2 text-lg font-semibold text-white">
            <CalendarDays size={18} />
            {today}
          </h3>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;