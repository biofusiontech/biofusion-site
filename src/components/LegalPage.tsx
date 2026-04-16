"use client";

import Link from "next/link";

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-brand-hero py-6 px-6">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="6" fill="#4FB2E4" />
              <circle cx="10" cy="10" r="4" fill="#4FB2E4" opacity="0.7" />
              <circle cx="26" cy="10" r="4" fill="#4FB2E4" opacity="0.7" />
              <circle cx="10" cy="26" r="4" fill="#4FB2E4" opacity="0.7" />
              <circle cx="26" cy="26" r="4" fill="#4FB2E4" opacity="0.7" />
              <line x1="14" y1="14" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="2" opacity="0.5" />
              <line x1="22" y1="14" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="2" opacity="0.5" />
              <line x1="14" y1="22" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="2" opacity="0.5" />
              <line x1="22" y1="22" x2="18" y2="18" stroke="#4FB2E4" strokeWidth="2" opacity="0.5" />
            </svg>
            <span className="text-white font-bold text-lg">BioFusion</span>
          </Link>
          <Link href="/" className="text-white/70 hover:text-white text-sm transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[900px] mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        {lastUpdated && (
          <p className="text-sm text-muted mb-8">Last updated: {lastUpdated}</p>
        )}
        <div className="prose prose-sm max-w-none text-dark-soft leading-relaxed space-y-4">
          {children}
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-gray-100 py-8 px-6 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} BioFusion. All rights reserved.
      </footer>
    </div>
  );
}
