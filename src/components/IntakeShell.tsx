"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BioFusionMark } from "./Header";

export interface Step {
  key: string;
  label: string;
  title: string;
  subtitle?: string;
  heroImage?: string;
  render: (
    data: Record<string, any>,
    update: (k: string, v: any) => void
  ) => ReactNode;
  validate?: (data: Record<string, any>) => string | null;
}

interface IntakeShellProps {
  programId: "weight-loss" | "mens-health" | "meals";
  programLabel: string;
  steps: Step[];
  ctaFinalLabel?: string;
  brandColor?: string;
}

export default function IntakeShell({
  programId,
  programLabel,
  steps,
  ctaFinalLabel = "Submit & Qualify",
  brandColor = "#4FB2E4",
}: IntakeShellProps) {
  const router = useRouter();
  const [stepIdx, setStepIdx] = useState(0);
  const [data, setData] = useState<Record<string, any>>({});
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const step = steps[stepIdx];

  const update = (k: string, v: any) => {
    setData((d) => ({ ...d, [k]: v }));
    setError(null);
  };

  const next = async () => {
    if (step.validate) {
      const err = step.validate(data);
      if (err) {
        setError(err);
        return;
      }
    }
    if (stepIdx < steps.length - 1) {
      setStepIdx(stepIdx + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Final step - submit to API
      setSubmitting(true);
      try {
        const res = await fetch("/api/leads/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            program: programId,
            programLabel,
            answers: data,
            timestamp: new Date().toISOString(),
            url: typeof window !== "undefined" ? window.location.href : "",
            referrer: typeof document !== "undefined" ? document.referrer : "",
          }),
        });
        if (!res.ok) throw new Error("Submission failed");
        router.push(`/get-started/thank-you?program=${programId}`);
      } catch (e) {
        setError("Something went wrong. Please try again.");
        setSubmitting(false);
      }
    }
  };

  const back = () => {
    if (stepIdx > 0) {
      setStepIdx(stepIdx - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      {/* Top bar with progress */}
      <header className="bg-white border-b border-[#EEF1F5] sticky top-0 z-50">
        <div className="max-w-[760px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BioFusionMark size={24} />
            <span className="font-semibold text-ink">BioFusion</span>
          </Link>
          <div className="flex items-center gap-1.5 text-[12px] text-ink-muted">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#22C55E">
              <path d="M7 0l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 9.27l-3.52 1.58.67-3.93L1.3 6.92l3.94-.57L7 0z" />
            </svg>
            <span className="font-semibold">4.8</span>
            <span>Excellent · 2,400+ reviews</span>
          </div>
        </div>

        {/* Step progress */}
        <div className="border-t border-[#EEF1F5]">
          <div className="max-w-[760px] mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => (
                <div key={s.key} className="flex items-center flex-1 last:flex-none">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold transition-all"
                      style={{
                        background: i <= stepIdx ? brandColor : "#E5EAF0",
                        color: i <= stepIdx ? "white" : "#9CA3AF",
                      }}
                    >
                      {i < stepIdx ? "✓" : i + 1}
                    </div>
                    <span
                      className={`text-[13px] font-medium ${
                        i <= stepIdx ? "text-ink" : "text-ink-mute2"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-[2px] mx-3 rounded-full bg-[#E5EAF0] overflow-hidden">
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: i < stepIdx ? "100%" : "0%",
                          background: brandColor,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-[680px] mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {step.heroImage && (
              <div className="rounded-[20px] overflow-hidden aspect-[16/9] mb-8 relative">
                <img
                  src={step.heroImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-5">
                  <BioFusionMark size={32} />
                </div>
              </div>
            )}

            <h1 className="text-[32px] md:text-[38px] font-semibold leading-tight tracking-tight mb-3">
              {step.title}
            </h1>
            {step.subtitle && (
              <p className="text-ink-muted text-[15px] mb-10 leading-relaxed">
                {step.subtitle}
              </p>
            )}

            <div className="space-y-8">{step.render(data, update)}</div>

            {error && (
              <div className="mt-6 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="mt-10 flex items-center justify-between gap-3">
              {stepIdx > 0 ? (
                <button
                  onClick={back}
                  type="button"
                  className="px-5 py-3 text-[14px] font-medium text-ink-muted hover:text-ink transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <span />
              )}

              <button
                onClick={next}
                disabled={submitting}
                type="button"
                className="px-8 py-3.5 rounded-full text-white font-semibold text-[14px] transition-all hover:brightness-110 hover:shadow-lg disabled:opacity-50"
                style={{ background: brandColor }}
              >
                {submitting
                  ? "Submitting..."
                  : stepIdx === steps.length - 1
                  ? ctaFinalLabel
                  : "Continue →"}
              </button>
            </div>

            {/* Trust strip */}
            <div className="mt-12 pt-8 border-t border-[#EEF1F5] grid grid-cols-3 gap-3 text-[11px] text-ink-mute2 text-center">
              <div className="flex flex-col items-center gap-1.5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2l6 2.5v4c0 3.5-2.4 6.4-6 7-3.6-.6-6-3.5-6-7v-4L9 2z"
                    stroke="#9CA3AF"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M6 9l2 2 4-4"
                    stroke="#9CA3AF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                HIPAA-compliant
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="6" stroke="#9CA3AF" strokeWidth="1.2" />
                  <path d="M9 6v3l2 1" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Takes 3 minutes
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 7c0-2 2-4 4-4h4c2 0 4 2 4 4v6c0 1-1 2-2 2H5c-1 0-2-1-2-2V7z"
                    stroke="#9CA3AF"
                    strokeWidth="1.2"
                  />
                  <path d="M6 9.5h6M6 12h4" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                No commitment
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/* ====================================================================
   Reusable form field components
   ==================================================================== */

export function Field({
  label,
  children,
  helper,
}: {
  label: string;
  children: ReactNode;
  helper?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-[15px] font-semibold text-ink">
        {label}
      </label>
      {children}
      {helper && <p className="text-[12px] text-ink-mute2">{helper}</p>}
    </div>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3.5 rounded-xl border border-[#E5EAF0] focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-[15px] bg-white transition-colors"
    />
  );
}

export function NumberInput({
  value,
  onChange,
  placeholder,
  suffix,
}: {
  value: string | number;
  onChange: (v: string) => void;
  placeholder?: string;
  suffix?: string;
}) {
  return (
    <div className="relative">
      <input
        type="number"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 pr-14 rounded-xl border border-[#E5EAF0] focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-[15px] bg-white transition-colors"
      />
      {suffix && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted text-[14px]">
          {suffix}
        </span>
      )}
    </div>
  );
}

export function ChoicePills({
  value,
  onChange,
  options,
  cols = 2,
}: {
  value: string | null;
  onChange: (v: string) => void;
  options: { label: string; value: string; description?: string }[];
  cols?: 2 | 3 | 4;
}) {
  const colsClass = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }[cols];
  return (
    <div className={`grid ${colsClass} gap-2.5`}>
      {options.map((o) => {
        const active = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`p-3.5 rounded-xl text-left transition-all border-2 ${
              active
                ? "border-brand bg-brand/5"
                : "border-[#E5EAF0] hover:border-[#CBD5E1] bg-white"
            }`}
          >
            <span
              className={`text-[14px] font-medium block ${
                active ? "text-brand" : "text-ink"
              }`}
            >
              {o.label}
            </span>
            {o.description && (
              <span className="text-[12px] text-ink-muted mt-0.5 block">
                {o.description}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function ChoiceList({
  value,
  onChange,
  options,
  multi = false,
}: {
  value: string | string[] | null;
  onChange: (v: string | string[]) => void;
  options: { label: string; value: string }[];
  multi?: boolean;
}) {
  const isSelected = (v: string) =>
    multi ? Array.isArray(value) && value.includes(v) : value === v;
  const toggle = (v: string) => {
    if (multi) {
      const arr = Array.isArray(value) ? [...value] : [];
      if (arr.includes(v)) onChange(arr.filter((x) => x !== v));
      else onChange([...arr, v]);
    } else {
      onChange(v);
    }
  };
  return (
    <div className="space-y-2.5">
      {options.map((o) => {
        const active = isSelected(o.value);
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => toggle(o.value)}
            className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all border-2 ${
              active
                ? "border-brand bg-brand/5"
                : "border-[#E5EAF0] hover:border-[#CBD5E1] bg-white"
            }`}
          >
            <span
              className={`text-[15px] font-medium ${
                active ? "text-brand" : "text-ink"
              }`}
            >
              {o.label}
            </span>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                active ? "border-brand bg-brand" : "border-[#CBD5E1]"
              }`}
            >
              {active && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5L4 7L8 3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
