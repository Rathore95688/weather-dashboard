import {
  Eye,
  Sunrise,
  Sunset,
  Thermometer,
  Wind,
  Droplets,
  Gauge,
} from "lucide-react";

const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const details = [
    {
      icon: <Thermometer className="text-orange-400" />,
      title: "Min Temp",
      value: `${Math.round(weather.main.temp_min)}°C`,
    },
    {
      icon: <Thermometer className="text-red-400" />,
      title: "Max Temp",
      value: `${Math.round(weather.main.temp_max)}°C`,
    },
    {
      icon: <Droplets className="text-blue-400" />,
      title: "Humidity",
      value: `${weather.main.humidity}%`,
    },
    {
      icon: <Wind className="text-cyan-400" />,
      title: "Wind",
      value: `${weather.wind.speed} m/s`,
    },
    {
      icon: <Gauge className="text-green-400" />,
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
    },
    {
      icon: <Eye className="text-purple-400" />,
      title: "Visibility",
      value: `${(weather.visibility / 1000).toFixed(1)} km`,
    },
    {
      icon: <Sunrise className="text-yellow-400" />,
      title: "Sunrise",
      value: sunrise,
    },
    {
      icon: <Sunset className="text-pink-400" />,
      title: "Sunset",
      value: sunset,
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="mb-5 text-2xl font-bold text-white">
        Weather Details
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {details.map((detail) => (
          <div
            key={detail.title}
            className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
          >
            <div className="mb-4">{detail.icon}</div>

            <p className="text-sm text-slate-400">
              {detail.title}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {detail.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherDetails;