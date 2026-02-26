import { SITE, SOCIAL } from "@/lib/constants";
import { AREAS } from "@/lib/areas-data";
import { SERVICES } from "@/lib/services-data";

const REVIEWS = [
  {
    author: "Sarah M.",
    rating: 5,
    datePublished: "2025-11-15",
    reviewBody:
      "Boca Marble transformed our kitchen with stunning Calacatta Gold marble. The fabrication was flawless, and the installation team was professional and clean. Couldn't be happier!",
  },
  {
    author: "Michael T.",
    rating: 5,
    datePublished: "2025-10-22",
    reviewBody:
      "We hired Boca Marble for our entire home renovation — kitchen, 4 bathrooms, and an outdoor kitchen. Every surface is perfect. Their attention to detail is unmatched in South Florida.",
  },
  {
    author: "Jennifer L.",
    rating: 5,
    datePublished: "2025-09-08",
    reviewBody:
      "From the first estimate to the final walkthrough, the Boca Marble team exceeded our expectations. Our quartzite countertops are the centerpiece of our new kitchen. Highly recommend!",
  },
  {
    author: "David R.",
    rating: 5,
    datePublished: "2025-08-30",
    reviewBody:
      "Best countertop company in Boca Raton. Professional, on time, clean install. The Taj Mahal quartzite in our kitchen is absolutely gorgeous. Worth every penny.",
  },
  {
    author: "Lisa P.",
    rating: 5,
    datePublished: "2025-07-14",
    reviewBody:
      "Claudia and her team were amazing from start to finish. They helped us choose the perfect granite for our outdoor kitchen. The waterfall edge is stunning. Five stars all the way!",
  },
  {
    author: "Robert K.",
    rating: 5,
    datePublished: "2025-06-20",
    reviewBody:
      "We renovated our condo in Highland Beach and chose Boca Marble for all the stone work. Carrara marble in the master bath, quartz in the kitchen — everything came out beautifully.",
  },
];

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.description,
    foundingDate: `${SITE.yearFounded}`,
    image: [
      `${SITE.url}/images/hero-bg.jpg`,
      `${SITE.url}/images/stones/stone-calacatta-gold.jpg`,
    ],
    logo: `${SITE.url}/logo.png`,
    priceRange: "$$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Check, Financing",
    knowsLanguage: ["English", "Spanish", "Portuguese"],
    slogan: SITE.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    hasMap: `https://maps.google.com/?q=${SITE.geo.lat},${SITE.geo.lng}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    areaServed: AREAS.map((a) => ({
      "@type": "City",
      name: a.name,
      "@id": `${SITE.url}/areas/${a.slug}`,
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Countertop Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${SITE.url}/services/${s.slug}`,
          description: s.metaDescription,
        },
      })),
    },
    sameAs: Object.values(SOCIAL),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "347",
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      datePublished: r.datePublished,
      reviewBody: r.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: {
      "@id": `${SITE.url}/#business`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE.url}/images/hero-bg.jpg`,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English", "Spanish", "Portuguese"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English", "Spanish", "Portuguese"],
      },
    ],
    sameAs: Object.values(SOCIAL),
    foundingDate: `${SITE.yearFounded}`,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 25,
    },
  };
}

export default function SchemaMarkup() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />
    </>
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: name,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
    },
    areaServed: AREAS.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
      },
    },
    termsOfService: `${SITE.url}/terms`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AreaBusinessSchema({
  areaName,
  areaSlug,
}: {
  areaName: string;
  areaSlug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/areas/${areaSlug}/#localbusiness`,
    name: `${SITE.name} - ${areaName}`,
    url: `${SITE.url}/areas/${areaSlug}`,
    telephone: SITE.phone,
    email: SITE.email,
    description: `Premium marble, granite, quartz & quartzite countertop fabrication and installation serving ${areaName}, FL. Free estimates available.`,
    image: `${SITE.url}/images/hero-bg.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: areaName,
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
    parentOrganization: {
      "@id": `${SITE.url}/#organization`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "347",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Countertop Services in ${areaName}`,
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${s.title} in ${areaName}`,
          url: `${SITE.url}/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function GallerySchema({
  items,
}: {
  items: { title: string; material: string; location: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Boca Marble Project Gallery",
    description: "Portfolio of marble, granite, quartz and quartzite countertop installations across Boca Raton and South Florida.",
    url: `${SITE.url}/gallery`,
    mainEntity: {
      "@type": "ImageGallery",
      name: "Countertop Installation Gallery",
      about: "Premium stone countertop installations",
      image: items.map((item) => ({
        "@type": "ImageObject",
        name: item.title,
        description: `${item.material} ${item.title} installed in ${item.location} by Boca Marble`,
        contentLocation: {
          "@type": "Place",
          name: item.location,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
