/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf7f2',
          100: '#f5ede0',
          200: '#ead8bd',
          300: '#dcc296',
          400: '#cda86a',
          500: '#c19452',
          600: '#af7a42',
          700: '#8f5f36',
          800: '#764e31',
          900: '#63412a',
        },
        stone: {
          50: '#f9f8f6',
          100: '#f2f0ec',
          200: '#e6e2db',
          300: '#d4cfc4',
          400: '#b8b0a1',
          500: '#9a917e',
          600: '#7a7264',
          700: '#5d574d',
          800: '#49443e',
          900: '#3d3935',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e2e2e5',
          200: '#c4c4ca',
          300: '#9e9ea8',
          400: '#727282',
          500: '#575766',
          600: '#484854',
          700: '#3d3d47',
          800: '#33333b',
          900: '#2b2b32',
          950: '#1a1a1f',
        },
        warm: {
          50: '#fdfcfb',
          100: '#faf7f4',
          200: '#f5f0ea',
          300: '#ede5db',
          400: '#dfd4c4',
          500: '#cfc0ab',
          600: '#b8a58c',
          700: '#9a8469',
          800: '#7d6a52',
          900: '#665743',
        },
        brand: {
          primary: '#8B7355',
          secondary: '#3d3d47',
          accent: '#c19452',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 4px 25px -5px rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
        'card-hover': '0 8px 25px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};
