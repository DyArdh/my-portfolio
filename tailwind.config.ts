import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#711DB0',
        dark: {
          50: '#f5f5f5',
          100: '#e8e9e8',
          200: '#d9dad9',
          300: '#c3c4c3',
          400: '#9d9e9d',
          500: '#7b7c7b',
          600: '#555655',
          700: '#434443',
          800: '#262726',
          900: '#000100',
        },
        light: {
          50: '#fbfbfa',
          100: '#f7f7f6',
          200: '#f1f1f0',
          300: '#e5e5e4',
          400: '#c2c2c1',
          500: '#a4a4a3',
          600: '#7a7a79',
          700: '#666665',
          800: '#474746',
          900: '#252524',
        },
      },
      fontFamily: {
        openSans: ['var(--font-openSans)'],
        Quicksand: ['var(--font-quickSand)'],
      },
      keyframes: {
        swipeAnimation: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: { swipeLoad: 'swipeAnimation 3s' },
      zIndex: {
        '999': '999',
      },
    },
  },
  plugins: [],
}
export default config
