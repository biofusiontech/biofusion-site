"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProductSectionProps {
  id: string;
  badge: string;
  headingMain: string;
  headingAccent: string;
  headingTail: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  comingSoon?: boolean;
  features: string[];
  featureTitle: string;
  productImage: string;
  productBg: string;
  lifestyleImage1: string;
  lifestyleImage2: string;
  tintClass?: string;
  accentColor?: string;
  accentCheckBg?: string;
  reversed?: boolean;
}

function Check({ bg = "#4FB2E4" }: { bg?: string }) {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0"
      style={{ background: `${bg}18` }}
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path
          d="M2 5.5L4.5 8L9 2.5"
          stroke={bg}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function ProductSection({
  id,
  badge,
  headingMain,
  headingAccent,
  headingTail,
  subheading,
  description,
  ctaText,
  ctaHref,
  comingSoon,
  features,
  featureTitle,
  productImage,
  productBg,
  lifestyleImage1,
  lifestyleImage2,
  tintClass = "",
  accentColor = "#4FB2E4",
  accentCheckBg = "#4FB2E4",
  reversed = false,
}: ProductSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id={id}
      className={`relative py-28 md:py-40 px-6 ${tintClass}`}
    >
      <div
        className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-start"
        ref={ref}
      >
        {/* Left column: product image + feature list (or reversed) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`space-y-10 ${reversed ? "lg:order-2" : ""}`}
        >
          <div
            className="rounded-[32px] overflow-hidden aspect-[5/4] relative"
            style={{ background: productBg }}
          >
            <img
              src={productImage}
              alt=""
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-muted mb-5">
              {featureTitle}
            </p>
            <ul className="space-y-3.5">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check bg={accentCheckBg} />
                  <span className="text-[14.5px] text-ink-soft">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right column: heading, photos, description, CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className={`space-y-10 ${reversed ? "lg:order-1" : ""}`}
        >
          <div>
            <p
              className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: accentColor }}
            >
              {badge}
            </p>
            <h2
              className="font-semibold text-ink leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(34px, 3.6vw, 52px)" }}
            >
              {headingMain}{" "}
              <span
                className="font-italic-accent"
                style={{ color: accentColor }}
              >
                {headingAccent}
              </span>{" "}
              {headingTail}
            </h2>
          </div>

          {/* Two vertical lifestyle photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[24px] overflow-hidden aspect-[3/4]">
              <img
                src={lifestyleImage1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-[3/4]">
              <img
                src={lifestyleImage2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            <h3
              className="font-semibold text-ink leading-[1.2]"
              style={{ fontSize: "clamp(22px, 2.1vw, 30px)" }}
            >
              {subheading}
            </h3>
            <p className="text-ink-muted text-[15px] leading-relaxed max-w-lg">
              {description}
            </p>
            {comingSoon ? (
              <span
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[13px] font-medium text-white/85"
                style={{ background: `${accentColor}88` }}
              >
                {ctaText}
              </span>
            ) : (
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[13px] font-medium text-white transition-all hover:brightness-110 hover:shadow-lg"
                style={{ background: accentColor }}
              >
                {ctaText}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6h7M9.5 6L6 2.5M9.5 6L6 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
