/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#08080a',
          dark: '#0e0e13',
          card: '#14141a',
          cardHover: '#1a1a24',
          border: '#242432',
          muted: '#8e8e9f',
          light: '#f4f4f6',
          lime: '#ccff00',
          limeHover: '#b8e600',
          limeMuted: 'rgba(204, 255, 0, 0.12)',
          limeBorder: 'rgba(204, 255, 0, 0.28)',
        }
      },
      fontFamily: {
        display: ['"Oswald"', '"Barlow Condensed"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widestPlus: '0.2em',
        tighterPlus: '-0.035em',
      },
      boxShadow: {
        'glow-lime': '0 0 25px rgba(204, 255, 0, 0.35)',
        'glow-lime-sm': '0 0 15px rgba(204, 255, 0, 0.2)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'subtle-grid': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'marquee-reverse': 'marqueeReverse 22s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
