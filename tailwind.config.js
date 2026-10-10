/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#09090b',
        brand: {
          indigo: '#818cf8',
          deep: '#6366f1',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'eq': {
          '0%, 100%': { transform: 'scaleY(0.25)' },
          '50%': { transform: 'scaleY(1)' },
        },
        'ping-soft': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 14s linear infinite',
        'eq': 'eq 1.1s ease-in-out infinite',
        'ping-soft': 'ping-soft 2s cubic-bezier(0,0,.2,1) infinite',
      },
    },
  },
  plugins: [],
}
