const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [
    // rest of the code
    addVariablesForColors,
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "meteor-effect": "meteor 5s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      colors: {
        white: "#fff",
        lavender: {
          "100": "#d8e7fd",
          "200": "#d4e1ff",
          "300": "#d3def7",
        },
        darkslateblue: "#392d82",
        mediumblue: "rgba(9, 67, 255, 0.71)",
        gainsboro: "#e6e6e6",
        darkblue: "#012ab0",
        midnightblue: {
          "100": "#022083",
          "200": "#021f7e",
        },
        blue: "#0000fb",
        royalblue: {
          "100": "#5c87ff",
          "200": "#567eff",
        },
        indigo: "#501b88",
        mediumslateblue: "#426eff",
        "primary-50": "#eef0ff",
      },
      spacing: {},
      fontFamily: {
        "satoshi-variable": "'Satoshi Variable'",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "6xs": "7px",
        xl: "20px",
        "3xs": "10px",
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      "9xl": "28px",
      "3xl": "22px",
      "17xl": "36px",
      "10xl": "29px",
      sm: "14px",
      "3xs": "10px",
      "21xl": "40px",
      "13xl": "32px",
      "35xl": "54px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}