import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const urls = [
    {
      url: "https://rehver.com/",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: "https://rehver.com/en/",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: "https://rehver.com/discover/",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "https://rehver.com/en/discover/",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "https://rehver.com/arama",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: "https://rehver.com/en/search",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: "https://rehver.com/about",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: "https://rehver.com/en/about",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: "https://rehver.com/contact",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rehver.com/en/contact",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
