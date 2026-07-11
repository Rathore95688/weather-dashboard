export const getWeatherBackground = (weather) => {
  switch (weather?.toLowerCase()) {
    case "clear":
      return "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700";

    case "clouds":
      return "bg-gradient-to-br from-slate-500 via-slate-700 to-slate-900";

    case "rain":
    case "drizzle":
      return "bg-gradient-to-br from-slate-700 via-blue-900 to-slate-950";

    case "thunderstorm":
      return "bg-gradient-to-br from-purple-900 via-slate-900 to-black";

    case "snow":
      return "bg-gradient-to-br from-slate-100 via-blue-100 to-slate-300";

    case "mist":
    case "fog":
    case "haze":
      return "bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800";

    default:
      return "bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950";
  }
};