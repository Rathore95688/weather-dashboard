import { CloudSun } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;