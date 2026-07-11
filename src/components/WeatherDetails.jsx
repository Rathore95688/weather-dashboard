import { motion } from "framer-motion";
import {
  Thermometer,
  Droplets,
  Wind,
  Gauge,
  Eye,
  Sunrise,
  Sunset,
} from "lucide-react";

const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const details = [
    {
      icon: Thermometer,
      title: "Min Temp",
      value: `${Math.round(weather.main.temp_min)}°C`,
      color: "text-orange-400",
    },
    {
      icon: Thermometer,
      title: "Max Temp",
      value: `${Math.round(weather.main.temp_max)}°C`,
      color: "text-red-400",
    },
    {
      icon: Droplets,
      title: "Humidity",
      value: `${weather.main.humidity}%`,
      color: "text-sky-400",
    },
    {
      icon: Wind,
      title: "Wind",
      value: `${weather.wind.speed} m/s`,
      color: "text-cyan-400",
    },
    {
      icon: Gauge,
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
      color: "text-green-400",
    },
    {
      icon: Eye,
      title: "Visibility",
      value: `${(weather.visibility / 1000).toFixed(1)} km`,
      color: "text-violet-400",
    },
    {
      icon: Sunrise,
      title: "Sunrise",
      value: sunrise,
      color: "text-yellow-400",
    },
    {
      icon: Sunset,
      title: "Sunset",
      value: sunset,
      color: "text-pink-400",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">
        Weather Details
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {details.map((item) => (
          <DetailCard key={item.title} {...item} />
        ))}
      </div>
    </motion.section>
  );
};

const DetailCard = ({ icon: Icon, title, value, color }) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-700/70
        bg-slate-900/85
        p-6
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-500/40
        hover:bg-slate-800
      "
    >
      <Icon className={`${color} mb-5`} size={28} />

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        {value}
      </h3>
    </div>
  );
};

export default WeatherDetails;