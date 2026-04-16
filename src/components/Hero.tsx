"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-brand-hero via-brand-hero to-brand-hero/80 flex flex-col items-center justify-center text-center px-6 pt-24 pb-48 overflow-hidden">
      {/* Large watermark text behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.04] tracking-tighter whitespace-nowrap">
          BIOFUSION
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-white/70 text-sm tracking-wide">Join</span>
          <span className="text-white font-bold text-sm">500,000+</span>
          <span className="text-white/70 text-sm tracking-wide">
            BioFusion patients
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
          Healthcare,
          <br />
          <span className="font-accent italic text-brand-light">redefined</span>{" "}
          for real life.
        </h1>

        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We provide medical care online—simple, direct, and led by licensed
          providers. No waiting rooms. No unnecessary steps. Just care that
          works.
        </p>
      </motion.div>
    </section>
  );
}
