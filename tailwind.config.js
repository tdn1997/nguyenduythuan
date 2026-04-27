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
        neon: {
          bg: "#0a0a0f",
          panel: "#12121a",
          text: "#e6e6f0",
          muted: "#9ca3af",
          green: "#00ff88",
          pink: "#ff0055",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(0,255,136,0.25), 0 0 24px rgba(0,255,136,0.2)",
        pink: "0 0 0 1px rgba(255,0,85,0.25), 0 0 24px rgba(255,0,85,0.2)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(34,211,238,.22), transparent 42%), radial-gradient(circle at 80% 10%, rgba(255,0,85,.16), transparent 35%), radial-gradient(circle at 50% 100%, rgba(0,255,136,.18), transparent 40%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
