/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        // Raíces — Earth-tone palette
        forest: {
          50: '#f4f7f4',
          100: '#e3ece5',
          200: '#c7d8ca',
          300: '#9bbaa1',
          400: '#6a9573',
          500: '#49634b',
          600: '#3a503c',
          700: '#2f4131',
          800: '#26382d',
          900: '#1a2920',
        },
        earth: {
          50: '#faf8f3',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d4c4a0',
          400: '#b8a374',
          500: '#9a7f4e',
          600: '#7d6438',
          700: '#5e4b28',
          800: '#3f321b',
          900: '#241a0e',
        },
        clay: {
          50: '#fdf6f3',
          100: '#faeae3',
          200: '#f4d2c4',
          300: '#ebb09a',
          400: '#d9855f',
          500: '#c46a3e',
          600: '#a55328',
          700: '#834122',
          800: '#5e2f1a',
          900: '#3a1d10',
        },
        sand: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f5efe0',
          300: '#ebe2cc',
          400: '#e8dcc8',
          500: '#c4b07e',
          600: '#a89058',
          700: '#877042',
          800: '#665533',
          900: '#443a22',
        },
        cream: {
          50: '#fefdfa',
          100: '#faf8f3',
          200: '#f5f2e9',
          300: '#ece6d5',
        },
        ink: {
          DEFAULT: '#211f1a',
          light: '#3d3a32',
          muted: '#6b6657',
        },
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(38, 56, 45, 0.08)',
        'soft-lg': '0 12px 40px -4px rgba(38, 56, 45, 0.12)',
        'soft-xl': '0 24px 60px -8px rgba(38, 56, 45, 0.16)',
        'warm': '0 8px 30px -6px rgba(125, 100, 56, 0.15)',
        'warm-lg': '0 16px 50px -10px rgba(125, 100, 56, 0.22)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'grow': 'grow 0.8s ease-out forwards',
        'sway': 'sway 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        grow: {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};
