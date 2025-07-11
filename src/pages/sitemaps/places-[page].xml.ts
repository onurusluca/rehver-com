// src/pages/sitemaps/places-[page].xml.ts

import { supabaseServer } from "@/utils/supabase";
import type { APIRoute } from "astro";

const BASE_URL = "https://rehver-com.vercel.app";
const ITEMS_PER_PAGE = 500;

export const GET: APIRoute = async ({ params }) => {
  const page = parseInt(params.page || "1", 10);
  if (isNaN(page) || page < 1) {
    return new Response("Invalid page number", { status: 400 });
  }

  const from = (page - 1) * ITEMS_PER_PAGE;
  const to = page * ITEMS_PER_PAGE - 1;

  const { data: places } = await supabaseServer
    .from("places")
    .select("slug, updated_at")
    .not("slug", "is", null)
    .order("reviews_count", { ascending: false })
    .range(from, to);

  if (!places || places.length === 0) {
    return new Response("No places found for this page", { status: 404 });
  }

  const urls = places.flatMap((place) => {
    if (!place.slug) return [];
    const lastmod = place.updated_at
      ? new Date(place.updated_at).toISOString()
      : new Date().toISOString();
    return [
      { url: `${BASE_URL}/yerler/${place.slug}`, lastmod },
      { url: `${BASE_URL}/en/places/${place.slug}`, lastmod },
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
    <priority>0.9</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
};
