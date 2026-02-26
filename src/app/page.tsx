import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, CTA } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { AREAS } from "@/lib/areas-data";
import { FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Boca Marble | #1 Marble & Countertop Fabrication in Boca Raton, FL",
  description:
    "Boca Raton's premier marble, granite, quartz & quartzite countertop fabrication and installation company. Serving South Florida since 2012. Free estimates — call (561) 555-0123.",
  alternates: { canonical: SITE.url },
};

const HOME_FAQS = [
  {
    question: "What types of countertops do you install in Boca Raton?",
    answer:
      "We fabricate and install marble, granite, quartz, quartzite, porcelain, Dekton, Neolith, and Silestone countertops. We carry 1,000+ slab options at our Boca Raton showroom, from classic Carrara marble to exotic Brazilian granite.",
  },
  {
    question:
      "How much do countertops cost in Boca Raton?",
    answer:
      "Countertop prices in Boca Raton range from $50 to $250+ per square foot installed, depending on the material, edge profile, and project complexity. Granite starts at $50/sqft, quartz at $55/sqft, marble at $75/sqft, and exotic quartzite at $100/sqft+. Contact us for a free, personalized estimate.",
  },
  {
    question: "How long does countertop installation take?",
    answer:
      "Most countertop installations in Boca Raton are completed in one day. The full process — from digital templating to final installation — typically takes 5-10 business days. We offer expedited service for urgent projects.",
  },
  {
    question: "Do you offer free countertop estimates in Boca Raton?",
    answer:
      "Yes! We offer completely free, no-obligation in-home estimates throughout Boca Raton and all of South Florida. Call us at (561) 555-0123 or WhatsApp us to schedule your free estimate today.",
  },
  {
    question: "What areas do you serve besides Boca Raton?",
    answer:
      "While headquartered in Boca Raton, we serve all of South Florida including Delray Beach, Deerfield Beach, Pompano Beach, Coral Springs, Parkland, Boynton Beach, Highland Beach, West Palm Beach, Fort Lauderdale, and Wellington.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Boca Marble is fully licensed and insured in the state of Florida. We carry comprehensive general liability insurance and workers' compensation coverage for your complete protection.",
  },
];

