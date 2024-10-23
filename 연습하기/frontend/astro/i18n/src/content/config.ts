import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: image(),
    }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: image(),
    }),
});

export const collections = {
  blog: blogCollection,
  news: newsCollection,
};
