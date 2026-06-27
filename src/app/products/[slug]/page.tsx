import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import AddToCartButton from "@/components/product/AddToCartButton";
import WishlistButton from "@/components/product/WishlistButton";
import ReviewSection from "@/components/review/ReviewSection";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-600">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-square bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-12">
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-gray-300"
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

          <div className="flex flex-col">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            <p className="mt-4 text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>

            <div className="mt-2 flex items-center gap-2">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  product.stock > 0 ? "bg-secondary" : "bg-red-500"
                }`}
              />
              <span className={`text-sm ${product.stock > 0 ? "text-secondary" : "text-red-500"}`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
              </span>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AddToCartButton product={product} />
              <WishlistButton product={product} />
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Category</span>
                  <p className="font-medium text-gray-900">{product.category}</p>
                </div>
                <div>
                  <span className="text-gray-400">Product ID</span>
                  <p className="font-medium text-gray-900">#{product.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ReviewSection productId={product.id} productName={product.name} />
        </div>
      </div>
    </div>
  );
}
