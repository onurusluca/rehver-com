import type { APIRoute } from "astro";

const SITE_URL = "https://rehver-com.vercel.app";
const PRODUCTION_HOST = "rehver.com";

export const GET: APIRoute = async () => {
  const robotsTxt = `
User-agent: *
Disallow: /arama
Disallow: /en/search
Allow: /

User-agent: Googlebot

User-agent: Bingbot
Crawl-delay: 1

User-agent: Yandex
Crawl-delay: 1
Host: ${PRODUCTION_HOST}

Sitemap: ${SITE_URL}/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
