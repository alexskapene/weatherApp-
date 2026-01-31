export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(  --bg-app)",
        bgCard: "var( --bg-card)",
        bgCardSoft: "var( --bg-card-soft)",

        // text
        textPrimary: "var(  --text-primary)",
        textSecondary: "var(  --text-secondary)",
        textMuted: "var(  --text-muted)",
      },
    },
  },
  plugins: [],
};
