import { motion } from "framer-motion";
import ForecastCard from "./ForecastCard";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">
        5-Day Forecast
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {dailyForecast.slice(0, 5).map((day) => (
          <ForecastCard
            key={day.dt}
            day={day}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Forecast;