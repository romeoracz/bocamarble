import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

const SITEMAP_URL = `${SITE.url}/sitemap.xml`;

export async function GET() {
  const results: Record<string, unknown>[] = [];

  // Google sitemap ping
  try {
    const res = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    results.push({ engine: "Google", type: "sitemap-ping", status: res.status });
  } catch (e) {
    results.push({ engine: "Google", type: "sitemap-ping", error: String(e) });
  }

  // Bing sitemap ping
  try {
    const res = await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    results.push({ engine: "Bing", type: "sitemap-ping", status: res.status });
  } catch (e) {
    results.push({ engine: "Bing", type: "sitemap-ping", error: String(e) });
  }

  // IndexNow to all supported engines
  const indexNowKey = process.env.INDEXNOW_KEY || "bocamarble-indexnow-key";
  const host = new URL(SITE.url).hostname;

  const indexNowEndpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  const topUrls = [
    SITE.url,
    `${SITE.url}/services`,
    `${SITE.url}/services/marble-countertops`,
    `${SITE.url}/services/granite-countertops`,
    `${SITE.url}/services/quartz-countertops`,
    `${SITE.url}/areas/boca-raton`,
    `${SITE.url}/free-estimate`,
    `${SITE.url}/contact`,
    `${SITE.url}/gallery`,
  ];

  for (const endpoint of indexNowEndpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          host,
          key: indexNowKey,
          keyLocation: `${SITE.url}/${indexNowKey}.txt`,
          urlList: topUrls,
        }),
      });
      results.push({
        engine: new URL(endpoint).hostname,
        type: "indexnow",
        status: res.status,
      });
    } catch (e) {
      results.push({
        engine: new URL(endpoint).hostname,
        type: "indexnow",
        error: String(e),
      });
    }
  }

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    sitemap: SITEMAP_URL,
    results,
  });
}
