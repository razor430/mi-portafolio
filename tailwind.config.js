/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#070A13',
        card: '#111625',
        edge: '#1F293D',
        deepseek: '#10B981',
        codex: '#3B82F6',
      },
    },
  },
  plugins: [],
}
