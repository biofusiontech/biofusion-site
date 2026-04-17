"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Weight Loss", href: "/#weight-loss" },
  { label: "Peptides & Longevity", href: "/#peptides" },
  { label: "Men's Health", href: "/#mens-health" },
  { label: "Women's Health", href: "/#womens-health" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-[#0F3A5F]/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <BioFusionMark />
          <span className="text-white font-semibold text-lg tracking-tight">
            BioFusion
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/get-started/weight-loss"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand text-white text-[13px] font-semibold hover:brightness-110 transition-all"
          >
            Get Started
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="relative w-7 h-5 flex flex-col justify-between cursor-pointer"
          >
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 origin-left ${
              open ? "rotate-45 translate-y-[1px] w-7" : "w-7"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-opacity duration-200 ${
              open ? "opacity-0 w-5" : "w-5 ml-auto"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 origin-left ${
              open ? "-rotate-45 -translate-y-[1px] w-7" : "w-6 ml-auto"
            }`}
          />
          </button>
        </div>
      </div>

      {/* Slide-down menu */}
      <div
        className={`absolute top-full inset-x-0 bg-[#0F3A5F]/98 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-8 py-10">
          <ul className="space-y-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/75 hover:text-white text-2xl font-medium transition-colors block"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function BioFusionMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="5.5" fill="#4FB2E4" />
      <circle cx="9" cy="9" r="3.8" fill="#4FB2E4" opacity="0.75" />
      <circle cx="27" cy="9" r="3.8" fill="#4FB2E4" opacity="0.75" />
      <circle cx="9" cy="27" r="3.8" fill="#4FB2E4" opacity="0.75" />
      <circle cx="27" cy="27" r="3.8" fill="#4FB2E4" opacity="0.75" />
      <line x1="13" y1="13" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="1.5" opacity="0.55" />
      <line x1="23" y1="13" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="1.5" opacity="0.55" />
      <line x1="13" y1="23" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="1.5" opacity="0.55" />
      <line x1="23" y1="23" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="1.5" opacity="0.55" />
    </svg>
  );
}
