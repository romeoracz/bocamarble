"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CTA } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/boca-raton-countertops", label: "Countertop Guide" },
  { href: "/gallery", label: "Gallery" },
  { href: "/areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-marble-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-charcoal tracking-tight leading-tight">
                Boca Marble
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-dark leading-tight hidden sm:block">
                Stone & Fabrication
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate hover:text-gold transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CTA.phone.href}
              aria-label={CTA.phone.ariaLabel}
              className="flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.phone}
            </a>
            <Link
              href="/free-estimate"
              className="gold-gradient text-white px-5 py-2.5 text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Free Estimate
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-marble-dark/30">
          <nav className="px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate hover:text-gold transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-marble-dark/30" />
            <a
              href={CTA.phone.href}
              className="flex items-center gap-2 text-base font-semibold text-charcoal py-2"
            >
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.phone}
            </a>
            <Link
              href="/free-estimate"
              onClick={() => setMobileOpen(false)}
              className="gold-gradient text-white px-5 py-3 text-center text-base font-semibold rounded-sm"
            >
              Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
