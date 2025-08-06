const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        "manrope": ["Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f8f8ff",
          100: "#f0f0ff",
          200: "#e0e0ff",
          300: "#cdcdff", // Brand color
          400: "#b8b8ff",
          500: "#a3a3ff",
          600: "#8e8eff",
          700: "#7979ff",
          800: "#5555cc",
          900: "#26265a", // Brand color
          950: "#1a1a40",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        // Brand gradient colors
        brand: {
          light: "#cdcdff",
          dark: "#26265a",
          navy: {
            50: "#f4f4f9",
            100: "#e8e8f3",
            200: "#d1d1e7",
            300: "#b5b5d9",
            400: "#9494c8",
            500: "#7676b6",
            600: "#5e5ea3",
            700: "#4d4d8a",
            800: "#404071",
            900: "#26265a",
            950: "#1c1c42",
          },
          lavender: {
            50: "#fafaff",
            100: "#f5f5ff",
            200: "#ebebff",
            300: "#cdcdff",
            400: "#b8b8ff",
            500: "#a3a3ff",
            600: "#8e8eff",
            700: "#7979ff",
            800: "#6464ff",
            900: "#4f4fff",
            950: "#3a3aff",
          },
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-premium": "var(--gradient-premium)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-surface": "var(--gradient-surface)",
      },
      boxShadow: {
        "premium-sm": "var(--shadow-sm)",
        "premium-md": "var(--shadow-md)",
        "premium-lg": "var(--shadow-lg)",
        "premium-xl": "var(--shadow-xl)",
        "premium": "var(--shadow-premium)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "fade-in-up": "fadeInUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-up-delay": "fadeInUp 900ms cubic-bezier(0.16, 1, 0.3, 1) 300ms both",
        "scale-in": "scaleIn 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-left": "slideInLeft 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-right": "slideInRight 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "floating 3s ease-in-out infinite",
        "pulse-premium": "pulsePremium 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-subtle": "bounceSubtle 2s infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
        "fadeInUp": {
          from: {
            opacity: 0,
            transform: "translateY(40px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "scaleIn": {
          from: {
            opacity: 0,
            transform: "scale(0.92)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        "slideInLeft": {
          from: {
            opacity: 0,
            transform: "translateX(-40px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "slideInRight": {
          from: {
            opacity: 0,
            transform: "translateX(40px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "shimmer": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "floating": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulsePremium": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        "bounceSubtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "glow": {
          "0%": {
            boxShadow: "0 0 5px hsl(var(--primary) / 0.3)",
            filter: "brightness(1)",
          },
          "100%": {
            boxShadow: "0 0 20px hsl(var(--primary) / 0.6), 0 0 35px hsl(var(--primary) / 0.4)",
            filter: "brightness(1.1)",
          },
        },
      },
    },
  },
  plugins: [animate],
};
