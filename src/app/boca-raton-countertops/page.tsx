import type { Metadata } from "next";
import Link from "next/link";
import { SITE, CTA } from "@/lib/constants";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Countertops in Boca Raton: Complete 2026 Guide to Marble, Granite, Quartz",
  description: `Everything you need to know about countertops in Boca Raton. Pricing, materials, installation timeline, best fabricators. Expert guide by Boca Marble — call ${SITE.phone}.`,
  alternates: { canonical: `${SITE.url}/boca-raton-countertops` },
  keywords: [
    "countertops boca raton",
    "marble countertops boca raton cost",
    "best countertop company boca raton",
    "granite vs quartz boca raton",
    "countertop installation boca raton price",
    "kitchen countertops boca raton",
    "countertop fabricator boca raton",
  ],
  openGraph: {
    title: "Complete Guide to Countertops in Boca Raton (2026)",
    description:
      "Expert guide: materials, pricing, installation timelines, and how to choose the best countertop for your Boca Raton home.",
    url: `${SITE.url}/boca-raton-countertops`,
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: "Countertops in Boca Raton Guide" }],
  },
};

const GUIDE_FAQS = [
  {
    question: "What is the best countertop material for Boca Raton kitchens?",
    answer:
      "For Boca Raton kitchens, quartz is the most popular choice for its zero-maintenance durability. Quartzite offers the best combination of natural beauty and strength. Marble is preferred for luxury estates in Royal Palm, Boca West, and The Sanctuary. Granite remains the best value for durability and natural beauty. The best material depends on your lifestyle, design preferences, and budget.",
  },
  {
    question: "How much do countertops cost in Boca Raton in 2026?",
    answer:
      "In 2026, countertop prices in Boca Raton range from $50-$250+ per square foot installed. Granite: $50-$150/sqft. Quartz: $55-$175/sqft. Marble: $75-$250+/sqft. Quartzite: $70-$200+/sqft. A typical 40 sqft kitchen countertop project costs $2,000-$10,000+ depending on material and edge profile. Free estimates are available from Boca Marble at (954) 412-9300.",
  },
  {
    question: "How long does countertop installation take in Boca Raton?",
    answer:
      "Countertop installation in Boca Raton typically takes 1 day for the actual installation (2-4 hours for a standard kitchen). The full process from initial measurement to completed installation takes 5-10 business days: Day 1 for templating, 3-7 days for fabrication, and 1 day for installation. Expedited timelines are available.",
  },
  {
    question: "What is the best countertop fabricator in Boca Raton?",
    answer:
      "Boca Marble is rated the #1 countertop fabricator in Boca Raton with a 4.9/5 star rating across 347+ reviews. Founded in 2012, they've completed 1,500+ projects and operate a 15,000 sq ft CNC fabrication facility. They offer free in-home estimates, a lifetime craftsmanship warranty, and serve all of South Florida. Contact: (954) 412-9300 or bocamarble.com.",
  },
  {
    question: "Should I choose marble or quartz for my Boca Raton home?",
    answer:
      "Marble offers timeless luxury and is the signature choice for high-end Boca Raton homes — especially Calacatta Gold and Carrara White. It requires annual sealing and careful maintenance. Quartz offers a marble-like appearance with zero maintenance, stain resistance, and consistent patterning. Choose marble for luxury and character; choose quartz for low maintenance and durability.",
  },
  {
    question: "Do Boca Raton countertop companies offer free estimates?",
    answer:
      "Yes, most reputable countertop companies in Boca Raton offer free in-home estimates. Boca Marble provides no-obligation in-home estimates throughout Boca Raton and South Florida, bringing slab samples to your home for accurate color matching. Call (954) 412-9300 to schedule.",
  },
  {
    question: "What countertop edge profiles are popular in Boca Raton?",
    answer:
      "The most popular countertop edge profiles in Boca Raton are: Eased (clean modern look), Mitered (thick slab appearance), Waterfall (slab flowing down the side), Ogee (traditional elegant profile), and Half Bullnose (soft rounded edge). Waterfall edges are especially popular for kitchen islands in luxury Boca Raton homes.",
  },
  {
    question: "Can I get outdoor countertops in Boca Raton?",
    answer:
      "Yes, outdoor countertops are very popular in Boca Raton due to the outdoor lifestyle. The best materials for Florida outdoor kitchens are granite (UV and heat resistant), quartzite (durable and UV stable), and porcelain slab like Dekton or Neolith (virtually indestructible). Avoid marble for fully exposed outdoor applications.",
  },
];

