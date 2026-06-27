"use client";

import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/components/ui/Toast";

interface WishlistButtonProps {
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function WishlistButton({ product }: WishlistButtonProps) {
  const { toggleItem, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const inWishlist = isInWishlist(product.id);

  return (
    <button
      onClick={() => {
        toggleItem(product);
        showToast(inWishlist ? `${product.name} removed from wishlist` : `${product.name} added to wishlist`);
      }}
      className={`px-8 py-3 border font-semibold rounded-lg transition-all ${
        inWishlist
          ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
          : "border-gray-200 hover:border-primary text-gray-700 hover:text-primary"
      }`}
    >
      {inWishlist ? "♥ In Wishlist" : "♡ Add to Wishlist"}
    </button>
  );
}
