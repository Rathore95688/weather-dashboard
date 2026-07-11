import { Clock3, MapPin } from "lucide-react";

const RecentSearches = ({
  searches,
  onSelect,
  onClear,
}) => {
  if (searches.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock3 className="text-sky-400" size={22} />

          <h2 className="text-2xl font-bold text-white">
            Recent Searches
          </h2>
        </div>

        <button
          onClick={onClear}
          className="text-sm text-red-400 hover:text-red-300"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {searches.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-700
              bg-slate-900/80
              px-5
              py-2.5
              text-white
              transition
              hover:border-sky-500
              hover:bg-slate-800
            "
          >
            <MapPin size={16} />
            {city}
          </button>
        ))}
      </div>
    </section>
  );
};

export default RecentSearches;