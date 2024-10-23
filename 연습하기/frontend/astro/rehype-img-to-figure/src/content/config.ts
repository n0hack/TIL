import { defineCollection, z } from 'astro:content';

const collection = defineCollection({
  type: 'content',
});

export const collections = {
  blog: collection,
};
