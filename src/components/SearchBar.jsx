import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity) return;

    onSearch(trimmedCity);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 flex flex-col gap-4 sm:flex-row"
    >
      <div className="relative flex-1">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-12 pr-4 text-white placeholder:text-slate-400 backdrop-blur-xl outline-none transition focus:border-sky-500"
        />
      </div>

      <button
        type="submit"
        className="rounded-2xl bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;