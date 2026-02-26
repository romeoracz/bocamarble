export interface AreaPage {
  slug: string;
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  neighborhoods: string[];
  zipCodes: string[];
  distanceFromHQ: string;
}

export const AREAS: AreaPage[] = [
  {
    slug: "boca-raton",
    name: "Boca Raton",
    county: "Palm Beach",
    metaTitle:
      "Marble & Stone Countertops Boca Raton | Fabrication & Install | Boca Marble",
    metaDescription:
      "Boca Raton's #1 countertop fabricator. Marble, granite, quartz & quartzite countertops. 1,000+ projects completed. Free estimates. Call (954) 412-9300.",
    h1: "Marble & Stone Countertops in Boca Raton, FL",
    intro: "As Boca Raton's premier countertop fabrication company, we've installed thousands of surfaces across the city's most prestigious neighborhoods. From waterfront estates in Royal Palm Yacht & Country Club to modern condos in Boca West, our team delivers luxury countertops that match the elegance Boca Raton demands.",
    neighborhoods: [
      "Royal Palm Yacht & Country Club",
      "Boca West Country Club",
      "The Sanctuary",
      "Woodfield Country Club",
      "St. Andrews Country Club",
      "Broken Sound",
      "Mizner Park",
      "Town Center",
      "West Boca Raton",
      "East Boca Raton",
      "Boca Del Mar",
      "Boca Pointe",
      "Boca Falls",
      "Boca Isles",
      "The Polo Club",
    ],
    zipCodes: ["33427", "33428", "33429", "33431", "33432", "33433", "33434", "33486", "33487", "33496", "33497", "33498"],
    distanceFromHQ: "Local",
  },
  {
    slug: "delray-beach",
    name: "Delray Beach",
    county: "Palm Beach",
    metaTitle:
      "Countertop Installation Delray Beach | Marble & Granite | Boca Marble",
    metaDescription:
      "Premium countertop fabrication & installation in Delray Beach. Marble, granite, quartz. Minutes from our Boca Raton facility. Free estimates.",
    h1: "Countertop Fabrication & Installation in Delray Beach, FL",
    intro: "Just minutes north of our Boca Raton facility, Delray Beach homeowners enjoy fast turnaround times and premium countertop services. From Atlantic Avenue's vibrant restaurant scene to the luxury homes of Gulf Stream and Seagate, we serve all of Delray Beach with the same attention to quality.",
    neighborhoods: [
      "Atlantic Avenue",
      "Pineapple Grove",
      "Seagate",
      "Lake Ida",
      "Tropic Isle",
      "Delray Beach Shores",
      "Barwick Estates",
      "Kings Point",
    ],
    zipCodes: ["33444", "33445", "33446", "33448", "33482", "33483", "33484"],
    distanceFromHQ: "8 miles",
  },
  {
    slug: "deerfield-beach",
    name: "Deerfield Beach",
    county: "Broward",
    metaTitle:
      "Countertop Installation Deerfield Beach | Marble & Granite | Boca Marble",
    metaDescription:
      "Expert countertop fabrication & installation in Deerfield Beach. Marble, granite, quartz countertops. Near our Boca Raton facility. Free estimates.",
    h1: "Countertop Fabrication & Installation in Deerfield Beach, FL",
    intro: "Deerfield Beach is one of our closest service areas, just south of our Boca Raton headquarters. We serve Deerfield Beach's oceanfront condos, residential communities, and commercial properties with full-service stone fabrication and installation.",
    neighborhoods: [
      "Cove Beach",
      "Deer Creek",
      "Century Village",
      "Crystal Lake",
      "Waterways",
      "The Palms",
    ],
    zipCodes: ["33441", "33442", "33443"],
    distanceFromHQ: "5 miles",
  },
  {
    slug: "pompano-beach",
    name: "Pompano Beach",
    county: "Broward",
    metaTitle:
      "Countertop Installation Pompano Beach | Marble & Granite | Boca Marble",
    metaDescription:
      "Premium countertop fabrication & installation in Pompano Beach. All stone types. Quick turnaround from our South FL facility. Free estimates.",
    h1: "Countertop Fabrication & Installation in Pompano Beach, FL",
    intro: "Pompano Beach homeowners and businesses trust Boca Marble for their countertop needs. Our proximity in Boca Raton means fast service, quick turnaround, and easy showroom access. We serve all of Pompano Beach from the beaches to the western communities.",
    neighborhoods: [
      "Lighthouse Point",
      "Palm Aire",
      "Cypress Creek",
      "Pompano Beach Highlands",
      "Pompano Isles",
    ],
    zipCodes: ["33060", "33061", "33062", "33063", "33064", "33069"],
    distanceFromHQ: "12 miles",
  },
  {
    slug: "coral-springs",
    name: "Coral Springs",
    county: "Broward",
    metaTitle:
      "Countertop Installation Coral Springs | Marble & Granite | Boca Marble",
    metaDescription:
      "Top-rated countertop fabrication & installation in Coral Springs. Marble, granite, quartz. Serving families across Coral Springs. Free estimates.",
    h1: "Countertop Fabrication & Installation in Coral Springs, FL",
    intro: "Coral Springs families trust Boca Marble for countertop projects that combine quality, value, and professionalism. We serve Coral Springs' family-oriented communities with the same luxury fabrication and installation that we deliver throughout South Florida.",
    neighborhoods: [
      "Heron Bay",
      "Eagle Trace",
      "Wyndham",
      "The Walk",
      "Cypress Run",
      "Ramblewood",
    ],
    zipCodes: ["33065", "33067", "33071", "33073", "33075", "33076"],
    distanceFromHQ: "15 miles",
  },
  {
    slug: "parkland",
    name: "Parkland",
    county: "Broward",
    metaTitle:
      "Countertop Installation Parkland FL | Luxury Stone | Boca Marble",
    metaDescription:
      "Luxury countertop fabrication for Parkland's finest homes. Premium marble, granite, quartz & quartzite. Free in-home estimates. Call (954) 412-9300.",
    h1: "Luxury Countertop Installation in Parkland, FL",
    intro: "Parkland's luxury homes demand premium countertop surfaces. As the area's preferred stone fabricator, we've outfitted kitchens and bathrooms in Heron Bay, MariSol, Watercrest, and throughout Parkland's distinguished communities with the finest marble, granite, and quartzite available.",
    neighborhoods: [
      "Heron Bay",
      "MariSol",
      "Watercrest",
      "Parkland Golf & Country Club",
      "Parkland Isles",
      "Fox Ridge",
    ],
    zipCodes: ["33067", "33073", "33076"],
    distanceFromHQ: "18 miles",
  },
  {
    slug: "boynton-beach",
    name: "Boynton Beach",
    county: "Palm Beach",
    metaTitle:
      "Countertop Installation Boynton Beach | Marble & Granite | Boca Marble",
    metaDescription:
      "Expert countertop fabrication & installation in Boynton Beach. All stone types. Close to our Boca Raton facility. Free estimates available.",
    h1: "Countertop Fabrication & Installation in Boynton Beach, FL",
    intro: "Boynton Beach residents enjoy convenient access to our Boca Raton showroom and fabrication facility. We serve Boynton Beach's diverse communities with premium countertop solutions for kitchens, bathrooms, and outdoor living spaces.",
    neighborhoods: [
      "Canyon Lakes",
      "Aberdeen",
      "Boynton Lakes",
      "Indian Spring",
      "Leisureville",
      "Ocean Ridge",
    ],
    zipCodes: ["33424", "33425", "33426", "33435", "33436", "33437"],
    distanceFromHQ: "12 miles",
  },
  {
    slug: "highland-beach",
    name: "Highland Beach",
    county: "Palm Beach",
    metaTitle:
      "Countertop Installation Highland Beach | Luxury Marble | Boca Marble",
    metaDescription:
      "Premium countertop fabrication for Highland Beach oceanfront estates. Luxury marble, exotic stone. White-glove service. Free estimates.",
    h1: "Luxury Countertop Installation in Highland Beach, FL",
    intro: "Highland Beach's exclusive oceanfront residences deserve the finest stone surfaces available. We provide white-glove countertop fabrication and installation services to Highland Beach's luxury condominiums and waterfront estates, with materials and craftsmanship befitting this prestigious community.",
    neighborhoods: [
      "Boca Highland Beach Club & Marina",
      "Toscana",
      "Coronado",
      "Trafalgar",
      "Highland Beach Club",
    ],
    zipCodes: ["33487"],
    distanceFromHQ: "5 miles",
  },
  {
    slug: "coconut-creek",
    name: "Coconut Creek",
    county: "Broward",
    metaTitle:
      "Countertop Installation Coconut Creek | Marble & Granite | Boca Marble",
    metaDescription:
      "Quality countertop fabrication & installation in Coconut Creek. Marble, granite, quartz. Fast service from our Boca facility. Free estimates.",
    h1: "Countertop Fabrication & Installation in Coconut Creek, FL",
    intro: "Coconut Creek homeowners choose Boca Marble for reliable, high-quality countertop services. Our nearby Boca Raton facility ensures fast turnaround and easy access to our full stone showroom.",
    neighborhoods: [
      "Wyndhurst",
      "Palm Beach Farms",
      "Regency Lakes",
      "Victoria Isles",
      "The Preserve",
    ],
    zipCodes: ["33063", "33066", "33073", "33097"],
    distanceFromHQ: "10 miles",
  },
  {
    slug: "west-palm-beach",
    name: "West Palm Beach",
    county: "Palm Beach",
    metaTitle:
      "Countertop Installation West Palm Beach | Marble & Granite | Boca Marble",
    metaDescription:
      "Premium countertop fabrication for West Palm Beach homes & businesses. Full-service marble, granite, quartz installation. Free estimates.",
    h1: "Countertop Fabrication & Installation in West Palm Beach, FL",
    intro: "West Palm Beach's dynamic mix of historic estates, modern condos, and vibrant commercial spaces creates diverse countertop needs — and we serve them all. From Flagler Drive waterfront properties to South Dixie Highway businesses, Boca Marble delivers West Palm Beach's finest stone surfaces.",
    neighborhoods: [
      "El Cid",
      "Flamingo Park",
      "Northwood",
      "SoSo",
      "Palm Beach Lakes",
      "CityPlace",
      "Grandview Heights",
    ],
    zipCodes: ["33401", "33402", "33403", "33404", "33405", "33406", "33407", "33409", "33410", "33411", "33412", "33413", "33414", "33415", "33416", "33417"],
    distanceFromHQ: "25 miles",
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    county: "Broward",
    metaTitle:
      "Countertop Installation Fort Lauderdale | Marble & Granite | Boca Marble",
    metaDescription:
      "Expert countertop fabrication for Fort Lauderdale. Marble, granite, quartz countertops for homes, yachts & commercial. Free estimates.",
    h1: "Countertop Fabrication & Installation in Fort Lauderdale, FL",
    intro: "Fort Lauderdale's luxury waterfront lifestyle demands premium stone surfaces. From Las Olas Boulevard to the Isles, we fabricate and install countertops for Fort Lauderdale's finest homes, yachts, restaurants, and commercial properties.",
    neighborhoods: [
      "Las Olas",
      "Rio Vista",
      "Victoria Park",
      "Coral Ridge",
      "Harbor Beach",
      "The Isles",
      "Lauderdale Beach",
    ],
    zipCodes: ["33301", "33304", "33305", "33306", "33308", "33309", "33311", "33312", "33315", "33316"],
    distanceFromHQ: "25 miles",
  },
  {
    slug: "wellington",
    name: "Wellington",
    county: "Palm Beach",
    metaTitle:
      "Countertop Installation Wellington FL | Marble & Granite | Boca Marble",
    metaDescription:
      "Premium countertop services for Wellington's luxury equestrian estates. Marble, granite, quartz. Full fabrication & installation. Free estimates.",
    h1: "Countertop Fabrication & Installation in Wellington, FL",
    intro: "Wellington's world-renowned equestrian community demands luxury in every detail — including their countertops. We serve Wellington's estates, villas, and family homes with premium stone fabrication and installation backed by Boca Raton craftsmanship.",
    neighborhoods: [
      "Palm Beach Polo",
      "Olympia",
      "Grand Isles",
      "Versailles",
      "Sugar Pond Manor",
      "Meadowland Cove",
    ],
    zipCodes: ["33414", "33449"],
    distanceFromHQ: "30 miles",
  },
];

export function getAreaBySlug(slug: string): AreaPage | undefined {
  return AREAS.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return AREAS.map((a) => a.slug);
}
