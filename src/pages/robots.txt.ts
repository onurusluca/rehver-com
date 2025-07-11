import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://rehver.com/sitemap.xml

# Crawl-delay for politeness
Crawl-delay: 1
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
