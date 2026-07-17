module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#292929",
          panel: "#18191b",
          panelAlt: "#171719",
          accent: "#ff5b2e",
          accentSoft: "#ff6a1f",
          accentWarm: "#ff8b2a",
          blue: "#4f91ff",
          green: "#00e676",
          yellow: "#ffd21f",
          text: "#e8edf5",
          muted: "#9ca3af",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        brand: "0 0 0 1px rgba(255,91,46,0.28), 0 0 24px rgba(255,91,46,0.22)",
        blue: "0 0 0 1px rgba(79,145,255,0.28), 0 0 24px rgba(79,145,255,0.2)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 66% 34%, rgba(93,83,255,.18), transparent 26%), radial-gradient(circle at 25% 45%, rgba(255,91,46,.16), transparent 28%), radial-gradient(circle at 50% 100%, rgba(255,91,46,.18), transparent 40%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
