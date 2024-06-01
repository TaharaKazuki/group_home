import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      fontFamily: {
        primary: ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        primary: '#696c6d',
        grey: '#484B4B',
        accent: '#EEF7F9',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
