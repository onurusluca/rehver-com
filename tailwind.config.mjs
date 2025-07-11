/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#FF6B47', // main orange (buttons, links)
                    600: '#E55A3D', // darker orange (hover)
                    100: '#FFF2F0', // light orange (backgrounds)
                },
                black: '#37322f', // main text
                white: '#ffffff', // card backgrounds  
                'layout-bg': '#fbfaf9', // layout background
                gray: {
                    200: '#f3f4f6', // borders
                    400: '#9ca3af', // secondary text
                    600: '#6b7280', // darker secondary text
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
                article: ['Merriweather', 'serif']
            }
        }
    },
    plugins: []
}