import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
    site: 'https://rehver.com',
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true
        }
    }),
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
    },
    vite: {
        define: {
            // Fix the environment variable security warning
            'import.meta.env.PUBLIC_SUPABASE_URL': JSON.stringify(process.env.PUBLIC_SUPABASE_URL),
            'import.meta.env.PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(process.env.PUBLIC_SUPABASE_ANON_KEY),
            'import.meta.env.SUPABASE_SERVICE_KEY': JSON.stringify(process.env.SUPABASE_SERVICE_KEY)
        }
    }
});