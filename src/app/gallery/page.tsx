import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, CTA } from "@/lib/constants";
import { BreadcrumbSchema, GallerySchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Gallery | Marble & Countertop Projects in Boca Raton",
  description:
    "Browse our portfolio of marble, granite, quartz, and quartzite countertop installations across Boca Raton and South Florida. Kitchen, bathroom, outdoor & commercial projects.",
  alternates: { canonical: `${SITE.url}/gallery` },
  keywords: ["countertop gallery boca raton", "marble kitchen photos", "granite countertop portfolio", "countertop before after boca raton"],
  openGraph: {
    title: "Project Gallery | Boca Marble Countertop Installations",
    description: "See our stunning marble, granite & quartz countertop installations across Boca Raton and South Florida.",
    url: `${SITE.url}/gallery`,
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: "Boca Marble Project Gallery" }],
  },
  twitter: { card: "summary_large_image", title: "Boca Marble Gallery", images: ["/images/hero-bg.jpg"] },
};

const GALLERY_ITEMS = [
  { title: "Calacatta Gold Kitchen", category: "Kitchen", material: "Marble", location: "Royal Palm, Boca Raton", img: "/images/gallery/gallery-calacatta-kitchen.jpg" },
  { title: "Taj Mahal Waterfall Island", category: "Kitchen", material: "Quartzite", location: "Boca West", img: "/images/gallery/gallery-taj-mahal-island.jpg" },
  { title: "Carrara Master Bathroom", category: "Bathroom", material: "Marble", location: "The Sanctuary, Boca Raton", img: "/images/gallery/gallery-carrara-bathroom.jpg" },
  { title: "Absolute Black Outdoor Kitchen", category: "Outdoor", material: "Granite", location: "Highland Beach", img: "/images/gallery/gallery-black-outdoor.jpg" },
  { title: "Silestone Modern Kitchen", category: "Kitchen", material: "Quartz", location: "Mizner Park, Boca Raton", img: "/images/gallery/gallery-silestone-kitchen.jpg" },
  { title: "Statuario Book-Match Wall", category: "Feature Wall", material: "Marble", location: "Delray Beach", img: "/images/gallery/gallery-statuario-wall.jpg" },
  { title: "Super White Kitchen & Island", category: "Kitchen", material: "Quartzite", location: "Parkland", img: "/images/gallery/gallery-superwhite-kitchen.jpg" },
  { title: "Blue Bahia Statement Bar", category: "Commercial", material: "Granite", location: "Fort Lauderdale", img: "/images/gallery/gallery-bluebahia-bar.jpg" },
  { title: "Calacatta Quartz Bathroom", category: "Bathroom", material: "Quartz", location: "Coral Springs", img: "/images/gallery/gallery-calacatta-quartz-bath.jpg" },
  { title: "Cristallo Quartzite Kitchen", category: "Kitchen", material: "Quartzite", location: "West Palm Beach", img: "/images/gallery/gallery-cristallo-kitchen.jpg" },
  { title: "Carrara Shower Surround", category: "Bathroom", material: "Marble", location: "Boca Raton", img: "/images/gallery/gallery-carrara-shower.jpg" },
  { title: "Fantasy Brown Kitchen", category: "Kitchen", material: "Granite", location: "Wellington", img: "/images/gallery/gallery-fantasybrown-kitchen.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ]}
      />
      <GallerySchema items={GALLERY_ITEMS} />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Our Work
            </p>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Project Gallery
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              Browse our recent countertop installations across Boca Raton and
              South Florida. Every project showcases our commitment to precision
              fabrication and flawless installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-marble-dark/30 cursor-pointer"
              >
                <Image
                  src={item.img}
                  alt={`${item.title} — ${item.material} ${item.category} in ${item.location} by Boca Marble`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-heading text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {item.material} · {item.category} · {item.location}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1 rounded-sm shadow-sm">
                    {item.material}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-12 bg-charcoal rounded-sm">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
              Love What You See?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Let us create something equally stunning for your home or business.
              Get started with a free estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CTA.phone.href}
                className="gold-gradient text-white px-8 py-4 text-lg font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                Call {SITE.phone}
              </a>
              <Link
                href="/free-estimate"
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-sm hover:bg-white/10 transition-colors"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
