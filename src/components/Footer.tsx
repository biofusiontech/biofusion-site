"use client";

import Link from "next/link";

const pharmacyPartners = [
  {
    name: "RedRock Pharmacy",
    url: "https://www.redrockhomepharmacy.com/",
    address: "1240 E 100 S #220, St. George, UT 84790",
    phone: "801-433-9500",
  },
  {
    name: "Health Warehouse",
    url: "https://www.healthwarehouse.com",
    address: "7107 Industrial Rd. Florence, KY 41042",
    phone: "800-748-7001",
  },
  {
    name: "Precision Medicine",
    url: "http://precisionmeds.com/",
    address: "2657 Merrick Road Bellmore, NY 11710",
    phone: "516-833-6262",
  },
  {
    name: "Triad Rx",
    url: "https://www.triadrx.us",
    address: "26258 Pollard Road, Daphne, AL 36526",
    phone: "251-380-7630",
  },
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
    <footer className="bg-white border-t border-gray-100">
      {/* Contact bar */}
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo */}
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
            <span className="text-dark font-bold text-lg">BioFusion</span>
          </Link>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="10" rx="2" stroke="#9CA3AF" strokeWidth="1.5" />
                <path d="M2 5l6 4 6-4" stroke="#9CA3AF" strokeWidth="1.5" />
              </svg>
              <span>support@biofusion.co</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 2h3l1.5 3-2 1.5a9 9 0 004 4L11 9l3 1.5V14h-1A11 11 0 013 3V2z" stroke="#9CA3AF" strokeWidth="1.5" />
              </svg>
              <span>(833) 246-3874</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1C5.2 1 3 3.7 3 5.5 3 9.5 8 15 8 15s5-5.5 5-9.5C13 3.7 10.8 1 8 1z" stroke="#9CA3AF" strokeWidth="1.5" />
                <circle cx="8" cy="5.5" r="1.5" stroke="#9CA3AF" strokeWidth="1.5" />
              </svg>
              <span>Houston, TX</span>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="space-y-4 text-[10px] text-muted/60 leading-relaxed mb-12">
          <p>
            *The assessment made available on the BioFusion website does not
            create a doctor-patient relationship between you and BioFusion
            providers. Results may vary based on individual health conditions and
            compliance with treatment plans.
          </p>
          <p>
            We are partnered with multiple USA certified pharmacies to bring the
            best product and overall experience to you.{" "}
            <span className="font-semibold text-muted/80">
              Pharmacy Providers
            </span>
          </p>
          <p>
            *Results vary based on starting weight and program adherence. Inches
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

        {/* Pharmacy partners grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pharmacyPartners.map((p) => (
            <div key={p.name} className="space-y-1">
              <h4 className="font-semibold text-sm">{p.name}</h4>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand hover:underline block truncate"
              >
                {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
              <p className="text-xs text-muted">{p.address}</p>
              <p className="text-xs text-muted">{p.phone}</p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} BioFusion. All rights reserved
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-muted hover:text-dark transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
