/* empty css                                 */
import { c as createAstro, a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CQpeLbng.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C7ijI75D.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rehver.com");
const $$Arama = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Arama;
  const url = Astro2.url;
  const searchQuery = url.searchParams.get("q") || "";
  const selectedCity = url.searchParams.get("city") || "";
  console.log("\u{1F50D} Search page params:", {
    searchQuery,
    selectedCity,
    hasQuery: !!(searchQuery.trim() || selectedCity.trim())
  });
  let places = [];
  let totalResults = 0;
  let error = "";
  if (searchQuery.trim() || selectedCity.trim()) {
    try {
      const searchUrl = new URL("/api/search", Astro2.url.origin);
      if (searchQuery) searchUrl.searchParams.set("q", searchQuery);
      if (selectedCity) searchUrl.searchParams.set("city", selectedCity);
      console.log("\u{1F680} Calling search API:", searchUrl.toString());
      const response = await fetch(searchUrl.toString());
      const data = await response.json();
      console.log("\u{1F4E5} API Response:", {
        ok: response.ok,
        resultsCount: data.results?.length || 0
      });
      if (response.ok) {
        places = data.results || [];
        totalResults = data.total || 0;
      } else {
        error = data.error || "Arama s\u0131ras\u0131nda bir hata olu\u015Ftu";
      }
    } catch (e) {
      error = "Arama s\u0131ras\u0131nda bir hata olu\u015Ftu";
    }
  }
  const pageTitle = searchQuery ? `"${searchQuery}" i\xE7in arama sonu\xE7lar\u0131` : "Arama";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": "T\xFCrkiye'deki i\u015Fletmeleri aray\u0131n", "data-astro-cid-yspew4ba": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-7xl px-4 py-8" data-astro-cid-yspew4ba> <!-- Search Form --> <div class="mb-8" data-astro-cid-yspew4ba> <h1 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-yspew4ba>İşletme Arama</h1> <form method="GET" class="flex gap-4" data-astro-cid-yspew4ba> <input name="q" type="text"${addAttribute(searchQuery, "value")} placeholder="İşletme, kategori veya yer arayın..." class="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-astro-cid-yspew4ba> <select name="city" class="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500" data-astro-cid-yspew4ba> <option value="" data-astro-cid-yspew4ba>Tüm Şehirler</option> <option value="konya"${addAttribute(selectedCity === "konya", "selected")} data-astro-cid-yspew4ba>Konya</option> <option value="antalya"${addAttribute(selectedCity === "antalya", "selected")} data-astro-cid-yspew4ba>Antalya</option> </select> <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700" data-astro-cid-yspew4ba>
Ara
</button> </form> </div> <!-- Results --> ${error && renderTemplate`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" data-astro-cid-yspew4ba> ${error} </div>`} ${(searchQuery || selectedCity) && !error && renderTemplate`<div class="mb-6" data-astro-cid-yspew4ba> <p class="text-gray-600" data-astro-cid-yspew4ba> ${totalResults} sonuç bulundu
${searchQuery && renderTemplate`<span data-astro-cid-yspew4ba> - "${searchQuery}"</span>`} ${selectedCity && renderTemplate`<span data-astro-cid-yspew4ba> - ${selectedCity}</span>`} </p> </div>`} ${places.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-astro-cid-yspew4ba> ${places.map((place) => renderTemplate`<a${addAttribute(`/yerler/${place.slug}`, "href")} class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 block" data-astro-cid-yspew4ba> ${place.image_urls && place.image_urls[0] && renderTemplate`<img${addAttribute(place.image_urls[0], "src")}${addAttribute(place.name, "alt")} class="w-full h-48 object-cover rounded-lg mb-3" loading="lazy" data-astro-cid-yspew4ba>`} <h3 class="font-semibold text-gray-900 mb-2" data-astro-cid-yspew4ba>${place.name}</h3> ${place.description_tr && renderTemplate`<p class="text-gray-600 text-sm mb-2 line-clamp-2" data-astro-cid-yspew4ba> ${place.description_tr} </p>`} <div class="flex items-center text-sm text-gray-500 mb-2" data-astro-cid-yspew4ba> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yspew4ba> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-yspew4ba></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-yspew4ba></path> </svg> ${place.district && `${place.district}, `} ${place.city} </div> ${place.rating && renderTemplate`<div class="flex items-center text-sm" data-astro-cid-yspew4ba> <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yspew4ba> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-yspew4ba></path> </svg> <span class="font-medium text-gray-900" data-astro-cid-yspew4ba>${place.rating}</span> ${place.reviews_count && renderTemplate`<span class="text-gray-500 ml-1" data-astro-cid-yspew4ba>
(${place.reviews_count})
</span>`} </div>`} ${place.main_category && renderTemplate`<div class="mt-2" data-astro-cid-yspew4ba> <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded" data-astro-cid-yspew4ba> ${place.main_category} </span> </div>`} </a>`)} </div>`} ${(searchQuery || selectedCity) && places.length === 0 && !error && renderTemplate`<div class="text-center py-12" data-astro-cid-yspew4ba> <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yspew4ba> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-yspew4ba></path> </svg> <h3 class="mt-2 text-sm font-medium text-gray-900" data-astro-cid-yspew4ba>
Sonuç bulunamadı
</h3> <p class="mt-1 text-sm text-gray-500" data-astro-cid-yspew4ba>
Farklı anahtar kelimeler deneyin.
</p> </div>`} ${!searchQuery && !selectedCity && renderTemplate`<div class="text-center py-12" data-astro-cid-yspew4ba> <p class="text-gray-500" data-astro-cid-yspew4ba>
Arama yapmak için yukarıdaki formu kullanın.
</p> </div>`} </div> ` })} `;
}, "C:/CODING_STUFF/PROJECTS/rehver/rehver-astro/src/pages/arama.astro", void 0);

const $$file = "C:/CODING_STUFF/PROJECTS/rehver/rehver-astro/src/pages/arama.astro";
const $$url = "/arama";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Arama,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
