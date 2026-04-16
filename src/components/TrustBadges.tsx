"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const badges = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#4FB2E4" strokeWidth="2" />
        <path d="M13 20l4 4 10-10" stroke="#4FB2E4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "BioFusion guarantee",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="12" width="28" height="18" rx="3" stroke="#4FB2E4" strokeWidth="2" />
        <path d="M6 18h28" stroke="#4FB2E4" strokeWidth="2" />
        <circle cx="30" cy="10" r="4" fill="#4FB2E4" opacity="0.3" />
      </svg>
    ),
    label: "Free, expedited delivery",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6c-7.7 0-14 6.3-14 14s14 14 14 14 14-6.3 14-14S27.7 6 20 6z" stroke="#4FB2E4" strokeWidth="2" />
        <circle cx="20" cy="20" r="4" fill="#4FB2E4" />
      </svg>
    ),
    label: "Doctor-led plans & coaching",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#4FB2E4" strokeWidth="2" />
        <path d="M15 20h10M20 15v10" stroke="#4FB2E4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: "No hidden fees",
  },
];

export default function TrustBadges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 bg-white px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {badges.map((b, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3">
            {b.icon}
            <span className="text-sm font-medium text-dark-soft">
              {b.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
