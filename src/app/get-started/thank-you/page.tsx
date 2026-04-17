"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { BioFusionMark } from "@/components/Header";

const programCopy: Record<string, { title: string; sub: string; bookText: string }> = {
  "weight-loss": {
    title: "You're qualified for review!",
    sub: "A licensed provider will review your information and reach out within 24 hours with a personalized GLP-1 plan.",
    bookText: "Optional: book a same-day call with our care team",
  },
  "mens-health": {
    title: "We've got your information!",
    sub: "A licensed provider will review your answers and contact you within 24 hours with a personalized recommendation.",
    bookText: "Optional: book a same-day consultation",
  },
  meals: {
    title: "You're on the list!",
    sub: "We'll verify delivery in your area and send your weekly menu within 24 hours.",
    bookText: "Optional: book a quick call to customize your plan",
  },
};

function ThankYouContent() {
  const params = useSearchParams();
  const program = params.get("program") || "weight-loss";
  const copy = programCopy[program] || programCopy["weight-loss"];

  return (
    <div className="min-h-screen bg-[#FAFBFD] flex flex-col">
      <header className="bg-white border-b border-[#EEF1F5]">
        <div className="max-w-[680px] mx-auto px-6 py-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <BioFusionMark size={24} />
            <span className="font-semibold text-ink">BioFusion</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[560px] text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
            className="w-16 h-16 mx-auto mb-8 rounded-full bg-brand/10 flex items-center justify-center"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 16l5 5L24 10"
                stroke="#4FB2E4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <h1 className="text-[32px] md:text-[40px] font-semibold leading-tight tracking-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-ink-muted text-[16px] leading-relaxed mb-10">
            {copy.sub}
          </p>

          <div className="bg-white rounded-[20px] border border-[#EEF1F5] p-6 mb-6 text-left">
            <h3 className="font-semibold text-[15px] mb-4">What happens next:</h3>
            <ol className="space-y-3 text-[14px] text-ink-soft">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand/10 text-brand text-[12px] font-semibold flex items-center justify-center shrink-0">
                  1
                </span>
                <span>You'll receive a confirmation email shortly.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand/10 text-brand text-[12px] font-semibold flex items-center justify-center shrink-0">
                  2
                </span>
                <span>A licensed provider reviews your answers (within 24 hrs).</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand/10 text-brand text-[12px] font-semibold flex items-center justify-center shrink-0">
                  3
                </span>
                <span>We reach out by phone or text with your personalized plan.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand/10 text-brand text-[12px] font-semibold flex items-center justify-center shrink-0">
                  4
                </span>
                <span>If approved, your medication ships in 1–3 days.</span>
              </li>
            </ol>
          </div>

          <p className="text-[13px] text-ink-muted mb-4">{copy.bookText}</p>
          <a
            href="https://calendly.com/biofusion-care"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand text-white font-semibold text-[14px] hover:brightness-110 transition-all"
          >
            Book a 15-min call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="mt-12 text-[12px] text-ink-mute2">
            Questions? Email{" "}
            <a href="mailto:support@biofusion.co" className="text-brand hover:underline">
              support@biofusion.co
            </a>{" "}
            or call (833) 246-3874
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFBFD]" />}>
      <ThankYouContent />
    </Suspense>
  );
}
