/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}"
        ],
        theme: {
          extend: {
            fontFamily: {
              sans: ['General Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
              display: ['Clash Display', 'General Sans', 'Inter', 'sans-serif'],
              serif: ['Playfair Display', 'Georgia', 'serif'],
              mono: ['IBM Plex Sans', 'monospace'],
            },
            colors: {
              'warm-white': '#FAFAFA',
              'charcoal': '#1A1A1A',
              'accent-blue': '#4A90E2',
              'soft-coral': '#FF6B6B',
              'brand-bg': '#F7F6F3',
            }
          }
        },
        plugins: []
      }
      