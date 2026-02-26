export const SITE = {
  name: "Boca Marble",
  legalName: "Boca Marble & Stone LLC",
  url: "https://bocamarble.com",
  phone: "(561) 555-0123",
  phoneClean: "+15615550123",
  whatsapp: "15615550123",
  email: "info@bocamarble.com",
  address: {
    street: "1234 N Federal Hwy",
    city: "Boca Raton",
    state: "FL",
    zip: "33432",
    country: "US",
  },
  geo: {
    lat: 26.3683,
    lng: -80.0811,
  },
  hours: "Mon-Fri 8AM-6PM, Sat 9AM-3PM",
  yearFounded: 2012,
  tagline: "Premium Marble & Stone Fabrication in Boca Raton",
  description:
    "Boca Raton's premier marble, granite, quartz & quartzite countertop fabrication and installation. Serving South Florida with luxury stone surfaces since 2012. Free estimates.",
} as const;

export const SOCIAL = {
  instagram: "https://instagram.com/bocamarble",
  facebook: "https://facebook.com/bocamarble",
  google: "https://g.page/bocamarble",
  yelp: "https://yelp.com/biz/boca-marble-boca-raton",
  houzz: "https://houzz.com/professionals/bocamarble",
} as const;

export const CTA = {
  phone: {
    label: "Call Now",
    href: `tel:${SITE.phoneClean}`,
    ariaLabel: `Call Boca Marble at ${SITE.phone}`,
  },
  whatsapp: {
    label: "WhatsApp",
    href: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in a free countertop estimate.")}`,
    ariaLabel: "Message Boca Marble on WhatsApp",
  },
  estimate: {
    label: "Free Estimate",
    href: "/free-estimate",
    ariaLabel: "Get a free countertop estimate",
  },
} as const;
