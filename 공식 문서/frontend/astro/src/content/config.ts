import { defineCollection, z } from 'astro:content';

const storyCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: z.object({
        url: image(),
        alt: z.string(),
      }),
      summary: z.string(),
      date: z.date(),
      category: z.string(),
    }),
});

export const collections = {
  story: storyCollection,
};
