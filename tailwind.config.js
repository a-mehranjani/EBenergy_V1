/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Exact EBenergy brand teal: #00B4A8
        brand: {
          50:  "#e6faf9",
          100: "#b3f0ed",
          200: "#80e5e0",
          300: "#4ddad4",
          400: "#1acfc8",
          500: "#00c4bc",
          600: "#00b4a8",   // PRIMARY TEAL — exact brand colour
          700: "#008f84",
          800: "#006b62",
          900: "#004740",
          950: "#002320",
        },
        // Exact EBenergy brand navy: #0D1F3C
        navy: {
          50:  "#e8ebf2",
          100: "#c2cad9",
          200: "#9baac0",
          300: "#738ba8",
          400: "#506e91",
          500: "#2e517a",
          600: "#1b3a64",
          700: "#132d52",
          800: "#0d1f3c",   // PRIMARY NAVY — exact brand colour
          900: "#08152a",
          950: "#040b18",
        },
        ink: {
          50:  "#f4f6f9",
          100: "#e5e9f0",
          200: "#c6cedc",
          300: "#9aaabf",
          400: "#6d849d",
          500: "#4d6580",
          600: "#3b506b",
          700: "#2d3f57",
          800: "#1c2f48",
          900: "#0d1f3c",   // same as navy-800
          950: "#07101f",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      maxWidth: { content: "80rem" },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.5s ease-out forwards",
        "scale-in":   "scaleIn 0.4s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:    { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        scaleIn:   { "0%": { opacity: "0", transform: "scale(0.95)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        slideDown: { "0%": { opacity: "0", transform: "translateY(-8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        pulseSoft: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.5" } },
      },
    },
  },
  plugins: [],
};
