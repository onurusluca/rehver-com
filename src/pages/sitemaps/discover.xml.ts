import { supabaseServer } from "@/utils/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const { data: seoPages } = await supabaseServer
    .from("seo_pages")
    .select("slug_tr, slug_en, updated_at")
    .limit(10000);

  const urls: any[] = [];

  seoPages?.forEach((page) => {
    if (page.slug_tr) {
      urls.push({
        url: `https://rehver.com/discover/${page.slug_tr}`,
        lastmod: page.updated_at
          ? new Date(page.updated_at).toISOString()
          : new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.8,
      });
    }

    if (page.slug_en) {
      urls.push({
        url: `https://rehver.com/en/discover/${page.slug_en}`,
        lastmod: page.updated_at
          ? new Date(page.updated_at).toISOString()
          : new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.8,
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
