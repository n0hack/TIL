import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');

  return rss({
    title: 'Astro Learnen | Blog',
    description: 'Astro Learnen Blog',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>ko</language>`,
    trailingSlash: false,
  });
}
