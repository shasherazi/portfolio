import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blogs" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      startDate: z.coerce.date(),
    })
    .transform((data) => {
      const dateStr = data.startDate.toISOString().split("T")[0];
      const slugTitle = data.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
      return {
        ...data,
        slug: `${dateStr}-${slugTitle}`,
      };
    }),
});

export const collections = { blog };
