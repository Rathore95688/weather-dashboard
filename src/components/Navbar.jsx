import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CloudSun, MapPin, Clock } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ weather }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-slate-900/70
        backdrop-blur-2xl
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-sky-500/20 p-3">
            <CloudSun
              className="text-sky-400"
              size={30}
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              SkyCast
            </h1>

            <p className="text-sm text-slate-400">
              Real-Time Weather Intelligence
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin
              size={18}
              className="text-sky-400"
            />

            <span>
              {weather
                ? `${weather.name}, ${weather.sys.country}`
                : "No Location"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <Clock
              size={18}
              className="text-yellow-400"
            />

            <span>{currentTime}</span>
          </div>
        </div>

        {/* Right */}
        <ThemeToggle />
      </div>
    </motion.header>
  );
};

export default Navbar;