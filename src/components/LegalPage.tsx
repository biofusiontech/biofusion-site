"use client";

import Link from "next/link";
import { BioFusionMark } from "./Header";

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0F3A5F] py-5 px-8">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <BioFusionMark size={26} />
            <span className="text-white font-semibold text-lg">BioFusion</span>
          </Link>
          <Link href="/" className="text-white/70 hover:text-white text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-8 py-20">
        <h1 className="text-[36px] md:text-[44px] font-semibold tracking-tight mb-3">
          {title}
        </h1>
        {lastUpdated && (
          <p className="text-sm text-ink-muted mb-12">Last updated: {lastUpdated}</p>
        )}
        <div className="text-ink-soft leading-relaxed space-y-4 text-[15px]">
          {children}
        </div>
      </main>

      <footer className="border-t border-[#EEF1F5] py-8 px-8 text-center text-xs text-ink-mute2">
        &copy; {new Date().getFullYear()} BioFusion. All rights reserved.
      </footer>
    </div>
  );
}
