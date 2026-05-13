import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Editorial Warm palette — magazine-style
        paper: {
          DEFAULT: '#FAF7F2', // base cream background
          50: '#FCFAF6',
          100: '#FAF7F2',
          200: '#F2EBDD',
          300: '#E8DCC4',
        },
        terracotta: {
          DEFAULT: '#C8552F', // KI & Digital
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
          DEFAULT: '#7A5C8A', // Kommunikation
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
          DEFAULT: '#6B8A7A', // Beratung
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
    },
  },
  plugins: [],
}
export default config