const TRUST_STATS = [
  { value: "1,500+", label: "Projects Completed" },
  { value: "14+", label: "Years in Business" },
  { value: "4.9★", label: "Google Rating" },
  { value: "347+", label: "5-Star Reviews" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Schedule a free in-home estimate. We measure your space, discuss materials, and provide a detailed quote — no obligation.",
  },
  {
    step: "02",
    title: "Material Selection",
    description:
      "Visit our showroom to hand-select your slab from 1,000+ options. See the exact piece that will grace your home.",
  },
  {
    step: "03",
    title: "Digital Templating",
    description:
      "Our laser templating team captures precise measurements of your space, ensuring a perfect fit down to the millimeter.",
  },
  {
    step: "04",
    title: "CNC Fabrication",
    description:
      "Your slab is precision-cut on our 5-axis CNC bridge saws, edges are profiled, and surfaces are polished to perfection.",
  },
  {
    step: "05",
    title: "Expert Installation",
    description:
      "Our licensed installation crew delivers and installs your countertops, including sink cutouts, sealing, and final inspection.",
  },
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }]} />
      <FAQSchema faqs={HOME_FAQS} />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury marble countertop kitchen in Boca Raton with ocean view"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/20 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Boca Raton&apos;s Premier Stone Fabricator
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Luxury Marble &{" "}
              <span className="text-gold-gradient">Stone Countertops</span>{" "}
              in Boca Raton
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Premium countertop fabrication and installation for Boca Raton&apos;s
              finest homes and businesses. Marble, granite, quartz & quartzite — 
              crafted with precision, installed with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-estimate"
                className="gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity text-center"
              >
                Get Your Free Estimate
              </Link>
              <a
                href={CTA.phone.href}
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-sm hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {SITE.phone}
              </a>
              <a
                href={CTA.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-charcoal py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl lg:text-4xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 lg:py-28 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Our Services
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Premium Countertop Fabrication & Installation
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              From material selection to final installation, we handle every
              aspect of your countertop project with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 9).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-8 border border-marble-dark/40 rounded-sm hover:border-gold/50 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  {service.heroSubtitle}
                </p>
                <span className="text-gold font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="gold-gradient text-white px-8 py-4 text-base font-semibold rounded-sm hover:opacity-90 transition-opacity inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY BOCA MARBLE */}
      <section className="py-20 lg:py-28 marble-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Boca Raton&apos;s Most Trusted Countertop Company
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              With over 14 years of experience and 1,500+ completed projects,
              we&apos;ve earned Boca Raton&apos;s trust through quality, reliability, and
              unmatched craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "State-of-the-Art Fabrication",
                desc: "Our 15,000 sq ft facility features 5-axis CNC bridge saws, waterjet cutters, and digital templating for precision fabrication.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.658 3.286a.75.75 0 01-1.112-.66V5.558a.75.75 0 01.372-.636l6-3.55a.75.75 0 01.756 0l6 3.55a.75.75 0 01.372.636v12.238a.75.75 0 01-1.112.66l-5.658-3.286a.75.75 0 00-.758 0z" />
                  </svg>
                ),
              },
              {
                title: "1,000+ Slab Selection",
                desc: "Visit our showroom to hand-select your slab. We carry the largest selection of marble, granite, quartz, and quartzite in Boca Raton.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
              },
              {
                title: "Licensed & Insured",
                desc: "Fully licensed Florida contractor with comprehensive liability and workers' comp insurance. Your project is protected from start to finish.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Free In-Home Estimates",
                desc: "No-obligation in-home estimates throughout Boca Raton and South Florida. We bring slab samples to your home for accurate color matching.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
              },
              {
                title: "Fast Turnaround",
                desc: "From templating to installation in as little as 5 business days. Same-week scheduling available for urgent projects.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Lifetime Warranty",
                desc: "We stand behind our craftsmanship with a lifetime warranty on fabrication and a 2-year installation warranty. Your satisfaction is guaranteed.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-14 h-14 rounded-sm bg-gold/10 text-gold flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Our Process
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              From Slab to Stunning in 5 Simple Steps
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              We&apos;ve streamlined our process to deliver beautiful countertops
              with minimal disruption to your home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="text-center lg:text-left">
                <div className="font-heading text-5xl font-bold text-gold/20 mb-2">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/free-estimate"
              className="gold-gradient text-white px-8 py-4 text-base font-semibold rounded-sm hover:opacity-90 transition-opacity inline-block"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

      {/* MATERIALS SHOWCASE */}
      <section className="py-20 lg:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Materials
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4">
              The Finest Stone from Around the World
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Hand-selected slabs from the world&apos;s premier quarries. Visit our
              showroom to see our full collection.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Calacatta Gold", origin: "Italy", type: "Marble", img: "/images/stones/stone-calacatta-gold.jpg" },
              { name: "Carrara White", origin: "Italy", type: "Marble", img: "/images/stones/stone-carrara-white.jpg" },
              { name: "Statuario", origin: "Italy", type: "Marble", img: "/images/stones/stone-statuario.jpg" },
              { name: "Taj Mahal", origin: "Brazil", type: "Quartzite", img: "/images/stones/stone-taj-mahal.jpg" },
              { name: "Super White", origin: "Brazil", type: "Quartzite", img: "/images/stones/stone-super-white.jpg" },
              { name: "Absolute Black", origin: "India", type: "Granite", img: "/images/stones/stone-absolute-black.jpg" },
              { name: "Blue Bahia", origin: "Brazil", type: "Granite", img: "/images/stones/stone-blue-bahia.jpg" },
              { name: "Silestone Calacatta", origin: "Spain", type: "Quartz", img: "/images/stones/stone-silestone-calacatta.jpg" },
            ].map((mat) => (
              <div
                key={mat.name}
                className="group relative aspect-square rounded-sm overflow-hidden border border-white/5 hover:border-gold/30 hover:scale-[1.03] transition-all duration-300"
              >
                <Image
                  src={mat.img}
                  alt={`${mat.name} ${mat.type} countertop surface`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-heading font-bold text-sm">
                    {mat.name}
                  </p>
                  <p className="text-white/50 text-xs">
                    {mat.type} · {mat.origin}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="border-2 border-gold text-gold px-8 py-4 text-base font-semibold rounded-sm hover:bg-gold hover:text-white transition-all inline-block"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              What Our Boca Raton Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                location: "Royal Palm, Boca Raton",
                text: "Boca Marble transformed our kitchen with stunning Calacatta Gold marble. The fabrication was flawless, and the installation team was professional and clean. Couldn't be happier!",
                rating: 5,
              },
              {
                name: "Michael T.",
                location: "Boca West, Boca Raton",
                text: "We hired Boca Marble for our entire home renovation — kitchen, 4 bathrooms, and an outdoor kitchen. Every surface is perfect. Their attention to detail is unmatched in South Florida.",
                rating: 5,
              },
              {
                name: "Jennifer L.",
                location: "The Sanctuary, Boca Raton",
                text: "From the first estimate to the final walkthrough, the Boca Marble team exceeded our expectations. Our quartzite countertops are the centerpiece of our new kitchen. Highly recommend!",
                rating: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-cream p-8 rounded-sm border border-marble-dark/30"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    {review.name}
                  </p>
                  <p className="text-slate text-xs">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://g.page/bocamarble"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors inline-flex items-center gap-1"
            >
              Read All 347+ Reviews on Google
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 lg:py-28 marble-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Service Areas
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Serving All of South Florida
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Headquartered in Boca Raton, we deliver premium countertop services
              throughout Palm Beach and Broward counties.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-white p-5 rounded-sm border border-marble-dark/30 hover:border-gold/50 hover:shadow-md transition-all text-center"
              >
                <h3 className="font-heading text-base font-bold text-charcoal group-hover:text-gold transition-colors">
                  {area.name}
                </h3>
                <p className="text-slate text-xs mt-1">
                  {area.county} County
                  {area.distanceFromHQ !== "Local" &&
                    ` · ${area.distanceFromHQ}`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              FAQ
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {HOME_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group border border-marble-dark/40 rounded-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-cream transition-colors">
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
                <div className="px-6 pb-6 text-slate text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 marble-gradient opacity-5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for your countertop project. Call
            us, WhatsApp us, or fill out our form — we respond within 1 hour
            during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CTA.phone.href}
              className="gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {SITE.phone}
            </a>
            <a
              href={CTA.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/free-estimate"
              className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-sm hover:bg-white/10 transition-colors text-center"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
