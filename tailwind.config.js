module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      cri: ["Crimson Pro", "serif"],
      mon: ["Montserrat", "sans-serif"],
      lor: ["Lora", "serif"],
    },
    colors: {
      transparent: {
        DEFAULT: "transparent",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      black: {
        DEFAULT: "#000000",
        c181719: "#181719",
      },
      gray: {
        cA9A9A9: "#A9A9A9",
        cE0E0E0: "#E0E0E0",
        cF2F2F2: "#F2F2F2",
        c333333: "#333333",
        c4F4F4F: "#4F4F4F",
        c828282: "#828282",
        cBDBDBD: "#BDBDBD",
      },
      blue: {
        c2D9CDB: "#2D9CDB",
        c100E1D: "#100E1D",
      },
      green: {
        c27AE60: "#27AE60",
      },
      red: {
        cEB5757: "#EB5757",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}
