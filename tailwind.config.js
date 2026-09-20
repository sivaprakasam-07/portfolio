// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#080A0C',
          dark: '#050709',
        },
        surface: {
          DEFAULT: '#0D1117',
          card: '#12171F',
          elevated: '#18202B',
          overlay: 'rgba(13, 17, 23, 0.75)',
        },
        accent: {
          mint: '#00F5A0',
          emerald: '#00D285',
          glow: 'rgba(0, 245, 160, 0.15)',
          muted: 'rgba(0, 245, 160, 0.1)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(255, 255, 255, 0.14)',
          glow: 'rgba(0, 245, 160, 0.3)',
        },
        content: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-mint': '0 0 25px rgba(0, 245, 160, 0.25)',
        'glow-subtle': '0 0 15px rgba(0, 245, 160, 0.12)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'radial-gradient-mint': 'radial-gradient(circle at 50% 0%, rgba(0, 245, 160, 0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
