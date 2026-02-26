#!/bin/bash
# Boca Marble — Search Engine Indexing Submission Script
# Run after deployment: bash scripts/submit-indexing.sh

SITE_URL="https://bocamarble.com"
SITEMAP_URL="${SITE_URL}/sitemap.xml"

echo "========================================="
echo "  Boca Marble — Search Engine Indexing"
echo "========================================="
echo ""

# 1. Ping Google with sitemap
echo "[1/5] Pinging Google with sitemap..."
curl -s "https://www.google.com/ping?sitemap=${SITEMAP_URL}" > /dev/null 2>&1
echo "  ✓ Google sitemap ping sent"

# 2. Ping Bing with sitemap
echo "[2/5] Pinging Bing with sitemap..."
curl -s "https://www.bing.com/ping?sitemap=${SITEMAP_URL}" > /dev/null 2>&1
echo "  ✓ Bing sitemap ping sent"

# 3. Submit to IndexNow (Bing, Yandex, Naver)
echo "[3/5] Submitting to IndexNow endpoints..."
curl -s -X POST "${SITE_URL}/api/indexnow" \
  -H "Content-Type: application/json" | python3 -m json.tool 2>/dev/null || echo "  ⚠ IndexNow API call — check deployment"

# 4. Instructions for manual verification
echo ""
echo "[4/5] Manual verification steps needed:"
echo ""
echo "  GOOGLE SEARCH CONSOLE:"
echo "  1. Go to https://search.google.com/search-console"
echo "  2. Add property: ${SITE_URL}"
echo "  3. Verify via DNS TXT record or HTML file"
echo "  4. Submit sitemap: ${SITEMAP_URL}"
echo "  5. Request indexing for key pages"
echo ""
echo "  BING WEBMASTER TOOLS:"
echo "  1. Go to https://www.bing.com/webmasters"
echo "  2. Add site: ${SITE_URL}"
echo "  3. Verify via DNS or meta tag"
echo "  4. Submit sitemap: ${SITEMAP_URL}"
echo "  5. Generate IndexNow key and update .env"
echo ""
echo "  APPLE BUSINESS CONNECT:"
echo "  1. Go to https://businessconnect.apple.com"
echo "  2. Search for your business"
echo "  3. Claim listing and add website: ${SITE_URL}"
echo "  4. Add photos, hours, and contact info"
echo ""
echo "  YANDEX WEBMASTER:"
echo "  1. Go to https://webmaster.yandex.com"
echo "  2. Add site: ${SITE_URL}"
echo "  3. Verify and submit sitemap"
echo ""

# 5. Summary
echo "[5/5] Verification URLs:"
echo "  Sitemap:     ${SITEMAP_URL}"
echo "  Robots.txt:  ${SITE_URL}/robots.txt"
echo "  Manifest:    ${SITE_URL}/manifest.webmanifest"
echo "  IndexNow:    ${SITE_URL}/api/indexnow"
echo ""
echo "========================================="
echo "  Done! Monitor indexing in search consoles."
echo "========================================="
