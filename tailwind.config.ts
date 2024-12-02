import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#F5F8FF',
          600: '#0066CC',
          700: '#004999',
        },
        gray: {
          50: '#F9FAFB',
          600: '#4B4B4B',
          900: '#1D1D1F',
        },
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '-apple-system', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading-1': ['48px', '1.1'],
        'heading-2': ['52px', '1.1'],
        'heading-3': ['32px', '1.2'],
        'body': ['17px', '1.5'],
      },
      spacing: {
        'section': '80px',
      },
      gridTemplateColumns: {
        'main': 'repeat(12, minmax(0, 1fr))',
      },
      gap: {
        'gutter': '24px',
      },
    },
  },
  plugins: [],
}