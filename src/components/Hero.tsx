"use client";

import { motion } from "framer-motion";

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

        <p className="text-white/70 text-base md:text-[17px] max-w-xl mx-auto leading-relaxed">
          We provide medical care online—simple, direct, and led by licensed
          providers. No waiting rooms. No unnecessary steps. Just care that
          works.
        </p>
      </motion.div>
    </section>
  );
}
