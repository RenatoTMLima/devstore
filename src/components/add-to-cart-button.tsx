"use client";

import { useCart } from "@/contexts/cart-context";

export function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart } = useCart();

  function handleAddProductToCart() {
    addToCart(productId);
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddProductToCart}
    >
      Add to cart
    </button>
  );
}
