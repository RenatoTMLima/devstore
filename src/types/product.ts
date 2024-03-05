import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
  featured: z.boolean(),
});

export type Product = z.infer<typeof productSchema>;
