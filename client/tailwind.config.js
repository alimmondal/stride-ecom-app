/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    flowbite.plugin(),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
  daisyui: {
    themes: ["light"],
  },
};
