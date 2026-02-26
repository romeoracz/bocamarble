import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="font-heading text-8xl font-bold text-gold mb-4">404</h1>
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-slate text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let us help you find what
          you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="gold-gradient text-white px-8 py-3 text-base font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
          <Link
            href="/free-estimate"
            className="border-2 border-charcoal text-charcoal px-8 py-3 text-base font-semibold rounded-sm hover:bg-charcoal hover:text-white transition-colors"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
