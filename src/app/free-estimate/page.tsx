import type { Metadata } from "next";
import { SITE, CTA } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Countertop Estimate | Boca Raton",
  description:
    "Get a free, no-obligation countertop estimate in Boca Raton. Marble, granite, quartz & quartzite. Same-day response. Call (561) 555-0123 or fill out our form.",
  alternates: { canonical: `${SITE.url}/free-estimate` },
};

export default function FreeEstimatePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Free Estimate", href: "/free-estimate" },
        ]}
      />

      <section className="py-20 lg:py-28 marble-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
                Free Estimate
              </p>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                Get Your Free Countertop Estimate Today
              </h1>
              <p className="text-slate text-lg leading-relaxed mb-8">
                Fill out the form and we&apos;ll contact you within 1 hour during
                business hours. Or reach us directly:
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={CTA.phone.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-sm border border-marble-dark/40 hover:border-gold/50 transition-colors group"
                >
                  <div className="w-12 h-12 gold-gradient rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal group-hover:text-gold transition-colors">
                      Call Us
                    </p>
                    <p className="text-gold font-bold text-lg">{SITE.phone}</p>
                  </div>
                </a>

                <a
                  href={CTA.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-sm border border-marble-dark/40 hover:border-[#25d366]/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25d366] rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal group-hover:text-[#25d366] transition-colors">
                      WhatsApp Us
                    </p>
                    <p className="text-slate text-sm">
                      Instant response during business hours
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-sm border border-marble-dark/40 hover:border-gold/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-charcoal rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal group-hover:text-gold transition-colors">
                      Email Us
                    </p>
                    <p className="text-slate text-sm">{SITE.email}</p>
                  </div>
                </a>
              </div>

              <div className="bg-white p-6 rounded-sm border border-marble-dark/40">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2">
                  {[
                    "Response within 1 hour during business hours",
                    "Free in-home measurement & consultation",
                    "Detailed written estimate with material options",
                    "No pressure, no obligation — ever",
                    "Slab samples brought to your home",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate">
                      <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
