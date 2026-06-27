import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
    >
      <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-300"
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
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-secondary uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-2 text-lg font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
