/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBMPlexSans', 'ui-sans-serif'],
        anton: ['Anton'],
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
