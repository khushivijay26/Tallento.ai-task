import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSearch,
  faBell,
  faPlus,
  faUserCircle,
  faBars,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-28 sm:h-10 sm:w-32">
              <Image
                src={darkMode ? "/images/tallento-white.webp" : "/images/tallentoBlack.webp"}
                alt="Tallento.ai"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-orange-400 transition cursor-pointer">
              <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
              <span>Job Category</span>
            </li>
            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-orange-400 transition cursor-pointer">
              <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
              <span>Find Jobs</span>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <FontAwesomeIcon
                icon={faBell}
                className="w-4 h-4 text-slate-600 dark:text-slate-300"
              />
              <span className="absolute -top-1 -right-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white">
                29
              </span>
            </button>

            <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="w-5 h-5 text-slate-500 dark:text-slate-300"
              />
            </div>

            <button
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="w-5 h-5 text-slate-600 dark:text-slate-300"
              />
            </button>

            <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white text-sm font-medium hover:opacity-90 transition">
              <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
              <span>Post a Job</span>
            </button>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="w-5 h-5 text-slate-600 dark:text-slate-300"
              />
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden mt-3 bg-white dark:bg-slate-900 border rounded-lg shadow-sm">
            <ul className="flex flex-col divide-y dark:divide-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
                <span>Job Category</span>
              </li>
              <li className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
                <span>Find Jobs</span>
              </li>
              <li className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                <FontAwesomeIcon icon={faUserCircle} className="w-4 h-4" />
                <span>Profile</span>
              </li>
              <li className="px-4 py-2">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white text-sm font-medium hover:opacity-90 transition">
                  <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                  <span>Post a Job</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
