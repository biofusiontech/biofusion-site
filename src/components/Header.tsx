"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Weight Loss", href: "#weight-loss" },
  { label: "Peptides & Longevity", href: "#peptides" },
  { label: "Men's Health", href: "#mens-health" },
  { label: "Women's Health", href: "#womens-health" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-hero/95 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="shrink-0"
          >
            <circle cx="18" cy="18" r="6" fill="#4FB2E4" />
            <circle cx="10" cy="10" r="4" fill="#4FB2E4" opacity="0.7" />
            <circle cx="26" cy="10" r="4" fill="#4FB2E4" opacity="0.7" />
            <circle cx="10" cy="26" r="4" fill="#4FB2E4" opacity="0.7" />
            <circle cx="26" cy="26" r="4" fill="#4FB2E4" opacity="0.7" />
            <line x1="14" y1="14" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="2" opacity="0.5" />
            <line x1="22" y1="14" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="2" opacity="0.5" />
            <line x1="14" y1="22" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="2" opacity="0.5" />
            <line x1="22" y1="22" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="2" opacity="0.5" />
          </svg>
          <span className="text-white text-xl font-bold tracking-tight">
            BioFusion
          </span>
        </Link>

        {/* Desktop nav - hidden, uses hamburger like MEDVi */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-8 h-6 flex flex-col justify-between items-end group cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "w-8 rotate-45 translate-y-[11px]" : "w-8"
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0 w-6" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "w-8 -rotate-45 -translate-y-[11px]" : "w-4"
            }`}
          />
        </button>
      </div>

      {/* Slide-down menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-brand-hero/98 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-8">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white text-lg font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
