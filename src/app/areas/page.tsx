import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { AREAS } from "@/lib/areas-data";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Service Areas | Countertop Installation Across South Florida",
  description:
    "Boca Marble serves all of South Florida with premium countertop fabrication & installation. Boca Raton, Delray Beach, Deerfield Beach, Coral Springs, Parkland & more.",
  alternates: { canonical: `${SITE.url}/areas` },
  keywords: ["countertop installation south florida", "marble countertops palm beach county", "granite countertops broward county", "countertop company near me"],
  openGraph: {
    title: "Service Areas | Boca Marble Countertop Installation",
    description: "Premium countertop services across Palm Beach & Broward counties. Boca Raton, Delray Beach, Fort Lauderdale & more.",
    url: `${SITE.url}/areas`,
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: "Boca Marble Service Areas" }],
  },
  twitter: { card: "summary_large_image", title: "Service Areas | Boca Marble", images: ["/images/hero-bg.jpg"] },
};

export default function AreasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/areas" },
        ]}
      />
      <section className="py-20 lg:py-28 marble-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Service Areas
            </p>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Countertop Installation Across South Florida
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              Headquartered in Boca Raton, we deliver premium marble, granite,
              quartz, and quartzite countertop services throughout Palm Beach and
              Broward counties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-white p-8 rounded-sm border border-marble-dark/40 hover:border-gold/50 hover:shadow-lg transition-all"
              >
                <h2 className="font-heading text-2xl font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
                  {area.name}
                </h2>
                <p className="text-gold text-sm font-medium mb-3">
                  {area.county} County
                  {area.distanceFromHQ !== "Local" &&
                    ` · ${area.distanceFromHQ} from HQ`}
                </p>
                <p className="text-slate text-sm leading-relaxed mb-4 line-clamp-3">
                  {area.intro}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {area.neighborhoods.slice(0, 4).map((n) => (
                    <span
                      key={n}
                      className="bg-cream text-slate text-xs px-2 py-1 rounded-sm"
                    >
                      {n}
                    </span>
                  ))}
                  {area.neighborhoods.length > 4 && (
                    <span className="bg-cream text-gold text-xs px-2 py-1 rounded-sm font-medium">
                      +{area.neighborhoods.length - 4} more
                    </span>
                  )}
                </div>
                <span className="text-gold font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Area Details
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
