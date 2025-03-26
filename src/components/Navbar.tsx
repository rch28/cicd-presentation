"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      {(theme === "dark" || theme === "system") && (
        <button onClick={() => setTheme("light")} className="cursor-pointer">
          <Sun className="h-5 w-5" />
        </button>
      )}
      {theme === "light" && (
        <button onClick={() => setTheme("dark")} className="cursor-pointer">
          <Moon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-80 shadow-md dark:shadow-none">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold">CI</span>
          </div>
          <span className="font-semibold text-slate-900 dark:text-white">
            CI/CD Presentation
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                GitHub
              </a>
            </li>
            <ThemeChanger />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
