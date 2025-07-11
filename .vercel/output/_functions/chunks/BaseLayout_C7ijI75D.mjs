import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate } from './astro/server_CQpeLbng.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://rehver.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image, locale = "tr" } = Astro2.props;
  const canonicalURL = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : Astro2.url;
  return renderTemplate`<html${addAttribute(locale, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL.href, "href")}><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${image && renderTemplate`<meta property="og:image"${addAttribute(image, "content")}>`}<!-- Preconnects --><link rel="preconnect" href="https://rehver.b-cdn.net"><link rel="preconnect" href="https://fonts.googleapis.com">${renderHead()}</head> <body class="bg-gray-50"> <header class="bg-white shadow-sm"> <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex h-16 justify-between items-center"> <div class="flex items-center"> <a${addAttribute(locale === "en" ? "/en" : "/", "href")} class="text-xl font-bold text-blue-600">
Rehver
</a> </div> <div class="flex space-x-4"> <a href="/ara" class="text-gray-700 hover:text-blue-600"> Ara </a> <a${addAttribute(locale === "en" ? "/en/discover" : "/kesfet", "href")} class="text-gray-700 hover:text-blue-600"> ${locale === "en" ? "Discover" : "Ke\u015Ffet"} </a> <a${addAttribute(locale === "en" ? "/en/about-us" : "/hakkimizda", "href")} class="text-gray-700 hover:text-blue-600"> ${locale === "en" ? "About Us" : "Hakk\u0131m\u0131zda"} </a> </div> </div> </nav> </header> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-gray-900 text-white"> <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"> <div class="text-center"> <p>
&copy; 2025 Rehver. ${locale === "en" ? "All rights reserved." : "T\xFCm haklar\u0131 sakl\u0131d\u0131r."} </p> </div> </div> </footer> </body></html>`;
}, "C:/CODING_STUFF/PROJECTS/rehver/rehver-astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
