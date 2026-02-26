import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Countertop Services | Marble, Granite, Quartz Fabrication & Installation",
  description: `Full-service countertop fabrication and installation in Boca Raton. Marble, granite, quartz, quartzite for kitchens, bathrooms & commercial. Free estimates — ${SITE.phone}.`,
  alternates: { canonical: `${SITE.url}/services` },
  keywords: ["countertop services boca raton", "marble fabrication", "granite installation", "quartz countertop company", "countertop fabricator south florida"],
  openGraph: {
    title: "Countertop Services | Boca Marble",
    description: "Premium countertop fabrication & installation. Marble, granite, quartz, quartzite. Boca Raton & South Florida.",
    url: `${SITE.url}/services`,
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: "Boca Marble Services" }],
  },
  twitter: { card: "summary_large_image", title: "Countertop Services | Boca Marble", images: ["/images/hero-bg.jpg"] },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <section className="py-20 lg:py-28 marble-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Our Services
            </p>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Countertop Services in Boca Raton
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              From premium marble fabrication to expert installation, we deliver
              comprehensive countertop services for residential and commercial
              projects throughout South Florida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white p-8 lg:p-10 rounded-sm border border-marble-dark/40 hover:border-gold/50 hover:shadow-lg transition-all"
              >
                <h2 className="font-heading text-2xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h2>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  {service.heroSubtitle}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate">
                      <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="text-gold font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