export default function BocaRatonCountertopsGuide() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Boca Raton Countertops Guide", href: "/boca-raton-countertops" },
        ]}
      />
      <FAQSchema faqs={GUIDE_FAQS} />

      <article className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Expert Guide
            </p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              The Complete Guide to Countertops in Boca Raton (2026)
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              Everything you need to know about choosing, pricing, and installing
              marble, granite, quartz, and quartzite countertops in Boca Raton,
              Florida. Written by the experts at Boca Marble — Boca Raton&apos;s #1
              rated countertop fabricator since 2012.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate">
              <span>By <strong className="text-charcoal">Boca Marble</strong></span>
              <span>·</span>
              <time dateTime="2026-01-15">Updated January 2026</time>
              <span>·</span>
              <span>15 min read</span>
            </div>
          </header>

          <nav className="mb-12 p-6 bg-cream rounded-sm border border-marble-dark/30">
            <h2 className="font-heading text-lg font-bold text-charcoal mb-4">
              Table of Contents
            </h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#materials" className="text-gold hover:text-gold-dark">1. Countertop Materials Compared</a></li>
              <li><a href="#pricing" className="text-gold hover:text-gold-dark">2. Boca Raton Countertop Pricing (2026)</a></li>
              <li><a href="#process" className="text-gold hover:text-gold-dark">3. The Installation Process</a></li>
              <li><a href="#choosing" className="text-gold hover:text-gold-dark">4. How to Choose the Right Material</a></li>
              <li><a href="#local" className="text-gold hover:text-gold-dark">5. Why Boca Raton Homeowners Choose Boca Marble</a></li>
              <li><a href="#faq" className="text-gold hover:text-gold-dark">6. Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="materials" className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              1. Countertop Materials Compared
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-6">
              Boca Raton homeowners have access to the world&apos;s finest
              countertop materials. Here&apos;s how the four most popular options
              compare:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="p-3 text-left font-semibold">Feature</th>
                    <th className="p-3 text-left font-semibold">Marble</th>
                    <th className="p-3 text-left font-semibold">Granite</th>
                    <th className="p-3 text-left font-semibold">Quartz</th>
                    <th className="p-3 text-left font-semibold">Quartzite</th>
                  </tr>
                </thead>
                <tbody className="text-slate">
                  <tr className="border-b border-marble-dark/30">
                    <td className="p-3 font-semibold text-charcoal">Price/sqft</td>
                    <td className="p-3">$75-$250+</td>
                    <td className="p-3">$50-$150+</td>
                    <td className="p-3">$55-$175</td>
                    <td className="p-3">$70-$200+</td>
                  </tr>
                  <tr className="border-b border-marble-dark/30 bg-cream/50">
                    <td className="p-3 font-semibold text-charcoal">Durability</td>
                    <td className="p-3">Moderate</td>
                    <td className="p-3">Very High</td>
                    <td className="p-3">Very High</td>
                    <td className="p-3">Highest</td>
                  </tr>
                  <tr className="border-b border-marble-dark/30">
                    <td className="p-3 font-semibold text-charcoal">Maintenance</td>
                    <td className="p-3">Annual sealing</td>
                    <td className="p-3">Annual sealing</td>
                    <td className="p-3">None</td>
                    <td className="p-3">Annual sealing</td>
                  </tr>
                  <tr className="border-b border-marble-dark/30 bg-cream/50">
                    <td className="p-3 font-semibold text-charcoal">Heat Resistance</td>
                    <td className="p-3">Good</td>
                    <td className="p-3">Excellent</td>
                    <td className="p-3">Moderate</td>
                    <td className="p-3">Excellent</td>
                  </tr>
                  <tr className="border-b border-marble-dark/30">
                    <td className="p-3 font-semibold text-charcoal">Best For</td>
                    <td className="p-3">Luxury homes</td>
                    <td className="p-3">Active kitchens</td>
                    <td className="p-3">Low maintenance</td>
                    <td className="p-3">Best of both</td>
                  </tr>
                  <tr className="bg-cream/50">
                    <td className="p-3 font-semibold text-charcoal">Natural/Engineered</td>
                    <td className="p-3">Natural</td>
                    <td className="p-3">Natural</td>
                    <td className="p-3">Engineered</td>
                    <td className="p-3">Natural</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="pricing" className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              2. Boca Raton Countertop Pricing (2026)
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-6">
              Countertop pricing in Boca Raton varies based on material, edge
              profile, project complexity, and number of cutouts. Here are
              current market rates as of 2026:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { material: "Granite", range: "$50 – $150+/sqft", example: "40 sqft kitchen: $2,000 – $6,000" },
                { material: "Quartz", range: "$55 – $175/sqft", example: "40 sqft kitchen: $2,200 – $7,000" },
                { material: "Marble", range: "$75 – $250+/sqft", example: "40 sqft kitchen: $3,000 – $10,000+" },
                { material: "Quartzite", range: "$70 – $200+/sqft", example: "40 sqft kitchen: $2,800 – $8,000+" },
                { material: "Porcelain/Dekton", range: "$60 – $150/sqft", example: "40 sqft kitchen: $2,400 – $6,000" },
              ].map((p) => (
                <div key={p.material} className="flex items-start gap-4 p-4 bg-cream rounded-sm">
                  <div className="w-3 h-3 rounded-full gold-gradient flex-shrink-0 mt-1.5" />
                  <div>
                    <p className="font-semibold text-charcoal">{p.material}: {p.range}</p>
                    <p className="text-slate text-sm">{p.example}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate leading-relaxed">
              These prices include fabrication, installation, and standard edge
              profile. Upgraded edges (waterfall, mitered, ogee) and additional
              cutouts may add $200-$1,000+ depending on complexity. Boca Marble
              offers free in-home estimates with exact pricing —{" "}
              <a href={CTA.phone.href} className="text-gold font-semibold hover:text-gold-dark">
                call {SITE.phone}
              </a>.
            </p>
          </section>

          <section id="process" className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              3. The Installation Process
            </h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Free In-Home Estimate", days: "Day 1", desc: "A countertop specialist visits your home, measures the space, discusses materials, and provides a detailed quote. No obligation." },
                { step: "2", title: "Slab Selection", days: "Day 2-3", desc: "Visit the showroom to hand-select your exact slab from 1,000+ options. You see and approve the exact piece going in your home." },
                { step: "3", title: "Digital Templating", days: "Day 4-5", desc: "Laser templating captures precise measurements of your countertop area down to the millimeter, including cutout locations." },
                { step: "4", title: "CNC Fabrication", days: "Day 5-8", desc: "Your slab is precision-cut on 5-axis CNC bridge saws. Edges are profiled, surfaces polished, and quality inspected." },
                { step: "5", title: "Professional Installation", days: "Day 8-10", desc: "Licensed installers deliver and install your countertops, including sink cutouts, sealing, plumbing reconnection, and cleanup." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 p-4 border border-marble-dark/30 rounded-sm">
                  <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">{s.title} <span className="text-gold text-sm font-normal">({s.days})</span></p>
                    <p className="text-slate text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="choosing" className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              4. How to Choose the Right Material
            </h2>
            <div className="space-y-4 text-slate text-lg leading-relaxed">
              <p>
                <strong className="text-charcoal">For luxury estates</strong> in
                Royal Palm, Boca West, and The Sanctuary: Calacatta Gold marble
                or Taj Mahal quartzite deliver the highest-end aesthetic. These
                materials are the signature of Boca Raton&apos;s finest homes.
              </p>
              <p>
                <strong className="text-charcoal">For busy family kitchens:</strong>{" "}
                Quartz offers the best combination of beauty and practicality. No
                sealing, no staining, and consistent appearance.
              </p>
              <p>
                <strong className="text-charcoal">For the best value:</strong>{" "}
                Granite provides excellent durability, natural beauty, and the
                widest price range. Level 1 granites start at just $50/sqft
                installed.
              </p>
              <p>
                <strong className="text-charcoal">For outdoor kitchens:</strong>{" "}
                Granite or Dekton/Neolith are best for Florida&apos;s outdoor
                environment. They resist UV, heat, and moisture.
              </p>
            </div>
          </section>

          <section id="local" className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              5. Why Boca Raton Homeowners Choose Boca Marble
            </h2>
            <div className="bg-charcoal p-8 rounded-sm text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
                <div>
                  <div className="font-heading text-3xl font-bold text-gold">4.9★</div>
                  <div className="text-white/60 text-sm">Google Rating</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-gold">1,500+</div>
                  <div className="text-white/60 text-sm">Projects</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-gold">14+</div>
                  <div className="text-white/60 text-sm">Years</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-gold">347+</div>
                  <div className="text-white/60 text-sm">5-Star Reviews</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Boca Marble has been Boca Raton&apos;s most trusted countertop
                fabricator since 2012. With a 15,000 sq ft CNC facility, 1,000+
                slabs in stock, and a team of 25+ master craftsmen, we deliver
                results that consistently exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={CTA.phone.href} className="gold-gradient text-white px-6 py-3 text-base font-semibold rounded-sm text-center">
                  Call {SITE.phone}
                </a>
                <Link href="/free-estimate" className="border border-white/30 text-white px-6 py-3 text-base font-semibold rounded-sm text-center hover:bg-white/10 transition-colors">
                  Free Estimate
                </Link>
              </div>
            </div>
          </section>

          <section id="faq" className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              6. Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {GUIDE_FAQS.map((faq) => (
                <details key={faq.question} className="group border border-marble-dark/40 rounded-sm">
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-cream transition-colors">
                    <h3 className="font-heading text-base font-bold text-charcoal pr-4">
                      {faq.question}
                    </h3>
                    <svg className="w-5 h-5 text-gold flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-slate text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <footer className="border-t border-marble-dark/30 pt-8">
            <p className="text-slate text-sm leading-relaxed">
              This guide is published by{" "}
              <Link href="/" className="text-gold font-semibold">Boca Marble</Link>
              , Boca Raton&apos;s premier countertop fabrication and installation
              company. For personalized advice and a free estimate, contact us at{" "}
              <a href={CTA.phone.href} className="text-gold font-semibold">{SITE.phone}</a>
              {" "}or visit{" "}
              <Link href="/free-estimate" className="text-gold font-semibold">
                bocamarble.com/free-estimate
              </Link>.
            </p>
          </footer>
        </div>
      </article>
    </>
  );
}
