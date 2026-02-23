import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral, earthy tones for boutique aesthetic
        sage: {
          50: '#f9faf7',
          100: '#f1f3ee',
          200: '#dce0d7',
          300: '#c5cdc0',
          400: '#a0aaa0',
          500: '#7a8670',
          600: '#5f6e5a',
          700: '#4a5648',
          800: '#3a4338',
          900: '#2d3530',
        },
        cream: {
          50: '#fefdf9',
          100: '#fffcf0',
          200: '#fff8e1',
          300: '#fff3cc',
          400: '#ffe499',
          500: '#ffd966',
          600: '#e0b844',
          700: '#b38922',
          800: '#8a6611',
          900: '#5c4409',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716b',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-roboto)', 'Georgia', 'serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
      },
      spacing: {
        gutter: '1.5rem',
        section: '4rem',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
