import { motion } from "framer-motion";

const ForecastCard = ({ item }) => {
  const date = new Date(item.dt * 1000);

  const day = date.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const icon = item.weather[0].icon;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        min-w-[160px]
        rounded-3xl
        border
        border-white/10
        bg-white/10
        p-5
        text-center
        backdrop-blur-xl
      "
    >
      <h3 className="text-lg font-semibold text-white">
        {day}
      </h3>

      <img
        src={iconUrl}
        alt="Weather"
        className="mx-auto h-20 w-20"
      />

      <p className="text-3xl font-bold text-white">
        {Math.round(item.main.temp)}°
      </p>

      <p className="mt-2 capitalize text-slate-300">
        {item.weather[0].description}
      </p>
    </motion.div>
  );
};

export default ForecastCard;