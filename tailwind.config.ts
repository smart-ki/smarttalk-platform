import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Soft Coaching palette — warm, human
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
        ink: {
          DEFAULT: '#2D2A2E',
          soft: '#5A555A',
          muted: '#8B868B',
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
