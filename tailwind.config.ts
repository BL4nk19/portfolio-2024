import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'dark-1': '#111010',
        'dark-3': '#27272A',
        'dark-4': '#1F1F22',
        'dark-5': '#D4D4D8',
      },
      fontFamily: {
        spaceGrotesk: ['var(--font-spaceGrotesk)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} as Config;

export default config;