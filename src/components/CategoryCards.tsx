"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Weight Loss",
    href: "#weight-loss",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
    bg: "bg-white",
  },
  {
    title: "Peptides & Longevity",
    href: "#peptides",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    bg: "bg-white",
  },
  {
    title: "Men's Health",
    href: "#mens-health",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    bg: "bg-[#F5F0EB]",
  },
  {
    title: "Women's Health",
    href: "#womens-health",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    bg: "bg-[#F8EFF0]",
  },
];

export default function CategoryCards() {
  return (
    <section className="relative -mt-40 z-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-3 grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-2xl overflow-hidden ${cat.bg} transition-shadow hover:shadow-lg`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-dark">
                  {cat.title}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-dark/40 group-hover:text-brand transition-colors"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
