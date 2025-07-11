/* empty css                                 */
import { a as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CQpeLbng.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C7ijI75D.mjs';
import { s as supabase } from '../chunks/supabase_DWgFfoOj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: topPlaces, error } = await supabase.from("places").select(
    `
    id,
    slug,
    name,
    description_tr,
    description_en,
    city,
    district,
    image_urls,
    main_category,
    rating,
    reviews_count
  `
  ).order("reviews_count", { ascending: false }).limit(50);
  const places = topPlaces || [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Rehver - T\xFCrkiye'nin \u0130\u015Fletme Rehberi", "description": "T\xFCrkiye'nin en kapsaml\u0131 i\u015Fletme rehberi. T\xFCrkiye'deki t\xFCm yerel i\u015Fletmeleri ke\u015Ffedin." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-sky-600 to-sky-600 px-2 py-20"> <div class="relative mx-auto max-w-4xl text-center text-white"> <h1 class="mb-6 text-4xl font-bold md:text-6xl">
Türkiye'nin En Kapsamlı
<span class="text-yellow-400">İşletme Rehberi</span> </h1> <p class="mb-10 text-lg opacity-90 md:text-xl">
Türkiye'deki tüm yerel işletmeleri keşfedin. Restoranlar, kafeler,
        oteller ve daha fazlası.
</p> <!-- Hero Search --> <form class="mx-auto" method="GET" action="/arama"> <div class="flex w-full flex-col items-center gap-3 rounded-2xl bg-white p-2 shadow-2xl md:flex-row md:p-4"> <input name="q" type="text" placeholder="İşletme, kategori veya yer arayın..." class="w-full flex-1 rounded-xl border-0 px-2 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none md:px-4"> <select name="city" class="w-full md:max-w-60 rounded-xl border-0 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500"> <option value="">Tüm Şehirler</option> <option value="konya">Konya</option> <option value="antalya">Antalya</option> </select> <button type="submit" class="w-full md:w-auto rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors">
Ara
</button> </div> </form> </div> </section>  <section class="mx-auto max-w-7xl px-4 py-16"> <div class="mb-8 text-center"> <h2 class="mb-4 text-3xl font-bold text-gray-900">
En Popüler İşletmeler
</h2> <p class="text-lg text-gray-600">
En çok değerlendirilen ve beğenilen işletmeler
</p> </div> ${places.length > 0 && renderTemplate`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> ${places.map((place) => renderTemplate`<a${addAttribute(`/yerler/${place.slug}`, "href")} class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 block group"> ${place.image_urls && place.image_urls[0] && renderTemplate`<div class="mb-3 overflow-hidden rounded-lg"> <img${addAttribute(place.image_urls[0], "src")}${addAttribute(place.name, "alt")} class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200" loading="lazy"> </div>`} <h3 class="font-semibold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors"> ${place.name} </h3> <div class="flex items-center text-xs text-gray-500 mb-2"> <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> ${place.district && `${place.district}, `} ${place.city} </div> ${place.rating && renderTemplate`<div class="flex items-center text-xs"> <svg class="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span class="font-medium text-gray-900">${place.rating}</span> ${place.reviews_count && renderTemplate`<span class="text-gray-500 ml-1">
(${place.reviews_count})
</span>`} </div>`} ${place.main_category && renderTemplate`<div class="mt-2"> <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"> ${place.main_category} </span> </div>`} </a>`)} </div>`} <div class="mt-8 text-center"> <a href="/arama" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
Tüm İşletmeleri Görüntüle
</a> </div> </section> ` })}`;
}, "C:/CODING_STUFF/PROJECTS/rehver/rehver-astro/src/pages/index.astro", void 0);

const $$file = "C:/CODING_STUFF/PROJECTS/rehver/rehver-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
