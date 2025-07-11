import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_jRHwaMXH.mjs';
import { manifest } from './manifest_DALl4YBU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/search.astro.mjs');
const _page2 = () => import('./pages/arama.astro.mjs');
const _page3 = () => import('./pages/en/places/_slug_.astro.mjs');
const _page4 = () => import('./pages/sitemap-places.xml.astro.mjs');
const _page5 = () => import('./pages/yerler/_slug_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/search.ts", _page1],
    ["src/pages/arama.astro", _page2],
    ["src/pages/en/places/[slug].astro", _page3],
    ["src/pages/sitemap-places.xml.ts", _page4],
    ["src/pages/yerler/[slug].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cd511157-3b0b-421e-82c4-861968ec80c3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
