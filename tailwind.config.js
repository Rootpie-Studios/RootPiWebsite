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
        secondary: {
          DEFAULT: "#1e293b",
          dark: "#0f172a",
          light: "#334155",
        },
        accent: {
          DEFAULT: "#f97316",
          dark: "#ea580c",
          light: "#fb923c",
        },
        background: {
          DEFAULT: "#f8fafc",
          dark: "#e2e8f0",
          light: "#ffffff",
        },
        text: {
          dark: "#1e293b",
          light: "#f8fafc",
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
