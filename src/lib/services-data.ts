export interface ServicePage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const SERVICES: ServicePage[] = [
  {
    slug: "marble-countertops",
    title: "Marble Countertops",
    h1: "Marble Countertops in Boca Raton",
    metaTitle:
      "Marble Countertops Boca Raton | Fabrication & Installation | Boca Marble",
    metaDescription:
      "Premium marble countertop fabrication & installation in Boca Raton. Calacatta, Carrara, Statuario & exotic marbles. Free estimates. Call (954) 412-9300.",
    heroSubtitle:
      "Timeless elegance crafted by Boca Raton's leading marble fabricators",
    intro: "Marble countertops represent the pinnacle of luxury in home design. At Boca Marble, we source the world's finest marbles — from the quarries of Carrara to the exotic veins of Calacatta Gold — and fabricate each slab with precision CNC technology and hand-finished edges. Every installation is backed by our lifetime craftsmanship warranty.",
    features: [
      "Calacatta, Carrara, Statuario & exotic marble varieties",
      "Precision CNC fabrication with digital templating",
      "Custom edge profiles: ogee, bullnose, mitered, waterfall",
      "Full-slab backsplash & book-match capability",
      "Professional sealing & lifetime maintenance guidance",
      "Residential & commercial marble installation",
    ],
    faqs: [
      {
        question: "How much do marble countertops cost in Boca Raton?",
        answer:
          "Marble countertop prices in Boca Raton typically range from $75 to $250+ per square foot installed, depending on the marble variety, edge profile, and project complexity. Carrara marble starts around $75/sqft, while premium Calacatta Gold can exceed $200/sqft. Contact us for a free, no-obligation estimate tailored to your project.",
      },
      {
        question: "Is marble a good choice for kitchen countertops?",
        answer:
          "Marble is an excellent choice for kitchen countertops when properly sealed and maintained. Its natural beauty and cool surface temperature are ideal for baking. We apply professional-grade sealers and provide detailed care instructions to ensure your marble countertops maintain their beauty for decades.",
      },
      {
        question:
          "How long does marble countertop installation take in Boca Raton?",
        answer:
          "Most residential marble countertop installations in Boca Raton are completed within 1-2 days. The full process — from templating to installation — typically takes 7-10 business days. We offer expedited timelines for urgent projects.",
      },
      {
        question:
          "What is the difference between Calacatta and Carrara marble?",
        answer:
          "Carrara marble features softer gray veining on a white-to-gray background, while Calacatta marble has bolder, more dramatic gold and gray veining on a bright white base. Calacatta is rarer and more expensive, often considered the most luxurious marble variety available.",
      },
    ],
    relatedServices: [
      "granite-countertops",
      "quartz-countertops",
      "kitchen-countertops",
      "bathroom-countertops",
    ],
  },
  {
    slug: "granite-countertops",
    title: "Granite Countertops",
    h1: "Granite Countertops in Boca Raton",
    metaTitle:
      "Granite Countertops Boca Raton | Fabrication & Installation | Boca Marble",
    metaDescription:
      "Expert granite countertop fabrication & installation in Boca Raton. 500+ colors, durable & heat-resistant. Free estimates. Call (954) 412-9300.",
    heroSubtitle:
      "Durable natural beauty for kitchens and bathrooms across Boca Raton",
    intro: "Granite countertops combine unmatched durability with natural beauty that no two slabs can replicate. Our state-of-the-art fabrication facility in South Florida processes over 500 granite varieties — from classic Absolute Black to exotic Blue Bahia — delivering precision-cut, polished, and perfectly installed surfaces for every project.",
    features: [
      "500+ granite colors from Brazil, India, Italy & worldwide",
      "Heat, scratch & stain resistant natural stone",
      "Precision CNC cutting & polished edge profiles",
      "Residential & commercial granite fabrication",
      "Same-week templating available",
      "Professional sealing included with every installation",
    ],
    faqs: [
      {
        question: "How much do granite countertops cost in Boca Raton?",
        answer:
          "Granite countertop prices in Boca Raton range from $50 to $150+ per square foot installed. Standard granite colors start around $50/sqft, while exotic granites can exceed $150/sqft. We offer free in-home estimates to provide exact pricing for your project.",
      },
      {
        question: "Is granite better than quartz for kitchen countertops?",
        answer:
          "Both granite and quartz are excellent kitchen countertop materials. Granite offers unique natural patterns and superior heat resistance, while quartz provides more consistent patterns and requires less maintenance. We help you choose the best material for your lifestyle and design preferences.",
      },
      {
        question: "How do I maintain granite countertops?",
        answer:
          "Granite countertops are low-maintenance. Clean daily with mild soap and water, reseal annually (we offer sealing services), and avoid harsh chemicals. With proper care, granite countertops last a lifetime.",
      },
    ],
    relatedServices: [
      "marble-countertops",
      "quartz-countertops",
      "quartzite-countertops",
      "kitchen-countertops",
    ],
  },
  {
    slug: "quartz-countertops",
    title: "Quartz Countertops",
    h1: "Quartz Countertops in Boca Raton",
    metaTitle:
      "Quartz Countertops Boca Raton | Silestone, Caesarstone, Cambria | Boca Marble",
    metaDescription:
      "Premium quartz countertop installation in Boca Raton. Silestone, Caesarstone, Cambria & more. Non-porous, low maintenance. Free estimates. Call (954) 412-9300.",
    heroSubtitle:
      "Low-maintenance luxury with endless design possibilities",
    intro: "Quartz countertops offer the beauty of natural stone with engineered durability and zero maintenance. As authorized fabricators for Silestone, Caesarstone, and Cambria, we deliver flawless quartz installations throughout Boca Raton. Non-porous surfaces mean no sealing, no staining, and no bacteria — perfect for busy South Florida kitchens.",
    features: [
      "Authorized Silestone, Caesarstone & Cambria fabricator",
      "Non-porous surface — no sealing required",
      "Stain, scratch & bacteria resistant",
      "Marble-look quartz options for luxury aesthetic",
      "Consistent color & pattern across slabs",
      "15-year manufacturer warranty",
    ],
    faqs: [
      {
        question: "How much do quartz countertops cost in Boca Raton?",
        answer:
          "Quartz countertop prices in Boca Raton range from $55 to $175 per square foot installed. Entry-level quartz starts around $55/sqft, while premium brands like Cambria can reach $175/sqft. Request a free estimate for exact pricing.",
      },
      {
        question: "Can quartz countertops look like marble?",
        answer:
          "Yes! Modern quartz manufacturers produce stunning marble-look options that closely replicate Calacatta, Carrara, and Statuario marble patterns. These offer marble's beauty without the maintenance requirements. Visit our showroom to see our marble-look quartz collection.",
      },
      {
        question: "Do quartz countertops need to be sealed?",
        answer:
          "No. Quartz countertops are non-porous and never require sealing. This is one of their biggest advantages over natural stone — they resist stains, bacteria, and moisture without any maintenance beyond normal cleaning.",
      },
    ],
    relatedServices: [
      "marble-countertops",
      "granite-countertops",
      "quartzite-countertops",
      "kitchen-countertops",
    ],
  },
  {
    slug: "quartzite-countertops",
    title: "Quartzite Countertops",
    h1: "Quartzite Countertops in Boca Raton",
    metaTitle:
      "Quartzite Countertops Boca Raton | Taj Mahal, Super White | Boca Marble",
    metaDescription:
      "Exotic quartzite countertop fabrication in Boca Raton. Taj Mahal, Super White, Mont Blanc & more. Natural beauty meets durability. Free estimates.",
    heroSubtitle:
      "Nature's hardest stone, fabricated to perfection in South Florida",
    intro: "Quartzite is the ultimate natural stone — harder than granite, more beautiful than marble, and completely unique in every slab. Our South Florida fabrication facility specializes in quartzite, from the golden warmth of Taj Mahal to the crystalline brilliance of Cristallo. Experience natural luxury that lasts generations.",
    features: [
      "Taj Mahal, Super White, Mont Blanc & exotic varieties",
      "Harder than granite — exceptional durability",
      "Natural marble-like beauty without marble's porosity",
      "UV resistant — perfect for outdoor kitchens",
      "Book-match & waterfall edge capabilities",
      "Expert quartzite fabrication & installation",
    ],
    faqs: [
      {
        question: "What is the difference between quartz and quartzite?",
        answer:
          "Quartzite is a natural stone formed from sandstone under extreme heat and pressure, while quartz countertops are engineered surfaces made from crushed quartz mixed with resin. Quartzite offers unique natural patterns and superior heat resistance, while quartz offers more consistency and lower maintenance.",
      },
      {
        question: "Is quartzite more expensive than marble?",
        answer:
          "Quartzite and marble pricing overlap significantly. Standard quartzite starts around $70/sqft installed, while exotic varieties like Cristallo or Dolce Vita can exceed $200/sqft. Similarly, marble ranges from $75-$250+/sqft. We can help you find options within any budget.",
      },
    ],
    relatedServices: [
      "marble-countertops",
      "granite-countertops",
      "quartz-countertops",
      "kitchen-countertops",
    ],
  },
  {
    slug: "kitchen-countertops",
    title: "Kitchen Countertops",
    h1: "Kitchen Countertops in Boca Raton",
    metaTitle:
      "Kitchen Countertops Boca Raton | Marble, Granite, Quartz | Boca Marble",
    metaDescription:
      "Transform your Boca Raton kitchen with premium countertops. Marble, granite, quartz & quartzite. Expert fabrication & installation. Free in-home estimates.",
    heroSubtitle:
      "Transform your kitchen with South Florida's finest stone surfaces",
    intro: "Your kitchen countertop is the centerpiece of your home. Whether you're renovating a waterfront estate in Royal Palm Yacht Club or updating a modern condo in Boca West, we deliver countertops that elevate every kitchen. From material selection to final installation, our team manages every detail for a flawless result.",
    features: [
      "Full material selection: marble, granite, quartz, quartzite",
      "Island countertops with waterfall edges",
      "Full-slab backsplash integration",
      "Undermount sink & cooktop cutouts",
      "Kitchen island fabrication & installation",
      "Coordination with contractors & designers",
    ],
    faqs: [
      {
        question:
          "What is the best countertop material for a kitchen in Boca Raton?",
        answer:
          "The best kitchen countertop depends on your priorities. Quartz is ideal for low maintenance, granite offers durability and natural beauty, marble provides unmatched elegance, and quartzite combines the best of all worlds. Visit our Boca Raton showroom to compare materials side by side.",
      },
      {
        question:
          "How long does a kitchen countertop installation take?",
        answer:
          "Most kitchen countertop installations in Boca Raton are completed in one day. The complete process from templating to installation typically takes 5-10 business days, depending on the material and project complexity.",
      },
    ],
    relatedServices: [
      "marble-countertops",
      "granite-countertops",
      "quartz-countertops",
      "bathroom-countertops",
    ],
  },
  {
    slug: "bathroom-countertops",
    title: "Bathroom Countertops",
    h1: "Bathroom Countertops & Vanities in Boca Raton",
    metaTitle:
      "Bathroom Countertops Boca Raton | Marble Vanities | Boca Marble",
    metaDescription:
      "Luxury bathroom countertops & marble vanities in Boca Raton. Custom fabrication for single & double vanities, shower walls & more. Free estimates.",
    heroSubtitle:
      "Luxury bathroom surfaces crafted for Boca Raton's finest homes",
    intro: "Elevate your bathroom with custom stone vanities, shower surrounds, and accent walls. From a simple single vanity to a full master bath renovation with book-matched marble walls, our fabrication team delivers bathroom surfaces that transform your daily routine into a luxury experience.",
    features: [
      "Single & double vanity countertops",
      "Marble shower walls & surrounds",
      "Tub decks & surrounds",
      "Custom shapes & cutouts for vessel sinks",
      "Matching backsplash & accent walls",
      "Waterproof installation for wet areas",
    ],
    faqs: [
      {
        question:
          "What is the best material for bathroom countertops in Boca Raton?",
        answer:
          "Marble is the most popular choice for luxury bathroom countertops in Boca Raton, offering timeless elegance. Quartz is ideal for families seeking low maintenance, while granite provides excellent durability. All materials are suitable for bathroom environments with proper installation.",
      },
    ],
    relatedServices: [
      "marble-countertops",
      "kitchen-countertops",
      "countertop-installation",
      "countertop-fabrication",
    ],
  },
  {
    slug: "outdoor-countertops",
    title: "Outdoor Countertops",
    h1: "Outdoor Kitchen Countertops in Boca Raton",
    metaTitle:
      "Outdoor Kitchen Countertops Boca Raton | Weather-Resistant Stone | Boca Marble",
    metaDescription:
      "Outdoor kitchen countertops built for Boca Raton's climate. Granite, quartzite & porcelain. UV & weather resistant. Free estimates. Call (954) 412-9300.",
    heroSubtitle:
      "Weather-resistant stone surfaces for South Florida outdoor living",
    intro: "Boca Raton's outdoor lifestyle demands countertops that withstand Florida's sun, rain, and humidity. We specialize in outdoor kitchen countertops using UV-resistant granite, quartzite, and porcelain surfaces that maintain their beauty through every season. From pool-side bars to summer kitchens, we build outdoor surfaces that last.",
    features: [
      "UV-resistant granite & quartzite selection",
      "Porcelain & Dekton outdoor options",
      "Weatherproof fabrication & installation",
      "Outdoor kitchen island fabrication",
      "Built-in grill & sink cutouts",
      "Pool deck & patio bar countertops",
    ],
    faqs: [
      {
        question:
          "What is the best outdoor countertop material for Florida?",
        answer:
          "Granite and porcelain slab (Dekton/Neolith) are the best outdoor countertop materials for Florida. They resist UV fading, heat, and moisture. Quartzite is also excellent for outdoor use. We recommend avoiding marble for fully exposed outdoor applications.",
      },
    ],
    relatedServices: [
      "granite-countertops",
      "quartzite-countertops",
      "kitchen-countertops",
      "countertop-installation",
    ],
  },
  {
    slug: "countertop-installation",
    title: "Countertop Installation",
    h1: "Professional Countertop Installation in Boca Raton",
    metaTitle:
      "Countertop Installation Boca Raton | Same-Week Service | Boca Marble",
    metaDescription:
      "Expert countertop installation in Boca Raton. Digital templating, precision fitting, same-week scheduling. Licensed & insured. Free estimates.",
    heroSubtitle:
      "Licensed, insured & precision-focused installation teams",
    intro: "Our installation teams are the best in South Florida. Using digital laser templating for precision measurements and specialized equipment for safe slab handling, we deliver flawless countertop installations every time. Every installer is licensed, insured, and trained to handle the most complex residential and commercial projects.",
    features: [
      "Digital laser templating for perfect fit",
      "Licensed & insured installation crews",
      "Same-week installation available",
      "Old countertop removal & disposal included",
      "Plumbing disconnect & reconnect coordination",
      "Final cleanup & walkthrough inspection",
    ],
    faqs: [
      {
        question: "How long does countertop installation take?",
        answer:
          "Most countertop installations are completed in 2-4 hours for a standard kitchen. Larger projects or multi-room installations may take a full day. We schedule installations around your convenience and complete most residential projects within one visit.",
      },
      {
        question: "Do you remove old countertops?",
        answer:
          "Yes, old countertop removal is included in our installation service. Our team carefully removes and disposes of existing countertops, inspects the cabinetry, and makes any necessary adjustments before installing your new surfaces.",
      },
    ],
    relatedServices: [
      "countertop-fabrication",
      "kitchen-countertops",
      "bathroom-countertops",
      "marble-countertops",
    ],
  },
  {
    slug: "countertop-fabrication",
    title: "Countertop Fabrication",
    h1: "Custom Countertop Fabrication in Boca Raton",
    metaTitle:
      "Countertop Fabrication Boca Raton | CNC Stone Cutting | Boca Marble",
    metaDescription:
      "State-of-the-art countertop fabrication in Boca Raton. CNC cutting, digital templating, custom edge profiles. Marble, granite, quartz & quartzite.",
    heroSubtitle:
      "State-of-the-art CNC fabrication for flawless stone surfaces",
    intro: "Our 15,000 sq ft fabrication facility houses the latest CNC bridge saws, waterjet cutters, and edge polishing machines. Every slab is digitally templated, precision-cut, and hand-finished by master craftsmen. This combination of technology and expertise delivers countertop fabrication quality that sets the standard in South Florida.",
    features: [
      "15,000 sq ft state-of-the-art facility",
      "5-axis CNC bridge saws for precision cutting",
      "Waterjet cutting for custom inlays & shapes",
      "20+ edge profile options",
      "Digital templating for exact measurements",
      "Quality control inspection on every slab",
    ],
    faqs: [
      {
        question:
          "What edge profiles do you offer for countertops?",
        answer:
          "We offer 20+ edge profiles including eased, beveled, bullnose, half bullnose, ogee, dupont, mitered, waterfall, and custom profiles. Our CNC machines can create virtually any edge design. Visit our showroom to see and feel our full edge profile selection.",
      },
    ],
    relatedServices: [
      "countertop-installation",
      "marble-countertops",
      "granite-countertops",
      "quartz-countertops",
    ],
  },
  {
    slug: "commercial-countertops",
    title: "Commercial Countertops",
    h1: "Commercial Countertop Fabrication & Installation in Boca Raton",
    metaTitle:
      "Commercial Countertops Boca Raton | Hotels, Restaurants, Offices | Boca Marble",
    metaDescription:
      "Commercial countertop fabrication for Boca Raton businesses. Hotels, restaurants, offices, condos. Large-scale projects, tight deadlines. Free consultation.",
    heroSubtitle:
      "Large-scale stone fabrication for South Florida's finest commercial projects",
    intro: "From five-star hotel lobbies to restaurant bar tops, we deliver commercial stone fabrication at scale. Our team manages complex multi-unit installations, coordinates with general contractors, and meets the tight deadlines that commercial projects demand. Trusted by leading developers and hospitality brands across South Florida.",
    features: [
      "Multi-unit & large-scale fabrication capacity",
      "GC & designer coordination",
      "Hospitality, restaurant & office specialization",
      "High-rise & condo building expertise",
      "Project management & scheduling",
      "Volume pricing available",
    ],
    faqs: [
      {
        question:
          "Do you handle large commercial stone projects?",
        answer:
          "Yes, our facility and team are equipped for projects of any scale — from single-restaurant bar tops to 200+ unit condo buildings. We maintain large slab inventories and can scale our production to meet aggressive commercial timelines.",
      },
    ],
    relatedServices: [
      "countertop-fabrication",
      "countertop-installation",
      "marble-countertops",
      "granite-countertops",
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
