import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import requirePlugin from 'vite-plugin-require';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': loadEnv(mode, process.cwd(), ''),
    },
    build: {
      outDir: 'build',
    },
    resolve: {
      alias: {
        '@api': path.resolve(__dirname, 'src/api'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@contexts': path.resolve(__dirname, 'src/contexts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@static': path.resolve(__dirname, 'src/static'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: [
            '@emotion/babel-plugin',
            'babel-plugin-macros',
            [
              '@emotion/babel-plugin-jsx-pragmatic',
              {
                export: 'jsx',
                import: '__to_avoid_prepending_/** @jsxImportSource @emotion/react */',
                module: '@emotion/react',
              },
            ],
            [
              '@babel/plugin-transform-react-jsx',
              {
                pragma: '__to_avoid_prepending_/** @jsxImportSource @emotion/react */',
              },
            ],
          ],
        },
      }),
      svgrPlugin(),
      requirePlugin(),
      eslintPlugin(),
    ],
  };
});
