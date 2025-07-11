import { MeiliSearch } from "meilisearch";

const client = new MeiliSearch({
  host: import.meta.env.PUBLIC_MEILISEARCH_URL,
  apiKey: import.meta.env.PUBLIC_MEILISEARCH_SEARCH_KEY,
});

export const searchClient = client;
export const placesIndex = client.index("places");
export const topicsIndex = client.index("seo_pages");
