/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gh-bg': '#0d1117',
        'gh-surface': '#161b22',
        'gh-border': '#30363d',
        'gh-text': '#e6edf3',
        'gh-muted': '#8b949e',
        'gh-blue': '#2f81f7',
        'gh-green': '#3fb950',
        'gh-yellow': '#d29922',
        'gh-red': '#f85149',
        'gh-purple': '#d2a8ff',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
