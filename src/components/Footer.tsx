import Link from "next/link";
import { SITE, SOCIAL, CTA } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { AREAS } from "@/lib/areas-data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm gold-gradient flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">B</span>
              </div>
              <span className="font-heading text-lg font-bold text-white">
                Boca Marble
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">{SITE.description}</p>
            <div className="flex gap-3">
              {Object.entries(SOCIAL).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors text-xs uppercase font-semibold"
                  aria-label={`Follow us on ${name}`}
                >
                  {name[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {AREAS.slice(0, 8).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-sm text-gold hover:text-gold-light transition-colors font-medium"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm">
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
              <p>
                <a
                  href={CTA.phone.href}
                  className="text-gold hover:text-gold-light transition-colors font-semibold"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {SITE.email}
                </a>
              </p>
              <p>{SITE.hours}</p>
            </address>
            <div className="mt-4 flex gap-2">
              <a
                href={CTA.phone.href}
                className="gold-gradient text-white px-4 py-2 text-xs font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                Call Now
              </a>
              <a
                href={CTA.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white px-4 py-2 text-xs font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
              Licensed & Insured. FL License #CBC1234567.
            </p>
            <div className="flex gap-4 text-xs text-white/50">
              <Link href="/privacy" className="hover:text-white/80 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white/80 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white/80 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
