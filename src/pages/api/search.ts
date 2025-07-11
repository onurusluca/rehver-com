import { searchClient } from "@/utils/meilisearch";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const searchParams = url.searchParams;
  const query = searchParams.get("q") || "";
  const limit = parseInt(searchParams.get("limit") || "20");
  const offset = parseInt(searchParams.get("offset") || "0");

  if (!query) {
    return new Response(JSON.stringify({ error: "Query required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const results = await searchClient.multiSearch({
      queries: [
        {
          indexUid: "places",
          q: query,
          limit,
          offset,
          attributesToRetrieve: [
            "id",
            "slug",
            "name",
            "description_tr",
            "description_en",
            "city",
            "district",
            "image_urls",
            "main_category",
            "rating",
            "reviews_count",
          ],
        },
        {
          indexUid: "seo_pages",
          q: query,
          limit: Math.min(limit, 10),
          attributesToRetrieve: [
            "id",
            "slug_tr",
            "slug_en",
            "title_tr",
            "title_en",
            "city",
            "district",
            "places_count",
          ],
        },
      ],
    });

    const places = results.results[0].hits || [];
    const topics = results.results[1].hits || [];

    return new Response(
      JSON.stringify({
        places: {
          results: places,
          total: results.results[0].totalHits || 0,
        },
        topics: {
          results: topics,
          total: results.results[1].totalHits || 0,
        },
        query,
        took: results.results[0].processingTimeMs || 0,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Search error:", error);
    return new Response(JSON.stringify({ error: "Search failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
