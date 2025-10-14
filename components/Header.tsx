'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a0b2e] via-[#1a0b2e]/80 to-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition">
              The Technology Monastery
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-300 focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link
                href="/about"
                className="text-white/90 hover:text-white transition font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-white/90 hover:text-white transition font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/get-started"
                className="text-white/90 hover:text-white transition font-medium"
              >
                Get Started
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white/90 hover:text-white transition font-medium"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition font-medium shadow-lg shadow-purple-500/50"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-black/50 backdrop-blur-md rounded-lg p-4">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="block text-white hover:text-purple-300 transition font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block text-white hover:text-purple-300 transition font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/get-started"
                  className="block text-white hover:text-purple-300 transition font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-white hover:text-purple-300 transition font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
