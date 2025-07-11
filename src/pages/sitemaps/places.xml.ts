import { supabaseServer } from "@/utils/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const { data: places } = await supabaseServer
    .from("places")
    .select("slug, updated_at")
    .not("slug", "is", null)
    .limit(50000);

  const urls: any[] = [];

  places?.forEach((place) => {
    if (place.slug) {
      // Turkish URL
      urls.push({
        url: `https://rehver.com/yerler/${place.slug}`,
        lastmod: place.updated_at
          ? new Date(place.updated_at).toISOString()
          : new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.9,
      });

      // English URL
      urls.push({
        url: `https://rehver.com/en/places/${place.slug}`,
        lastmod: place.updated_at
          ? new Date(place.updated_at).toISOString()
          : new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.9,
      });
    }
  });

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
