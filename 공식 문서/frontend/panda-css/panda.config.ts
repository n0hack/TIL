import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1044px',
        xl: '1880px',
        desktop: '1024px',
      },
      tokens: {
        colors: {
          bliss: {
            50: { value: '#c0392b' },
            100: { value: '#3498db' },
          },
        },
      },
      semanticTokens: {
        colors: {
          primary: { value: '{colors.bliss.100}' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
