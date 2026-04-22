import type { Metadata } from "next";
import Link from "next/link";
import { SITE, NAP } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Boca Marble collects, uses, and protects information when you visit bocamarble.com or contact us.",
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Boca Marble",
    description:
      "Privacy practices for Boca Marble website visitors and estimate requests.",
    url: `${SITE.url}/privacy`,
    siteName: SITE.name,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />
      <article className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-charcoal mb-8">
            Privacy Policy
          </h1>
          <p className="text-slate text-sm mb-10">
            Last updated: April 2026 · Applies to {SITE.url}
          </p>

          <section className="space-y-6 text-slate leading-relaxed">
            <p>
              Boca Marble (&quot;we,&quot; &quot;us&quot;) respects your privacy.
              This policy describes how we handle information when you use our
              website, forms, phone, SMS/WhatsApp, or email.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Information we collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact details you submit (name, phone, email, project address or
                city, and message content).
              </li>
              <li>
                Technical data from your browser (IP address, device type, pages
                viewed) via standard server logs and analytics when enabled.
              </li>
            </ul>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              How we use information
            </h2>
            <p>
              We use your information only to respond to inquiries, schedule
              estimates, deliver services, improve our website, and comply with
              law. We do not sell your personal information.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Sharing
            </h2>
            <p>
              We may share limited information with service providers who assist
              our business (e.g., hosting, analytics, advertising platforms) under
              confidentiality obligations. We may disclose information if required by
              law or to protect rights and safety.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Cookies & analytics
            </h2>
            <p>
              Our site may use cookies or similar technologies for measurement and
              advertising. You can control cookies through your browser settings.
            </p>

            <h2 className="font-heading text-xl font-bold text-charcoal mt-10">
              Contact
            </h2>
            <p>
              Questions about this policy:{" "}
              <a className="text-gold font-semibold" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              {" · "}
              {SITE.phone}
              {" · "}
              {NAP.line}
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
