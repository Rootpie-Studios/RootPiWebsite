module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          light: "#3b82f6",
        },
        accent: {
          DEFAULT: "#60a5fa",
          dark: "#3b82f6",
          light: "#93c5fd",
        },
        // Dark theme tokens
        ink: {
          DEFAULT: "#fafafa",
          muted: "#a1a1aa",
          subtle: "#71717a",
        },
        surface: {
          DEFAULT: "#1c1c20",
          alt: "#16161a",
          page: "#111114",
        },
        outline: {
          DEFAULT: "#2a2a2f",
          faint: "#222227",
        },
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
