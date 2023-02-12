import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.string(),
    readingTime: z.number(),
  }),
});

export const collections = {
  blog: blogCollection,
};
