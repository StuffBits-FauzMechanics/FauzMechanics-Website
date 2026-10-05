import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        brand: {
          50: '#E6FAFF',
          100: '#C7F3FF',
          200: '#94E9FF',
          300: '#57DDFF',
          400: '#1FD3FF',
          500: '#00CFFF',
          600: '#00A6D6',
          700: '#0079A1',
          800: '#035F7E',
          900: '#084E66',
          950: '#04313F',
        },
        ink: {
          50: '#F7F7F8',
          100: '#EEEDEF',
          200: '#DCDADD',
          300: '#B9B6BA',
          400: '#8D898E',
          500: '#635F64',
          600: '#474348',
          700: '#332E31',
          800: '#231D1E',
          900: '#1A1516',
          950: '#110D0E',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
        display: ['"Manrope Variable"', ...defaultTheme.fontFamily.sans],
        wordmark: ['Michroma', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(17 13 14 / 0.04), 0 8px 24px -8px rgb(17 13 14 / 0.12)',
        lift: '0 2px 4px rgb(17 13 14 / 0.04), 0 24px 48px -16px rgb(17 13 14 / 0.22)',
        glow: '0 0 0 1px rgb(0 207 255 / 0.25), 0 12px 40px -8px rgb(0 207 255 / 0.45)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(to right, rgb(35 29 30 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(35 29 30 / 0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-in': { from: { opacity: 0 }, to: { opacity: 1 } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: 0.7 },
          '100%': { transform: 'scale(1.6)', opacity: 0 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        marquee: 'marquee 40s linear infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.2, 0.6, 0.3, 1) infinite',
      },
    },
  },
  plugins: [],
}
