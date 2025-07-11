import { s as supabase } from '../../chunks/supabase_DWgFfoOj.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  const searchParams = url.searchParams;
  const query = searchParams.get("q") || "";
  const city = searchParams.get("city") || "";
  const limit = parseInt(searchParams.get("limit") || "20");
  const offset = parseInt(searchParams.get("offset") || "0");
  console.log("🔍 Search API called:", { query, city });
  try {
    let supabaseQuery = supabase.from("places").select(
      `
        id,
        slug,
        name,
        description_tr,
        description_en,
        address,
        city,
        district,
        image_urls,
        main_category,
        rating,
        reviews_count
      `
    ).range(offset, offset + limit - 1);
    if (query) {
      supabaseQuery = supabaseQuery.or(
        `name.ilike.%${query}%, description_tr.ilike.%${query}%, description_en.ilike.%${query}%`
      );
    }
    if (city) {
      supabaseQuery = supabaseQuery.eq("city", city);
    }
    supabaseQuery = supabaseQuery.order("rating", { ascending: false }).order("reviews_count", { ascending: false });
    const { data: places, error, count } = await supabaseQuery;
    console.log("📊 Search results:", {
      placesCount: places?.length || 0,
      total: count,
      error: error?.message
    });
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(
      JSON.stringify({
        results: places || [],
        total: count || 0,
        query,
        city
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Search failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
