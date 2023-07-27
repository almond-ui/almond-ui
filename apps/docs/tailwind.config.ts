import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';

const tailwindConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@almond-ui/core/src/theme/styles/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        zinc: colors.zinc,
        slate: colors.slate,
        neutral: colors.neutral,
        blue: {
          50: '#e1f4fa',
          100: '#b2e4f2',
          200: '#82d1ea',
          300: '#55bfe2',
          400: '#35b2de',
          500: '#17a5da',
          600: '#0d98cc',
          700: '#0085b9',
          800: '#0074a6',
          900: '#005585',
          950: '#005585',
        },
        red: {
          50: '#FEECF0',
          100: '#FCD9E2',
          200: '#F9B3C5',
          300: '#F78DA7',
          400: '#F4678A',
          500: '#F1416C',
          600: '#E41146',
          700: '#AB0D34',
          800: '#720823',
          900: '#390411',
          950: '#1D0209',
        },
        green: {
          50: '#f2f8e5',
          100: '#deedbe',
          200: '#c7e194',
          300: '#afd666',
          400: '#9ccd40',
          500: '#8ac402',
          600: '#7ab400',
          700: '#63a000',
          800: '#4d8d00',
          900: '#1e6c00',
          950: '#1e6c00',
        },
        yellow: {
          50: '#FFF9E5',
          100: '#FFF4CC',
          200: '#FFE999',
          300: '#FFDE66',
          400: '#FFD333',
          500: '#FFC700',
          600: '#CCA000',
          700: '#997800',
          800: '#665000',
          900: '#332800',
          950: '#191400',
        },
        purple: {
          50: '#F2EDFD',
          100: '#E1D6FB',
          200: '#C7B1F7',
          300: '#A987F2',
          400: '#8F62EE',
          500: '#7239EA',
          600: '#5317D4',
          700: '#3D119D',
          800: '#290B6A',
          900: '#140533',
          950: '#0B031C',
        },
        pink: {
          50: '#fde5f1',
          100: '#fabfdb',
          200: '#fa94c4',
          300: '#fa68ab',
          400: '#fa4496',
          500: '#fc1b80',
          600: '#e91a7c',
          700: '#d21976',
          800: '#bc1771',
          900: '#951367',
          950: '#951367',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
} satisfies Config;

export default tailwindConfig;
