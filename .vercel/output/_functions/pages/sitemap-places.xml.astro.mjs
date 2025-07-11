import { s as supabase } from '../chunks/supabase_DWgFfoOj.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const { data: places } = await supabase.from("places").select("slug, updated_at").limit(5e3);
  const urls = places?.map((place) => ({
    url: `https://rehver.com/yerler/${place.slug}`,
    lastmod: place.updated_at ? new Date(place.updated_at).toISOString() : void 0,
    changefreq: "weekly",
    priority: 0.9
  })) || [];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(
    (url) => `
  <url>
    <loc>${url.url}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  ).join("")}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
