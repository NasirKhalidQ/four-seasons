module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "seasons-header": "#242424",
        "seasons-primary": "#F9AD81",
        "seasons-gray": "#212529",
      },
      backgroundImage: {
        hero: "url('hero-bg.jpg')",
        hero2: "url('hero2.png')",
        luxury: "url('luxury.jpg')",
        pool: "url('pool.jpg')",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
