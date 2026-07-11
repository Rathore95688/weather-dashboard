import { motion } from "framer-motion";
import {
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  Gauge,
} from "lucide-react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const icon = weather.weather[0].icon;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        mt-8
        overflow-hidden
        rounded-3xl
        border
        border-slate-700/70
        bg-slate-900/85
        shadow-2xl
      "
    >
      {/* Header */}
      <div className="flex flex-col justify-between gap-8 p-8 lg:flex-row lg:items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin size={18} />

            <span className="text-lg">
              {weather.name}, {weather.sys.country}
            </span>
          </div>

          <h1 className="mt-4 text-6xl font-bold text-white md:text-7xl">
            {Math.round(weather.main.temp)}°
          </h1>

          <p className="mt-3 text-xl capitalize text-slate-300">
            {weather.weather[0].description}
          </p>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src={iconUrl}
            alt="Weather Icon"
            className="h-40 w-40"
          />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-px bg-slate-700/60 lg:grid-cols-4">
        <StatCard
          icon={<Thermometer size={22} />}
          title="Feels Like"
          value={`${Math.round(weather.main.feels_like)}°C`}
          color="text-orange-400"
        />

        <StatCard
          icon={<Droplets size={22} />}
          title="Humidity"
          value={`${weather.main.humidity}%`}
          color="text-sky-400"
        />

        <StatCard
          icon={<Wind size={22} />}
          title="Wind Speed"
          value={`${weather.wind.speed} m/s`}
          color="text-cyan-400"
        />

        <StatCard
          icon={<Gauge size={22} />}
          title="Pressure"
          value={`${weather.main.pressure} hPa`}
          color="text-green-400"
        />
      </div>
    </motion.section>
  );
};

const StatCard = ({ icon, title, value, color }) => {
  return (
    <div className="bg-slate-900 p-6 transition hover:bg-slate-800">
      <div className={`${color} mb-4`}>
        {icon}
      </div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {value}
      </h3>
    </div>
  );
};

export default WeatherCard;