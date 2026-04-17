"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-hero-gradient pt-32 pb-64 px-6 overflow-hidden">
      {/* Massive subtle BIOFUSION watermark behind */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none">
        <span
          className="font-bold text-white/[0.05] whitespace-nowrap leading-none"
          style={{
            fontSize: "clamp(180px, 22vw, 380px)",
            letterSpacing: "-0.04em",
          }}
        >
          BIOFUSION
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Patient counter pill */}
        <div className="flex items-center justify-center gap-1.5 mb-6 text-sm">
          <span className="text-white/60">Join</span>
          <span className="text-white font-semibold">500,000+</span>
          <span className="text-white/60">BioFusion patients</span>
        </div>

        {/* Headline - 2 lines, 70px on desktop matching MEDVi */}
        <h1
          className="text-white font-semibold leading-[1.05] mb-7"
          style={{
            fontSize: "clamp(40px, 5.5vw, 72px)",
            letterSpacing: "-0.025em",
          }}
        >
          Healthcare,
          <br />
          <span className="font-italic-accent text-brand-soft">redefined</span>{" "}
          for real life.
        </h1>

        <p className="text-white/70 text-base md:text-[17px] max-w-xl mx-auto leading-relaxed mb-9">
          We provide medical care online—simple, direct, and led by licensed
          providers. No waiting rooms. No unnecessary steps. Just care that
          works.
        </p>

        <Link
          href="/get-started/weight-loss"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand text-white text-[14px] font-semibold hover:brightness-110 hover:shadow-2xl hover:shadow-brand/30 transition-all"
        >
          Start your assessment
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
