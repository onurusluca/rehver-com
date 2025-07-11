/* empty css                                    */
import { c as createAstro, a as createComponent, e as renderTemplate, u as unescapeHTML, f as renderComponent, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../../chunks/astro/server_CQpeLbng.mjs';
import 'kleur/colors';
import { s as supabase } from '../../chunks/supabase_DWgFfoOj.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C7ijI75D.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://rehver.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  const { data: place, error } = await supabase.from("places").select("*").eq("slug", slug).single();
  if (error || !place) {
    return Astro2.redirect("/404");
  }
  const pageTitle = `${place.name} - ${place.district || place.city}`;
  const pageDescription = place.description_tr || `${place.name} - ${place.address}`;
  const firstImage = place.image_urls?.[0];
  return renderTemplate(_a || (_a = __template(["", ' <!-- JSON-LD Schema --> <script type="application/ld+json">', "<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "image": firstImage }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-7xl px-4 py-8"> <!-- Breadcrumb --> <nav class="mb-6 text-sm text-gray-600"> <a href="/" class="hover:text-blue-600">Ana Sayfa</a> <span class="mx-2">/</span> ${place.city && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span class="hover:text-blue-600">${place.city}</span> <span class="mx-2">/</span> ` })}`} <span class="font-semibold text-gray-700">${place.name}</span> </nav> <div class="grid grid-cols-1 gap-8 lg:grid-cols-3"> <div class="lg:col-span-2"> <!-- Header --> <header class="mb-6"> <h1 class="text-3xl font-bold text-gray-900 mb-2">${place.name}</h1> ${place.description_tr && renderTemplate`<p class="text-gray-600">${place.description_tr}</p>`} </header> <!-- Images --> ${place.image_urls && place.image_urls.length > 0 && renderTemplate`<div class="mb-6"> <img${addAttribute(place.image_urls[0], "src")}${addAttribute(`${place.name} foto\u011Fraf\u0131`, "alt")} class="w-full h-96 object-cover rounded-lg" loading="eager"> </div>`} </div> <!-- Sidebar --> <aside class="space-y-6"> <!-- Contact Info --> <div class="rounded-lg bg-white p-6 shadow-sm"> <h3 class="text-lg font-semibold mb-4">İletişim Bilgileri</h3> ${place.address && renderTemplate`<div class="flex items-start gap-3 mb-3"> <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span class="text-sm text-gray-700">${place.address}</span> </div>`} ${place.phone_number && renderTemplate`<div class="flex items-start gap-3 mb-3"> <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a${addAttribute(`tel:${place.phone_number}`, "href")} class="text-sm text-blue-600 hover:underline"> ${place.phone_number} </a> </div>`} ${place.website_uri && renderTemplate`<div class="flex items-start gap-3"> <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path> </svg> <a${addAttribute(place.website_uri, "href")} target="_blank" class="text-sm text-blue-600 hover:underline">
Web Sitesi
</a> </div>`} </div> </aside> </div> </div> ` }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: place.name,
    description: place.description_tr,
    address: {
      "@type": "PostalAddress",
      streetAddress: place.address,
      addressLocality: place.district || place.city,
      addressRegion: place.city,
      addressCountry: "TR"
    },
    telephone: place.phone_number,
    url: place.website_uri,
    image: place.image_urls?.[0]
  })));
}, "C:/CODING_STUFF/PROJECTS/rehver/rehver-astro/src/pages/yerler/[slug].astro", void 0);

const $$file = "C:/CODING_STUFF/PROJECTS/rehver/rehver-astro/src/pages/yerler/[slug].astro";
const $$url = "/yerler/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
