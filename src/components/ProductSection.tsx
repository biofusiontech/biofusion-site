"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Feature {
  icon?: string;
  text: string;
}

interface ProductSectionProps {
  id: string;
  badge: string;
  heading: string;
  headingAccent?: string;
  headingRest?: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  features: Feature[];
  featureTitle: string;
  productImage: string;
  lifestyleImage1: string;
  lifestyleImage2: string;
  bgColor?: string;
  accentColor?: string;
  reversed?: boolean;
}

function CheckIcon({ color = "#4FB2E4" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill={color} opacity="0.15" />
      <path
        d="M6 10L9 13L14 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductSection({
  id,
  badge,
  heading,
  headingAccent,
  headingRest,
  subheading,
  description,
  ctaText,
  ctaHref,
  features,
  featureTitle,
  productImage,
  lifestyleImage1,
  lifestyleImage2,
  bgColor = "bg-white",
  accentColor = "#4FB2E4",
  reversed = false,
}: ProductSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className={`${bgColor} py-24 px-6 overflow-hidden`}>
      <div className="max-w-[1100px] mx-auto" ref={ref}>
        {/* Top row: Product image + lifestyle images + text */}
        <div
          className={`flex flex-col lg:flex-row gap-12 items-start ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Left: Product image + features */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex-1 space-y-8"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-[4/3]">
              <img
                src={productImage}
                alt={heading}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Feature list */}
            <div>
              <p className="text-sm font-medium text-muted mb-4">
                {featureTitle}
              </p>
              <div className="space-y-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckIcon color={accentColor} />
                    <span className="text-sm text-dark-soft">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Badge + heading + description + CTA + images */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: accentColor }}
            >
              {badge}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {heading}{" "}
              {headingAccent && (
                <span className="font-accent italic" style={{ color: accentColor }}>
                  {headingAccent}
                </span>
              )}
              {headingRest && <> {headingRest}</>}
            </h2>

            {/* Two lifestyle images side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={lifestyleImage1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={lifestyleImage2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold">{subheading}</h3>

            <p className="text-muted text-sm leading-relaxed">{description}</p>

            {ctaHref ? (
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                {ctaText}
              </a>
            ) : (
              <button
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white/90 text-sm font-semibold cursor-default"
                style={{ backgroundColor: `${accentColor}60` }}
                disabled
              >
                {ctaText}
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
