module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: { wallpaper: 'url("/assets/wallpaper.jpeg")' },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
