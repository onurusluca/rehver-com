// src/pages/sitemaps/seo-pages-[page].xml.ts

import { supabaseServer } from "@/utils/supabase";
import type { APIRoute } from "astro";

const BASE_URL = "https://rehver-com.vercel.app";
const ITEMS_PER_PAGE = 500; // 500 items * 2 URLs (tr/en) = 1000 links

export const GET: APIRoute = async ({ params }) => {
  const page = parseInt(params.page || "1", 10);
  if (isNaN(page) || page < 1) {
    return new Response("Invalid page number", { status: 400 });
  }

  const from = (page - 1) * ITEMS_PER_PAGE;
  const to = page * ITEMS_PER_PAGE - 1;

  // CORRECTED: Querying the 'seo_pages' table.
  const { data: items } = await supabaseServer
    .from("seo_pages")
    // CORRECTED: Selecting the correct slug columns.
    .select("slug_tr, slug_en, updated_at")
    // CORRECTED: Sorting by 'places_count' as 'reviews_count' is not available.
    .order("places_count", { ascending: false })
    .range(from, to);

  if (!items || items.length === 0) {
    return new Response("No items found for this page", { status: 404 });
  }

  const urls = items.flatMap((item) => {
    // Ensure both slugs exist before creating links
    if (!item.slug_tr || !item.slug_en) return [];

    const lastmod = item.updated_at
      ? new Date(item.updated_at).toISOString()
      : new Date().toISOString();
    return [
      // Turkish URL using slug_tr
      { url: `${BASE_URL}/kesfet/${item.slug_tr}`, lastmod },
      // English URL using slug_en
      { url: `${BASE_URL}/en/discover/${item.slug_en}`, lastmod },
    ];
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
};
