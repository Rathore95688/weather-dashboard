import { Wind } from "lucide-react";
import { motion } from "framer-motion";

const AQI = {
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
    color: "bg-yellow-500",
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

  const quality = AQI[data.main.aqi];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Air Quality
          </h2>

          <p className="mt-2 text-slate-400">
            Current Air Pollution Index
          </p>
        </div>

        <span
          className={`rounded-full px-5 py-2 text-sm font-semibold text-white ${quality.color}`}
        >
          {quality.label}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <AQICard title="PM2.5" value={data.components.pm2_5} />
        <AQICard title="PM10" value={data.components.pm10} />
        <AQICard title="CO" value={data.components.co} />
        <AQICard title="NO₂" value={data.components.no2} />
        <AQICard title="O₃" value={data.components.o3} />
      </div>
    </motion.section>
  );
};

const AQICard = ({ title, value }) => {
  return (
    <div className="rounded-2xl bg-white/5 p-5 text-center">
      <Wind className="mx-auto mb-3 text-sky-400" />

      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {value}
      </h3>
    </div>
  );
};

export default AirQuality;