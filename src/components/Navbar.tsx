"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white w-full z-50 top-0 fixed dark:bg-gray-500/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 text-shadow-xs">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-blue-600 mr-2"></span>
          <Link
            href="/"
            className="text-xl lg:text-2xl font-extrabold text-black hover:text-blue-600 transition-colors dark:text-gray-200"
          >
            Elijah Dmytrenko
          </Link>
          <span className="hidden sm:inline ml-2 text-sm text-gray-500 font-medium tracking-wide dark:text-gray-300">
            / QUANTITATIVE DEVELOPER
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/about"
            className={`uppercase text-sm font-medium tracking-wide transition-colors ${
              pathname === "/about" ? "text-blue-600" : "text-gray-700 hover:text-blue-600 dark:text-gray-300"
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`uppercase text-sm font-medium tracking-wide transition-colors ${
              pathname === "/projects" ? "text-blue-600" : "text-gray-700 hover:text-blue-600 dark:text-gray-300"
            }`}
          >
            Projects
          </Link>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t border-gray-200">
          <Link
            href="/about"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              pathname === "/about" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              pathname === "/projects"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
