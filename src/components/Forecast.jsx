import ForecastCard from "./ForecastCard";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  const dailyForecast = forecast.list.filter((_, index) => index % 8 === 0);

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold text-white">
        5-Day Forecast
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-3">
        {dailyForecast.map((item) => (
          <ForecastCard
            key={item.dt}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Forecast;