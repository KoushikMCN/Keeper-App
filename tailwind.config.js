/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors:{
      'yellow': '#FFFF00',
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
  },
};
export const plugins = [];