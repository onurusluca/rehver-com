import { supabase } from "@/lib/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const searchParams = url.searchParams;
  const query = searchParams.get("q") || "";
  const city = searchParams.get("city") || "";
  const limit = parseInt(searchParams.get("limit") || "20");
  const offset = parseInt(searchParams.get("offset") || "0");

  console.log("🔍 Search API called:", { query, city }); // Add this

  try {
    let supabaseQuery = supabase
      .from("places")
      .select(
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
      )
      .range(offset, offset + limit - 1);

    // Add search conditions
    if (query) {
      supabaseQuery = supabaseQuery.or(
        `name.ilike.%${query}%, description_tr.ilike.%${query}%, description_en.ilike.%${query}%`
      );
    }

    if (city) {
      supabaseQuery = supabaseQuery.eq("city", city);
    }

    // Order by rating and reviews
    supabaseQuery = supabaseQuery
      .order("rating", { ascending: false })
      .order("reviews_count", { ascending: false });

    const { data: places, error, count } = await supabaseQuery;

    console.log("📊 Search results:", {
      placesCount: places?.length || 0,
      total: count,
      error: error?.message,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        results: places || [],
        total: count || 0,
        query,
        city,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Search failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
