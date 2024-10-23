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
  patterns: {
    extend: {
      scrollable: {
        description: 'A container that allows for scrolling',
        defaultValues: {
          direction: 'vertical',
          hideScrollbar: true,
        },
        properties: {
          // The direction of the scroll
          direction: { type: 'enum', value: ['horizontal', 'vertical'] },
          // Whether to hide the scrollbar
          hideScrollbar: { type: 'boolean' },
        },
        // disallow the `overflow` property (in TypeScript)
        blocklist: ['overflow'],
        transform(props) {
          const { direction, hideScrollbar, ...rest } = props;
          return {
            overflow: 'auto',
            height: direction === 'horizontal' ? '100%' : 'auto',
            width: direction === 'vertical' ? '100%' : 'auto',
            scrollbarWidth: hideScrollbar ? 'none' : 'auto',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              display: hideScrollbar ? 'none' : 'auto',
            },
            ...rest,
          };
        },
      },
      lucidPattern: {
        description: 'flex한 컨테이너를 만듭니다.',
        properties: {
          direction: { type: 'enum', value: ['row', 'column'] },
        },
        defaultValues: {
          direction: 'row',
        },
        blocklist: ['direction'],
        transform(props) {
          const { direction, ...rest } = props;

          return {
            display: 'flex',
            flexDirection: direction,
            ...rest,
          };
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react',
});
