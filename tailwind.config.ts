import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Original brand
        brand: '#F5821F',
        // v2 Soft Coaching
        cream: {
          DEFAULT: '#FBF8F3',
          50: '#FDFBF8',
          100: '#FBF8F3',
          200: '#F5EFE5',
          300: '#EBE2D3',
        },
        apricot: {
          DEFAULT: '#D49E7B',
          50: '#FDF7F2',
          100: '#F8EBE0',
          200: '#EFD4BD',
          300: '#E5BC99',
          400: '#D49E7B',
          500: '#C28665',
          600: '#A86E4F',
          700: '#85583F',
        },
        mauve: {
          DEFAULT: '#B89BC4',
          50: '#FBF8FC',
          100: '#F4EDF7',
          200: '#E5D6EC',
          300: '#D1B9DD',
          400: '#B89BC4',
          500: '#9F7DAD',
          600: '#82618F',
          700: '#634A6E',
        },
        eucalyptus: {
          DEFAULT: '#7FA89A',
          50: '#F4F8F6',
          100: '#E5EFEA',
          200: '#CCDFD5',
          300: '#A8C5BA',
          400: '#7FA89A',
          500: '#5F8A7C',
          600: '#4A6E63',
          700: '#3A574D',
        },
        // v3 Editorial Warm
        paper: {
          DEFAULT: '#FAF7F2',
          50: '#FCFAF6',
          100: '#FAF7F2',
          200: '#F2EBDD',
          300: '#E8DCC4',
        },
        terracotta: {
          DEFAULT: '#C8552F',
          50: '#FAF1ED',
          100: '#F3DDD2',
          200: '#E8B69E',
          300: '#DA8E6B',
          400: '#C8552F',
          500: '#B04522',
          600: '#8E371B',
          700: '#6B2914',
        },
        plum: {
          DEFAULT: '#7A5C8A',
          50: '#F5F1F7',
          100: '#E8DDEE',
          200: '#D0BAD9',
          300: '#A88BB7',
          400: '#7A5C8A',
          500: '#634870',
          600: '#4B3756',
          700: '#352640',
        },
        sage: {
          DEFAULT: '#6B8A7A',
          50: '#F1F5F3',
          100: '#DDE7E1',
          200: '#BBCFC4',
          300: '#94B0A2',
          400: '#6B8A7A',
          500: '#557060',
          600: '#3F564A',
          700: '#2C3D35',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#4A4A4A',
          muted: '#8A8580',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgb(45 42 46 / 0.08)',
        'soft-lg': '0 8px 40px -12px rgb(45 42 46 / 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
export default config
