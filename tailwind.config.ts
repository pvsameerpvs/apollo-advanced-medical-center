import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'serif'],
      },
      colors: {
        brand: {
          green: '#097140',
          greenDark: '#065C34',
          orange: '#EF7F3C',
          orangeSoft: '#FCE7D9',
        },
        ui: {
          bg: '#F9FAFB',
          text: '#1F2937',
          border: '#E5E7EB',
        },
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(17, 24, 39, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
