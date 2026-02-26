import type { Metadata } from "next";
import Link from "next/link";
import { SITE, CTA } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "About Boca Marble | Boca Raton's Premier Countertop Fabricator",
  description:
    "Learn about Boca Marble — Boca Raton's trusted marble, granite, quartz & quartzite countertop fabricator since 2012. Licensed, insured, 1,500+ projects completed.",
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <section className="py-20 lg:py-28 marble-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
                About Us
              </p>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                Boca Raton&apos;s Most Trusted Countertop Fabricator Since 2012
              </h1>
              <div className="space-y-4 text-slate text-lg leading-relaxed">
                <p>
                  Boca Marble was founded with a simple mission: to bring
                  world-class stone fabrication to South Florida. What started as
                  a small operation has grown into a 15,000 sq ft state-of-the-art
                  fabrication facility with a team of 25+ skilled craftsmen.
                </p>
                <p>
                  We&apos;ve completed over 1,500 projects across Boca Raton and South
                  Florida — from intimate bathroom vanities to expansive estate
                  kitchens and large-scale commercial installations. Every project
                  receives the same attention to detail and commitment to
                  excellence.
                </p>
                <p>
                  Our investment in technology — including 5-axis CNC bridge saws,
                  waterjet cutters, and digital laser templating — ensures that
                  every countertop we fabricate meets the highest standards of
                  precision. Combined with the expertise of our master craftsmen,
                  this technology allows us to deliver results that consistently
                  exceed our clients&apos; expectations.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-charcoal rounded-sm marble-gradient border border-marble-dark/40 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-sm gold-gradient flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-heading font-bold text-5xl">B</span>
                </div>
                <p className="font-heading text-2xl font-bold text-charcoal">
                  Boca Marble
                </p>
                <p className="text-gold text-sm uppercase tracking-[0.2em] mt-1">
                  Est. {SITE.yearFounded}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "14+", label: "Years Experience" },
              { value: "1,500+", label: "Projects Completed" },
              { value: "25+", label: "Skilled Craftsmen" },
              { value: "15,000", label: "Sq Ft Facility" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-4xl lg:text-5xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">
            Why Boca Raton Trusts Boca Marble
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Locally Owned & Operated",
                desc: "We're a Boca Raton company through and through. Our owner lives here, our team works here, and our reputation depends on every project we complete in this community.",
              },
              {
                title: "Direct Importers",
                desc: "We import slabs directly from quarries in Italy, Brazil, India, and Spain — cutting out middlemen and passing the savings and selection to you.",
              },
              {
                title: "Master Craftsmen",
                desc: "Our fabricators average 15+ years of experience working with natural stone. Their expertise ensures every cut, edge, and seam is perfect.",
              },
              {
                title: "Advanced Technology",
                desc: "5-axis CNC bridge saws, waterjet cutters, and digital laser templating deliver precision that hand-cutting simply cannot match.",
              },
              {
                title: "Full-Service Solution",
                desc: "From material selection through final installation — including old countertop removal, plumbing coordination, and sealing — we handle everything.",
              },
              {
                title: "Warranty & Support",
                desc: "Lifetime craftsmanship warranty, 2-year installation warranty, and ongoing maintenance support. We stand behind every project.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-marble-dark/40 rounded-sm">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Contact us today for a free, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CTA.phone.href}
              className="gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Call {SITE.phone}
            </a>
            <a
              href={CTA.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
            <Link
              href="/free-estimate"
              className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
