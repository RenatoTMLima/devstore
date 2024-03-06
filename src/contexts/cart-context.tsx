"use client";

import { CartItem } from "@/types/cart";
import { ReactNode, createContext, useContext, useState } from "react";

type CartContextType = {
  items: CartItem[];
  addToCart: (productId: number) => void;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(productId: number) {
    setItems((previousState) => {
      const isProductInCart = previousState.some(
        (item) => item.productId === productId
      );

      if (isProductInCart) {
        return previousState.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        return [...previousState, { productId, quantity: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
