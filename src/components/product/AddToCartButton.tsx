"use client";

import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/Toast";

interface AddToCartButtonProps {
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const { showToast } = useToast();

  return (
    <button
      onClick={() => { addItem(product); showToast(`${product.name} added to cart`); }}
      className="flex-1 px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all"
    >
      Add to Cart
    </button>
  );
}
