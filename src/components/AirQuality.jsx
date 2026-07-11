import { motion } from "framer-motion";
import {
  Wind,
  Leaf,
  CircleDot,
} from "lucide-react";

const AQI_STATUS = {
  1: {
    label: "Good",
    color: "bg-green-500",
  },
  2: {
    label: "Fair",
    color: "bg-lime-500",
  },
  3: {
    label: "Moderate",
    color: "bg-yellow-500 text-black",
  },
  4: {
    label: "Poor",
    color: "bg-orange-500",
  },
  5: {
    label: "Very Poor",
    color: "bg-red-500",
  },
};

const AirQuality = ({ airQuality }) => {
  if (!airQuality) return null;

  const data = airQuality.list[0];

  const status = AQI_STATUS[data.main.aqi];

  const pollutants = [
    {
      title: "PM2.5",
      value: data.components.pm2_5,
    },
    {
      title: "PM10",
      value: data.components.pm10,
    },
    {
      title: "CO",
      value: data.components.co,
    },
    {
      title: "NO₂",
      value: data.components.no2,
    },
    {
      title: "O₃",
      value: data.components.o3,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10"
    >
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Air Quality
          </h2>

          <p className="mt-2 text-slate-400">
            Live air pollution information
          </p>
        </div>

        <span
          className={`rounded-full px-5 py-2 text-sm font-semibold ${status.color}`}
        >
          {status.label}
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {pollutants.map((item) => (
          <PollutantCard
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </motion.section>
  );
};

const PollutantCard = ({ title, value }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
        rounded-3xl
        border
        border-slate-700/70
        bg-slate-900/85
        p-6
        shadow-xl
      "
    >
      <div className="mb-5 flex items-center justify-between">
        <Leaf
          className="text-green-400"
          size={28}
        />

        <CircleDot
          className="text-slate-600"
          size={16}
        />
      </div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        {Number(value).toFixed(1)}
      </h3>

      <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
        <Wind size={16} />
        <span>μg/m³</span>
      </div>
    </motion.div>
  );
};

export default AirQuality;