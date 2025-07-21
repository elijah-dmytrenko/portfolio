'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white w-full z-50 top-0 fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-blue-600 mr-2"></span>
          <Link href="/" className="text-xl lg:text-2xl font-extrabold text-black hover:text-blue-600 transition-colors">
            Elijah Dmytrenko
          </Link>
          <span className="hidden sm:inline ml-2 text-sm text-gray-500 font-medium tracking-wide">/ QUANTITATIVE DEVELOPER</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/about"
            className={`uppercase text-sm font-medium tracking-wide transition-colors ${pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`uppercase text-sm font-medium tracking-wide transition-colors ${pathname === '/projects' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
          >
            Projects
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t border-gray-200">
          <Link
            href="/about"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/projects' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
} 