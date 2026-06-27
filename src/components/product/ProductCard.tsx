import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-surface rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative">
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-300 group-hover:text-gray-400 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="absolute top-3 right-3 bg-secondary/90 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          ${product.price.toFixed(2)}
        </div>
      </div>
      <div className="p-4">
        <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest">
          {product.category}
        </span>
        <h3 className="mt-1.5 text-sm font-semibold text-gray-900 group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
          <span className="text-xs font-medium text-accent group-hover:translate-x-1 transition-transform">
            Shop now →
          </span>
        </div>
      </div>
    </Link>
  );
}
