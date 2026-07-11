import { CloudSun } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-500/20 p-2">
            <CloudSun className="h-7 w-7 text-blue-400" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              Weather Dashboard
            </h1>

            <p className="text-xs text-gray-400">
              Real-Time Weather Insights
            </p>
          </div>
        </div>

        {/* Theme Button (Temporary) */}
        <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">
          🌙
        </button>
      </div>
    </header>
  );
};

export default Navbar;