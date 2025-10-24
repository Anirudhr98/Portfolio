module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#05060a',
        panel: '#0b0f16',
        neon: '#7c5cff',
        neon2: '#00e6d6',
        muted: '#98a3b8'
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
          '100%': { transform: 'translateY(0)' }
        },
        hue: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(45deg)' },
          '100%': { filter: 'hue-rotate(0deg)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        hue: 'hue 12s linear infinite'
      },
      boxShadow: {
        'neon-lg': '0 10px 40px rgba(124,92,255,0.18)'
      }
    }
  },
  plugins: []
}
