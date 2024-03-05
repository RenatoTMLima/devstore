import { api } from "./api";
import { productSchema } from "@/types/product";

const REVALIDATE_1_HOUR = 60 * 60;

export async function getFeaturedProducts() {
  const response = await api("/products/featured", {
    next: { revalidate: REVALIDATE_1_HOUR },
  });

  const products = await response.json();

  const parsedProducts = productSchema.array().safeParse(products);

  if (!parsedProducts.success) {
    return [];
  }

  return parsedProducts.data;
}

export async function getProduct(slug: string) {
  const response = await api(`/products/${slug}`, {
    next: { revalidate: REVALIDATE_1_HOUR },
  });

  if (!response.ok) {
    return null;
  }

  const product = await response.json();

  const parsedProducts = productSchema.safeParse(product);

  if (!parsedProducts.success) {
    return null;
  }

  return parsedProducts.data;
}
