import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
    site: 'https://rehver.com',
    output: 'server',
    adapter: vercel({
        isr: true,
    }),
    integrations: [
        tailwind(),
        sitemap({
            customPages: ['https://rehver.com/sitemaps/'],
            i18n: {
                defaultLocale: 'tr',
                locales: {
                    tr: 'tr-TR',
                    en: 'en-US'
                }
            }
        }),
        icon()
    ],
    i18n: {
        defaultLocale: 'tr',
        locales: ['tr', 'en'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});