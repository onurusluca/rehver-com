/* empty css                                       */
import { c as createAstro, a as createComponent, f as renderComponent, e as renderTemplate } from '../../../chunks/astro/server_CQpeLbng.mjs';
import 'kleur/colors';
import { s as supabase } from '../../../chunks/supabase_DWgFfoOj.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_C7ijI75D.mjs';
export { renderers } from '../../../renderers.mjs';

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
  const pageDescription = place.description_en || place.description_tr || `${place.name} - ${place.address}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "image": place.image_urls?.[0], "locale": "en" }, { "default": async ($$result2) => renderTemplate`  ` })}`;
}, "C:/CODING_STUFF/PROJECTS/rehver/rehver-astro/src/pages/en/places/[slug].astro", void 0);

const $$file = "C:/CODING_STUFF/PROJECTS/rehver/rehver-astro/src/pages/en/places/[slug].astro";
const $$url = "/en/places/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
