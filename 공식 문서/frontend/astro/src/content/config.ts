import { defineCollection, z } from 'astro:content';

const newsletterCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  newsletter: newsletterCollection,
  blog: blogCollection,
};
