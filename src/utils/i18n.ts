import { getRelativeLocaleUrl } from "astro:i18n";
import tr from "@/i18n/tr.json";
import en from "@/i18n/en.json";

const messages = { tr, en };

export function t(
  key: string,
  locale: "tr" | "en" = "tr",
  params?: Record<string, any>
): string {
  const keys = key.split(".");
  let value: any = messages[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  if (typeof value !== "string") return key;

  if (params) {
    return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey] ?? match;
    });
  }

  return value;
}

// Use Astro's built-in function
export function localePath(path: string, locale: "tr" | "en"): string {
  return getRelativeLocaleUrl(locale, path);
}

export function getLocaleFromUrl(url: URL): "tr" | "en" {
  if (url.pathname.startsWith("/en")) return "en";
  return "tr";
}
