module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  import: true,
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)',
        },
      },
      screens: {
        xsm: '380px',
      },
    },
  },
  variants: {},
  plugins: [],
};
