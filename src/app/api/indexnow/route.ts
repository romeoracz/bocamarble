import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllAreaSlugs } from "@/lib/areas-data";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "bocamarble-indexnow-key";

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
  const host = new URL(SITE.url).hostname;

  const indexNowPayload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE.url}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  // Submit to IndexNow endpoints (Bing, Yandex, Seznam, Naver)
  const indexNowEngines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
    "https://searchadvisor.naver.com/indexnow",
  ];

  const indexNowResults = await Promise.allSettled(
    indexNowEngines.map(async (engine) => {
      const response = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(indexNowPayload),
      });
      return { engine, status: response.status, statusText: response.statusText };
    })
  );

  // Ping Google with sitemap
  const googlePing = await fetch(
    `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE.url}/sitemap.xml`)}`,
    { method: "GET" }
  ).then(
    (r) => ({ engine: "Google Sitemap Ping", status: r.status }),
    (e) => ({ engine: "Google Sitemap Ping", error: String(e) })
  );

  // Ping Bing with sitemap
  const bingPing = await fetch(
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(`${SITE.url}/sitemap.xml`)}`,
    { method: "GET" }
  ).then(
    (r) => ({ engine: "Bing Sitemap Ping", status: r.status }),
    (e) => ({ engine: "Bing Sitemap Ping", error: String(e) })
  );

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    totalUrls: urls.length,
    indexNow: indexNowResults.map((r) =>
      r.status === "fulfilled" ? r.value : { error: String(r.reason) }
    ),
    sitemapPings: [googlePing, bingPing],
    urls,
  });
}

export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    totalUrls: getAllUrls().length,
    sitemapUrl: `${SITE.url}/sitemap.xml`,
    robotsUrl: `${SITE.url}/robots.txt`,
    urls: getAllUrls(),
  });
}
