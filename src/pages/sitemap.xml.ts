// src/pages/sitemap.xml.ts

import { supabaseServer } from "@/utils/supabase";
import type { APIRoute } from "astro";

const BASE_URL = "https://rehver-com.vercel.app";
const ITEMS_PER_PAGE = 500;

export const GET: APIRoute = async () => {
  const [placesResult, seoPagesResult] = await Promise.all([
    supabaseServer.from("places").select("*", { count: "exact", head: true }),
    supabaseServer
      .from("seo_pages")
      .select("*", { count: "exact", head: true }),
  ]);

  const placesCount = placesResult.count ?? 0;
  const seoPagesCount = seoPagesResult.count ?? 0;

  const placesPages = Math.ceil(placesCount / ITEMS_PER_PAGE);
  const seoPages = Math.ceil(seoPagesCount / ITEMS_PER_PAGE);

  const lastmod = new Date().toISOString();
  let sitemapLinks = "";

  // Generate links for places
  for (let i = 1; i <= placesPages; i++) {
    sitemapLinks += `
  <sitemap>
    <loc>${BASE_URL}/sitemaps/places-${i}.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`;
  }

  // CORRECTED: Generate links for seo-pages
  for (let i = 1; i <= seoPages; i++) {
    sitemapLinks += `
  <sitemap>
    <loc>${BASE_URL}/sitemaps/seo-pages-${i}.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`;
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemaps/main.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  ${sitemapLinks}
</sitemapindex>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
};
