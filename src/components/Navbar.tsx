'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white w-full z-50 top-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
          <span className="text-2xl font-extrabold text-black">Elijah Dmytrenko</span>
          <span className="ml-2 text-sm text-gray-500 font-medium tracking-wide">/ QUANTITATIVE DEVELOPER</span>
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
          <Link
            href="/hobbies"
            className={`uppercase text-sm font-medium tracking-wide transition-colors ${pathname === '/hobbies' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
          >
            Hobbies
          </Link>
          <a
            href="#contact"
            className="uppercase text-sm font-medium tracking-wide text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>
        {/* Mobile menu button (optional, can be styled later) */}
      </div>
    </nav>
  );
} 