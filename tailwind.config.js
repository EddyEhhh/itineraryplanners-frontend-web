module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./src/**/*.{html,js,scss, jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFeatureSettings: {
      numeric: ["tnum", "salt", "ss02"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "36px",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        "primary-green": "#78E0D6",
        "primary-white": "#FAFAFA",
        "primary-orange": "#FF9500",
        "light-gray": "#B2B2B2",
        "hover-gray": "#424242",
        "background-gray": "#FAFAFA",
        "blueish-gray": "#F3F4F5",
        "text-gray": "#363F47",
        "danger-red": "#FF7171",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-font-inter")],
};

// colors: {
//   'primary-green': '#78E0D6',
//       'primary-orange': '#FF9500',
//       'light-gray': '#B2B2B2'
// },
