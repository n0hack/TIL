import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import remarkToc from 'remark-toc';
import mdx from '@astrojs/mdx';
import { mdxFigurePlugin } from './src/plugins/mdx-figure';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [mdxFigurePlugin({ name: '테스트' })],
  },
  integrations: [preact(), mdx()],
});
