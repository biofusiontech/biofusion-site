"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Weight Loss",
    href: "#weight-loss",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=420&h=320&fit=crop",
    bg: "bg-[#F2F8F4]",
  },
  {
    title: "Peptides & Longevity",
    href: "#peptides",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=420&h=320&fit=crop",
    bg: "bg-[#F1F8FD]",
  },
  {
    title: "Men's Health",
    href: "#mens-health",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=420&h=320&fit=crop",
    bg: "bg-[#FBF6EE]",
  },
  {
    title: "Women's Health",
    href: "#womens-health",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=420&h=320&fit=crop",
    bg: "bg-[#FBF0F2]",
  },
];

export default function CategoryCards() {
  return (
    <section className="relative -mt-44 z-30 px-6 mb-32">
      <div className="max-w-[1080px] mx-auto">
        <div className="bg-white rounded-[28px] shadow-[0_30px_80px_-20px_rgba(15,58,95,0.25)] p-3.5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`group rounded-[20px] overflow-hidden ${cat.bg} hover:shadow-md transition-shadow`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <div className="px-4 py-3.5 flex items-center justify-between">
                <span className="text-[13.5px] font-medium text-ink">
                  {cat.title}
                </span>
                <ArrowIcon />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-ink/40 group-hover:text-brand transition-colors">
      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
