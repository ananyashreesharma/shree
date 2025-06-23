/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['"Share Tech Mono"', '"Geist Mono"', 'monospace'],
        'geist': ['Geist Mono', 'monospace'],
        'typewriter': ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Geist Mono', 'Courier New', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'fira': ['Fira Code', 'monospace'],
        'source': ['Source Code Pro', 'monospace'],
      },
      colors: {
        'color-100': '#f2f2f2',
        'color-200': '#e9ecef',
        'color-300': '#dee2e6',
        'color-400': '#ced4da',
        'color-500': '#adb5bd',
        'color-700': '#495057',
        'color-800': '#2c3e50',
        'color-900': '#233140',
      }
    },
  },
  plugins: [],
} 