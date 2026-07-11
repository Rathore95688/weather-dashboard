import { motion } from "framer-motion";

const ForecastCard = ({ day }) => {
  const date = new Date(day.dt_txt);

  const dayName = date.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="
        rounded-3xl
        border
        border-slate-700/70
        bg-slate-900/85
        p-6
        text-center
        shadow-xl
      "
    >
      <p className="text-lg font-semibold text-white">
        {dayName}
      </p>

      <img
        src={icon}
        alt={day.weather[0].description}
        className="mx-auto my-4 h-20 w-20"
      />

      <h3 className="text-2xl font-bold text-white">
        {Math.round(day.main.temp)}°
      </h3>

      <p className="mt-2 capitalize text-slate-400">
        {day.weather[0].description}
      </p>

      <div className="mt-5 flex justify-between text-sm text-slate-400">
        <span>
          Min {Math.round(day.main.temp_min)}°
        </span>

        <span>
          Max {Math.round(day.main.temp_max)}°
        </span>
      </div>
    </motion.div>
  );
};

export default ForecastCard;