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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        mt-10
        rounded-3xl
        border
        border-white/10
        bg-white/10
        p-8
        backdrop-blur-2xl
        shadow-xl
      "
    >
      {/* Top Section */}
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin size={18} />

            <span>
              {weather.name}, {weather.sys.country}
            </span>
          </div>

          <h2 className="mt-4 text-7xl font-bold text-white">
            {Math.round(weather.main.temp)}°
          </h2>

          <p className="mt-3 text-xl capitalize text-slate-300">
            {weather.weather[0].description}
          </p>
        </div>

        {/* Weather Icon */}
        <img
          src={iconUrl}
          alt="Weather Icon"
          className="h-36 w-36"
        />
      </div>

      {/* Details Grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white/5 p-5">
          <Thermometer className="mb-3 text-orange-400" />
          <p className="text-slate-400">Feels Like</p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {Math.round(weather.main.feels_like)}°C
          </h3>
        </div>

        <div className="rounded-2xl bg-white/5 p-5">
          <Droplets className="mb-3 text-blue-400" />
          <p className="text-slate-400">Humidity</p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {weather.main.humidity}%
          </h3>
        </div>

        <div className="rounded-2xl bg-white/5 p-5">
          <Wind className="mb-3 text-cyan-400" />
          <p className="text-slate-400">Wind Speed</p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {weather.wind.speed} m/s
          </h3>
        </div>

        <div className="rounded-2xl bg-white/5 p-5">
          <Gauge className="mb-3 text-green-400" />
          <p className="text-slate-400">Pressure</p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {weather.main.pressure} hPa
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;