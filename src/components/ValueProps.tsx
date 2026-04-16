"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ValueProps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-[1100px] mx-auto text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Better is possible—and we built for it.
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mt-4">
            Modern healthcare,{" "}
            <span className="text-brand font-accent italic">
              built around you
            </span>
          </h3>
        </motion.div>

        {/* Stats / trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-brand-bg/40 rounded-3xl p-8 md:p-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand mb-6">
            With you from start to success
          </p>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Care coaching and nutrition support
          </h3>
          <p className="text-muted text-sm max-w-2xl mx-auto leading-relaxed">
            Our care coaching team, led by certified medical assistants and
            registered dietitians, helps answer questions and keeps your care on
            track. From your first consultation through ongoing support, we are
            with you at every step.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl font-bold leading-snug max-w-3xl mx-auto">
            We&apos;re creating a better healthcare experience, and the details
            matter.{" "}
            <span className="text-brand font-accent italic">
              We&apos;re here for those details.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
