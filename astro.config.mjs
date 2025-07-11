import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

export default defineConfig({
    site: 'https://rehver.com',
    output: 'server',
    adapter: vercel({
        isr: true,
    }),
    integrations: [
        tailwind(),
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