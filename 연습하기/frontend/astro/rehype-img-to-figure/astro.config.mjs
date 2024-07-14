import { defineConfig } from 'astro/config';
import { mdxFigurefy } from './src/plugins/mdxFigurefy';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [[mdxFigurefy, { className: 'test' }]],
  },
});
