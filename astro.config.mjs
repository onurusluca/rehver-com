import { defineConfig } from 'astro/config';
import path from 'path';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
    site: 'https://rehver.com',
    output: 'static',
    // adapter: vercel(),
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src')
            }
        }
    },
    integrations: [
        tailwind(),
        sitemap({
            i18n: {
                defaultLocale: 'tr',
                locales: {
                    tr: 'tr-TR',
                    en: 'en-US'
                }
            },
            customPages: [
                'https://rehver.com/',
                'https://rehver.com/arama',
                'https://rehver.com/hakkimizda',
                'https://rehver.com/en',
                'https://rehver.com/en/about-us'
            ],
            serialize(item) {
                if (item.url.includes('/yerler/')) {
                    item.changefreq = 'weekly';
                    item.priority = 0.9;
                }
                return item;
            }
        })
    ],
    image: {
        domains: ['rehver.b-cdn.net'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rehver.b-cdn.net'
            }
        ]
    }
});