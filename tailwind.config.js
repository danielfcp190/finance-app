module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: { backgroundColor: ["disabled"], cursor: ["disabled"] },
  },
  plugins: [],
};
