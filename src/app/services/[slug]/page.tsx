import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, CTA } from "@/lib/constants";
import { SERVICES, getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import {
  FAQSchema,
  ServiceSchema,
  BreadcrumbSchema,
} from "@/components/SchemaMarkup";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${SITE.url}/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE.url}/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedServices
    .map((rs) => SERVICES.find((s) => s.slug === rs))
    .filter(Boolean);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${slug}` },
        ]}
      />
      <ServiceSchema
        name={service.title}
        description={service.metaDescription}
        url={`${SITE.url}/services/${slug}`}
      />
      {service.faqs.length > 0 && <FAQSchema faqs={service.faqs} />}

      {/* HERO */}
      <section className="py-20 lg:py-28 marble-gradient relative">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-charcoal/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6">
              {service.h1}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              {service.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-estimate"
                className="gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity text-center"
              >
                Get Free Estimate
              </Link>
              <a
                href={CTA.phone.href}
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-sm hover:bg-white/10 transition-colors text-center"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate text-lg leading-relaxed mb-8">
                  {service.intro}
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-charcoal mb-6 mt-12">
                What&apos;s Included
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {service.faqs.length > 0 && (
                <>
                  <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group border border-marble-dark/40 rounded-sm overflow-hidden"
                      >
                        <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-cream transition-colors">
                          <h3 className="font-heading text-base font-bold text-charcoal pr-4">
                            {faq.question}
                          </h3>
                          <svg
                            className="w-5 h-5 text-gold flex-shrink-0 group-open:rotate-180 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-5 pb-5 text-slate text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-charcoal p-8 rounded-sm text-center">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Get a Free Estimate
                  </h3>
                  <p className="text-white/60 text-sm mb-6">
                    No obligation. Same-day response.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={CTA.phone.href}
                      className="gold-gradient text-white px-6 py-3 text-base font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {SITE.phone}
                    </a>
                    <a
                      href={CTA.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25d366] text-white px-6 py-3 text-base font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full"
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

                {relatedServices.length > 0 && (
                  <div className="border border-marble-dark/40 p-6 rounded-sm">
                    <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
                      Related Services
                    </h3>
                    <ul className="space-y-3">
                      {relatedServices.map((rs) =>
                        rs ? (
                          <li key={rs.slug}>
                            <Link
                              href={`/services/${rs.slug}`}
                              className="text-sm text-slate hover:text-gold transition-colors flex items-center gap-2"
                            >
                              <svg className="w-3 h-3 text-gold" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 5l7 7-7 7" />
                              </svg>
                              {rs.title}
                            </Link>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
