import type { Metadata } from "next";
import Link from "next/link";
import { SITE, NAP } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of bocamarble.com and engagement with Boca Marble for estimates and countertop services.",
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service | Boca Marble",
    description:
      "Website terms and conditions for Boca Marble customers and visitors.",
    url: `${SITE.url}/terms`,
    siteName: SITE.name,
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Terms of Service", href: "/terms" },
        ]}
      />
      <article className="py-20 lg:py-28 marble-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-charcoal mb-8">
            Terms of Service
          </h1>
          <p className="text-slate text-sm mb-10">
            Last updated: April 2026 · Applies to {SITE.url}
          </p>

          <section className="space-y-6 text-slate leading-relaxed bg-white p-8 rounded-sm border border-marble-dark/30">
            <p>
              By accessing {SITE.url} or requesting services from Boca Marble
              (&quot;Company&quot;), you agree to these terms. If you do not agree,
              do not use the site or submit a request.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Estimates & proposals
            </h2>
            <p>
              Written estimates are based on field measurements, material
              selections, and scope discussed at the time. Final pricing may adjust
              if dimensions, materials, site conditions, or scope change. Estimates
              are not binding until accepted in writing per your project agreement.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Materials & natural stone
            </h2>
            <p>
              Natural stone varies in color and pattern; slab photography is
              representative. Customer approval of slab and layout is required
              before fabrication unless otherwise documented.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Installation & site access
            </h2>
            <p>
              Customer is responsible for safe access, utilities, cabinetry/support
              readiness per manufacturer guidance, and coordination with other
              trades. Delays caused by site conditions may affect schedule.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by Florida law, Company is not liable
              for indirect or consequential damages arising from use of this site or
              services. Company&apos;s liability for any claim related to a project
              is limited to amounts paid to Company for that project unless a
              different cap is required by law.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Website use
            </h2>
            <p>
              Content on this site is for general information. We may update these
              terms periodically; continued use constitutes acceptance of changes.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Contact
            </h2>
            <p>
              {SITE.legalName}
              <br />
              {NAP.line}
              <br />
              {SITE.phone} ·{" "}
              <a className="text-gold font-semibold" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>

            <p className="pt-8">
              <Link href="/" className="text-gold font-semibold hover:underline">
                ← Back to home
              </Link>
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
