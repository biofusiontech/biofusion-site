"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const badges = [
  {
    label: "BioFusion guarantee",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4l10 4v8c0 6-4 10-10 12-6-2-10-6-10-12V8l10-4z"
          stroke="#4FB2E4"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M11 16l3.5 3.5L21 13"
          stroke="#4FB2E4"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Free, expedited delivery",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="11" width="17" height="11" rx="2" stroke="#4FB2E4" strokeWidth="1.6" />
        <path d="M20 14h5l4 4v4h-9z" stroke="#4FB2E4" strokeWidth="1.6" />
        <circle cx="9" cy="24" r="2.4" stroke="#4FB2E4" strokeWidth="1.6" />
        <circle cx="23" cy="24" r="2.4" stroke="#4FB2E4" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Doctor-led plans & coaching",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="5" stroke="#4FB2E4" strokeWidth="1.6" />
        <path d="M6 27c1-5 5-8 10-8s9 3 10 8" stroke="#4FB2E4" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "No hidden fees",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#4FB2E4" strokeWidth="1.6" />
        <path d="M16 10v6l4 2" stroke="#4FB2E4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-white px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10"
      >
        {badges.map((b, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            {b.icon}
            <span className="text-[13.5px] font-medium text-ink-soft leading-tight">
              {b.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
