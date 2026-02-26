import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, CTA } from "@/lib/constants";
import { getAreaBySlug, getAllAreaSlugs } from "@/lib/areas-data";
import { SERVICES } from "@/lib/services-data";
import { BreadcrumbSchema, AreaBusinessSchema, FAQSchema } from "@/components/SchemaMarkup";

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `${SITE.url}/areas/${slug}` },
    keywords: [
      `marble countertops ${area.name.toLowerCase()}`,
      `countertop installation ${area.name.toLowerCase()}`,
      `granite countertops ${area.name.toLowerCase()}`,
      `quartz countertops ${area.name.toLowerCase()}`,
      `countertop fabrication ${area.name.toLowerCase()}`,
      `kitchen countertops ${area.name.toLowerCase()}`,
    ],
    robots: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1 as const },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `${SITE.url}/areas/${slug}`,
      type: "website",
      siteName: SITE.name,
      images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: `Countertop Installation ${area.name} - Boca Marble` }],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: ["/images/hero-bg.jpg"],
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/areas" },
          { name: area.name, href: `/areas/${slug}` },
        ]}
      />
      <AreaBusinessSchema areaName={area.name} areaSlug={slug} />
      <FAQSchema
        faqs={[
          {
            question: `How much do countertops cost in ${area.name}?`,
            answer: `Countertop prices in ${area.name} range from $50-$250+ per square foot installed. Granite starts at ~$50/sqft, quartz ~$55/sqft, marble ~$75/sqft, and exotic quartzite $100+/sqft. Call ${SITE.phone} for a free estimate.`,
          },
          {
            question: `Do you offer free countertop estimates in ${area.name}?`,
            answer: `Yes! Boca Marble offers completely free, no-obligation in-home estimates throughout ${area.name}. We bring slab samples to your home. Call ${SITE.phone} or WhatsApp us to schedule.`,
          },
          {
            question: `What countertop materials do you install in ${area.name}?`,
            answer: `We install marble, granite, quartz, quartzite, porcelain (Dekton/Neolith), and engineered stone countertops in ${area.name}. Visit our showroom to see 1,000+ slab options.`,
          },
        ]}
      />

      <section className="py-20 lg:py-28 marble-gradient relative">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-charcoal/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-white transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6">
              {area.h1}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              {area.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CTA.phone.href}
                className="gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity text-center"
              >
                Call {SITE.phone}
              </a>
              <a
                href={CTA.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity text-center"
              >
                WhatsApp Us
              </a>
              <Link
                href="/free-estimate"
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-sm hover:bg-white/10 transition-colors text-center"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
                Countertop Services in {area.name}
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                {area.intro} Whether you need marble countertops for a kitchen
                renovation, granite for an outdoor kitchen, or quartz for a
                bathroom vanity, our team delivers the highest quality
                fabrication and installation throughout {area.name} and{" "}
                {area.county} County.
              </p>

              <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                Neighborhoods We Serve in {area.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                {area.neighborhoods.map((n) => (
                  <div
                    key={n}
                    className="bg-cream p-3 rounded-sm text-center text-sm text-charcoal font-medium"
                  >
                    {n}
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                Available Services in {area.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 p-4 border border-marble-dark/40 rounded-sm hover:border-gold/50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-charcoal group-hover:text-gold transition-colors font-medium">
                      {s.title} in {area.name}
                    </span>
                  </Link>
                ))}
              </div>

              <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                Zip Codes We Serve in {area.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {area.zipCodes.map((z) => (
                  <span
                    key={z}
                    className="bg-cream px-3 py-1 rounded-sm text-sm text-charcoal"
                  >
                    {z}
                  </span>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-charcoal p-8 rounded-sm text-center">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Free Estimate in {area.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-2">
                    {area.distanceFromHQ !== "Local"
                      ? `Only ${area.distanceFromHQ} from our facility`
                      : "Located in our home city"}
                  </p>
                  <p className="text-white/60 text-sm mb-6">
                    Same-day response guaranteed.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={CTA.phone.href}
                      className="gold-gradient text-white px-6 py-3 text-base font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full"
                    >
                      Call {SITE.phone}
                    </a>
                    <a
                      href={CTA.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25d366] text-white px-6 py-3 text-base font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center w-full"
                    >
                      WhatsApp Us
                    </a>
                    <Link
                      href="/free-estimate"
                      className="border border-white/20 text-white px-6 py-3 text-base font-semibold rounded-sm hover:bg-white/10 transition-colors flex items-center justify-center w-full"
                    >
                      Request Online
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
