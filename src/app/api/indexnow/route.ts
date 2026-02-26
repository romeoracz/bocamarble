import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllAreaSlugs } from "@/lib/areas-data";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "your-indexnow-key-here";

function getAllUrls(): string[] {
  const staticUrls = [
    SITE.url,
    `${SITE.url}/services`,
    `${SITE.url}/areas`,
    `${SITE.url}/gallery`,
    `${SITE.url}/about`,
    `${SITE.url}/contact`,
    `${SITE.url}/free-estimate`,
  ];

  const serviceUrls = getAllServiceSlugs().map(
    (slug) => `${SITE.url}/services/${slug}`
  );

  const areaUrls = getAllAreaSlugs().map(
    (slug) => `${SITE.url}/areas/${slug}`
  );

  return [...staticUrls, ...serviceUrls, ...areaUrls];
}

export async function POST() {
  const urls = getAllUrls();

  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  const results = await Promise.allSettled(
    engines.map(async (engine) => {
      const response = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          host: "bocamarble.com",
          key: INDEXNOW_KEY,
          keyLocation: `${SITE.url}/${INDEXNOW_KEY}.txt`,
          urlList: urls,
        }),
      });
      return { engine, status: response.status };
    })
  );

  return NextResponse.json({
    submitted: urls.length,
    engines: results.map((r) =>
      r.status === "fulfilled" ? r.value : { error: String(r.reason) }
    ),
  });
}

export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    totalUrls: getAllUrls().length,
    urls: getAllUrls(),
  });
}
