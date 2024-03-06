import { z } from "zod";

export const cartItemSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
});

export type CartItem = z.infer<typeof cartItemSchema>;
