import type { APIRoute } from "astro";

// The base URL for your sitemap.
// Change this to the production URL when you go live.
const SITE_URL = "https://rehver-com.vercel.app";
const PRODUCTION_HOST = "rehver.com"; // For Yandex Host directive

export const GET: APIRoute = async () => {
  const robotsTxt = `
# ===================================================================
# Rules for all web crawlers
# ===================================================================
User-agent: *

# Disallow crawling of on-site search result pages. This prevents
# search engines from indexing duplicate or low-value content and
# helps focus the crawl budget on your actual pages.
Disallow: /arama
Disallow: /en/search

# Add any other directories or pages you do not want crawlers 
# to access here if you add them in the future.

# Allow all other content.
Allow: /


# ===================================================================
# Crawler-specific rules
# ===================================================================

# Google's crawler
User-agent: Googlebot
# Google does not support 'Crawl-delay'. Adjust crawl rate in
# Google Search Console if needed.


# Bing's crawler
User-agent: Bingbot
Crawl-delay: 1


# Yandex's crawler (popular in Turkey)
User-agent: Yandex
Crawl-delay: 1
# The Host directive specifies the main mirror of the site for Yandex.
# This should always point to your main production domain.
Host: ${PRODUCTION_HOST}


# ===================================================================
# Sitemap Location
# ===================================================================

# Point all crawlers to your main sitemap index file.
Sitemap: ${SITE_URL}/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
