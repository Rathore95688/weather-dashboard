import { motion } from "framer-motion";
import { CloudSun } from "lucide-react";

const EmptyState = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="
        mt-12
        rounded-3xl
        border
        border-slate-700/70
        bg-slate-900/80
        p-12
        text-center
        shadow-xl
      "
    >
      <CloudSun
        size={80}
        className="mx-auto text-sky-400"
      />

      <h2 className="mt-6 text-4xl font-bold text-white">
        Welcome to SkyCast
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-400">
        Search for any city around the world or use your current
        location to explore live weather, air quality, and a 5-day
        forecast.
      </p>

      <div className="mt-8 inline-flex rounded-full bg-sky-500/20 px-6 py-3 text-sky-300">
        🔍 Search above to begin
      </div>
    </motion.section>
  );
};

export default EmptyState;