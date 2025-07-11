import type { Database } from "@/types/database.types.js";

// DATABASE TYPES
export type Place = Database["public"]["Tables"]["places"]["Row"];
export type SeoPage = Database["public"]["Tables"]["seo_pages"]["Row"];

export interface SearchResult {
  id: string;
  name: string;
  slug: string;
  type: "place" | "topic";
  description_tr?: string;
  description_en?: string;
  image_url?: string;
  city?: string;
  district?: string;
  rating?: number;
  reviews_count?: number;
  main_category?: string;
  places_count?: number;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  query: string;
  took?: number;
}
