import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "geo-bg": "#0a0b1e",
        "geo-bg-alt": "#12122b",
        "geo-purple": "#8b2fe0",
        "geo-blue": "#2f6ef0",
        "geo-cyan": "#22d3ee",
        "geo-pink": "#ef2fb0",
        "geo-yellow": "#f7c948",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "geo-gradient":
          "radial-gradient(circle at 20% 20%, rgba(139,47,224,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(47,110,240,0.35), transparent 50%), radial-gradient(circle at 50% 100%, rgba(239,47,176,0.3), transparent 50%)",
        "geo-cta": "linear-gradient(90deg, #f7c948, #ef2fb0)",
        "geo-conic":
          "conic-gradient(from 0deg, #f7c948, #ef2fb0, #8b2fe0, #2f6ef0, #22d3ee, #f7c948)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(139,47,224,0.6), 0 0 40px rgba(47,110,240,0.35)",
        "neon-pink": "0 0 20px rgba(239,47,176,0.6)",
        "neon-cyan": "0 0 20px rgba(34,211,238,0.5)",
        "neon-sm": "0 0 12px rgba(139,47,224,0.5)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(-4deg)" },
          "50%": { transform: "translateY(-22px) rotate(4deg)" },
        },
        drift: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -30px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "grid-move": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 56px" },
        },
        "grid-move-x": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "56px 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(239,47,176,0.55), 0 0 40px rgba(139,47,224,0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 32px rgba(239,47,176,0.85), 0 0 60px rgba(139,47,224,0.5)",
          },
        },
        "text-glow": {
          "0%, 100%": {
            textShadow:
              "0 0 18px rgba(139,47,224,0.55), 0 0 36px rgba(47,110,240,0.35)",
          },
          "50%": {
            textShadow:
              "0 0 28px rgba(239,47,176,0.7), 0 0 50px rgba(34,211,238,0.4)",
          },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        "dash-run": {
          "0%": { transform: "translateX(-8%)" },
          "100%": { transform: "translateX(8%)" },
        },
        "mountain-drift": {
          "0%": { backgroundPositionX: "0px" },
          "100%": { backgroundPositionX: "-1000px" },
        },
        "vs-clash": {
          "0%, 100%": { transform: "scale(1) rotate(-3deg)" },
          "50%": { transform: "scale(1.12) rotate(3deg)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-60px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(60px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "bar-fill": {
          "0%": { width: "0%" },
        },
        "live-ping": {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-8px)" },
          "40%": { transform: "translateX(7px)" },
          "60%": { transform: "translateX(-5px)" },
          "80%": { transform: "translateX(3px)" },
        },
        "pop-in": {
          "0%": { transform: "scale(0.7)", opacity: "0" },
          "60%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "check-draw": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        "ring-burst": {
          "0%": { transform: "scale(0.6)", opacity: "0.8" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        "grid-move": "grid-move 3.5s linear infinite",
        "grid-move-x": "grid-move-x 6s linear infinite",
        marquee: "marquee 22s linear infinite",
        "spin-slow": "spin-slow 6s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        "text-glow": "text-glow 3s ease-in-out infinite",
        "gradient-pan": "gradient-pan 6s ease infinite",
        blink: "blink 1.6s ease-in-out infinite",
        "dash-run": "dash-run 1.4s ease-in-out infinite alternate",
        "mountain-drift": "mountain-drift 40s linear infinite",
        "vs-clash": "vs-clash 1.8s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-in-right": "slide-in-right 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "live-ping": "live-ping 1.6s cubic-bezier(0,0,0.2,1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
        shake: "shake 0.5s ease-in-out",
        "pop-in": "pop-in 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "check-draw": "check-draw 0.4s ease-out 0.2s forwards",
        "ring-burst": "ring-burst 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
