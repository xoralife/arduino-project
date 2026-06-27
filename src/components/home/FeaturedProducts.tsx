import { getAllProducts } from "@/lib/products";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const featuredProducts = getAllProducts().slice(0, 8);

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold text-secondary uppercase tracking-[0.15em]">
              Featured
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Popular Products
            </h2>
            <p className="mt-2 text-gray-500 max-w-md">
              Bestselling electronics components and kits for your next project
            </p>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-primary/5 hover:bg-primary/10 text-primary text-sm font-medium rounded-xl transition-colors"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
