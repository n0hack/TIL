import { defineCollection, z } from 'astro:content';

const newsletterCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

export const collections = {
  newsletter: newsletterCollection,
};
