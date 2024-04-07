import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBMPlexSans', ...defaultTheme.fontFamily.sans],
        anton: ['Anton', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'noise-dark': "url('/noise-dark.svg')",
        'noise-light': "url('/noise-light.svg')",
      },
      colors: {
        orange: {
          400: '#FF5C00',
        },
      },
    },
  },
  plugins: [],
};
