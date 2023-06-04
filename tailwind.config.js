module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,scss, jsx}", "./node_modules/flowbite/**/*.js"], 
  theme: {
    extend: {
      colors: {
        "primary-green": "#78E0D6",
        "primary-orange": "#FF9500",
        "light-gray": "#B2B2B2",
        "hover-gray": "#424242",
        "background-gray": "#FAFAFA",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

// colors: {
//   'primary-green': '#78E0D6',
//       'primary-orange': '#FF9500',
//       'light-gray': '#B2B2B2'
// },
