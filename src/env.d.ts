/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly PUBLIC_MEILISEARCH_URL: string;
  readonly PUBLIC_MEILISEARCH_SEARCH_KEY: string;
  readonly PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN: string;
  readonly PUBLIC_ENVIRONMENT: "development" | "production" | "staging";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
