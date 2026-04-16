"use client";

import Link from "next/link";
import { BioFusionMark } from "./Header";

const pharmacyPartners = [
  { name: "RedRock Pharmacy", url: "https://www.redrockhomepharmacy.com/", address: "1240 E 100 S #220, St. George, UT 84790", phone: "801-433-9500" },
  { name: "Health Warehouse", url: "https://www.healthwarehouse.com", address: "7107 Industrial Rd. Florence, KY 41042", phone: "800-748-7001" },
  { name: "Precision Medicine", url: "http://precisionmeds.com/", address: "2657 Merrick Road Bellmore, NY 11710", phone: "516-833-6262" },
  { name: "Triad Rx", url: "https://www.triadrx.us", address: "26258 Pollard Road, Daphne, AL 36526", phone: "251-380-7630" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Privacy Practices", href: "/notice-of-privacy-practices" },
  { label: "Refund Policy", href: "/cancellation-and-refund-policy" },
  { label: "Medical Consent", href: "/medical-consent" },
  { label: "For California Residents", href: "/privacy-statement-california" },
  { label: "Bill of Rights", href: "/bill-of-rights" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1200px] mx-auto px-8 pt-20 pb-12">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-[#EEF1F5]">
          <Link href="/" className="flex items-center gap-2.5">
            <BioFusionMark size={26} />
            <span className="text-ink font-semibold text-lg">BioFusion</span>
          </Link>
          <div className="flex flex-col sm:flex-row gap-x-8 gap-y-3 text-[13.5px] text-ink-muted">
            <a href="mailto:support@biofusion.co" className="flex items-center gap-2 hover:text-ink transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1.5" y="2.5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1.5 4.5l5.5 3.5L12.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
              support@biofusion.co
            </a>
            <a href="tel:8332463874" className="flex items-center gap-2 hover:text-ink transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 1.5h2.5l1.3 3-1.7 1.3a8 8 0 003.6 3.6l1.3-1.7 3 1.3v2.5h-1A11 11 0 012.5 2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
              (833) 246-3874
            </a>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5C4.8 1.5 3 3.5 3 5.4c0 3.6 4 7.1 4 7.1s4-3.5 4-7.1c0-1.9-1.8-3.9-4-3.9z" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="7" cy="5.4" r="1.3" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              Houston, TX
            </span>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="space-y-3.5 text-[11px] text-ink-mute2 leading-relaxed py-12 max-w-4xl">
          <p>
            *The assessment made available on the BioFusion website does not
            create a doctor-patient relationship between you and BioFusion
            providers. Results may vary based on individual health conditions and
            compliance with treatment plans.
          </p>
          <p>
            We are partnered with multiple USA certified pharmacies to bring the
            best product and overall experience to you.{" "}
            <span className="font-semibold text-ink-muted">Pharmacy Providers</span>
          </p>
          <p>
            Results vary based on starting weight and program adherence. Inches
            lost from hips, waist, chest, thighs, and other areas will differ
            between individuals.
          </p>
          <p>
            Certain materials on this website, including text, images, and other
            media, may be generated or enhanced using artificial intelligence
            tools.
          </p>
          <p>
            Testimonials on the website are from BioFusion patients. For patient
            privacy, images representing those patients may not reflect the
            actual patient.
          </p>
        </div>

        {/* Pharmacy partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#EEF1F5]">
          {pharmacyPartners.map((p) => (
            <div key={p.name} className="space-y-1.5">
              <h4 className="font-semibold text-[13.5px] text-ink">{p.name}</h4>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[12px] text-brand hover:underline block truncate">
                {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
              <p className="text-[12px] text-ink-muted">{p.address}</p>
              <p className="text-[12px] text-ink-muted">{p.phone}</p>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-ink-mute2">
            &copy; {new Date().getFullYear()} BioFusion. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[12px] text-ink-muted hover:text-ink transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
