import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
      },
      keyframes: ({ theme }) => ({
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink_cursor: {
          from: {
            "border-right": `solid ${theme("borderWidth.8")} transparent`,
          },
          to: {
            "border-right": `solid ${theme("borderWidth.8")} transparent`,
          },
          "50%": { "border-color": theme("colors.blue.500") },
        },
        ripple: {
          from: {
            transform: `scale(0)`,
            opacity: `0.45`,
          },
          to: {
            transform: `scale(100)`,
            opacity: `0`,
          },
        },
      }),
      animation: {
        type: "typing 1.5s steps(20) forwards, blink_cursor 1s step-end infinite",
        ripple: "ripple 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
