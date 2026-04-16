"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ValueProps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-[1100px] mx-auto text-center space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-muted">
            Better is possible—and we built for it.
          </p>
          <h2
            className="font-semibold leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(34px, 3.6vw, 52px)" }}
          >
            Modern healthcare,{" "}
            <span className="font-italic-accent text-brand">
              built around you
            </span>
          </h2>
        </motion.div>

        {/* Care coaching block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#F1F8FD] rounded-[32px] p-12 md:p-16 max-w-3xl mx-auto"
        >
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand mb-5">
            With you from start to success
          </p>
          <h3 className="text-[24px] md:text-[30px] font-semibold leading-tight mb-5">
            Care coaching and nutrition support
          </h3>
          <p className="text-ink-muted text-[15px] leading-relaxed max-w-xl mx-auto">
            Our care coaching team, led by certified medical assistants and
            registered dietitians, helps answer questions and keeps your care on
            track. From your first consultation through ongoing support, we are
            with you at every step.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3
            className="font-semibold leading-[1.2] max-w-3xl mx-auto"
            style={{ fontSize: "clamp(22px, 2.2vw, 32px)" }}
          >
            We&apos;re creating a better healthcare experience, and the details
            matter.{" "}
            <span className="font-italic-accent text-brand">
              We&apos;re here for those details.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
