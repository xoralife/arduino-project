import { getAllProducts, getCategories } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export default async function ProductsPage(props: { searchParams: Promise<{ category?: string; search?: string; sort?: string }> }) {
  const searchParams = await props.searchParams;
  const categories = getCategories();
  const allProducts = getAllProducts();

  let filtered = [...allProducts];

  if (searchParams.category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === searchParams.category!.toLowerCase()
    );
  }

  if (searchParams.search) {
    const q = searchParams.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  if (searchParams.sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (searchParams.sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (searchParams.sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">All Products</h1>
          <p className="mt-1 text-gray-500">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-6">
          <aside className="w-full sm:w-56 shrink-0">
            <div className="bg-white rounded-xl border border-gray-100 p-4 space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Categories
                </h3>
                <div className="space-y-1">
                  <a
                    href="/products"
                    className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      !searchParams.category
                        ? "bg-primary text-white font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    All
                  </a>
                  {categories.map((cat) => (
                    <a
                      key={cat}
                      href={`/products?category=${cat.toLowerCase()}`}
                      className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${
                        searchParams.category === cat.toLowerCase()
                          ? "bg-primary text-white font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {cat}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Sort By
                </h3>
                <div className="space-y-1">
                  {[
                    { label: "Default", value: "" },
                    { label: "Price: Low to High", value: "price-asc" },
                    { label: "Price: High to Low", value: "price-desc" },
                    { label: "Name A-Z", value: "name" },
                  ].map((opt) => (
                    <a
                      key={opt.value}
                      href={`/products?${new URLSearchParams(
                        searchParams.sort === opt.value
                          ? { ...searchParams, sort: "" }
                          : { ...searchParams, sort: opt.value }
                      )}`}
                      className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${
                        searchParams.sort === opt.value || (!searchParams.sort && !opt.value)
                          ? "bg-primary text-white font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {opt.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No products found</p>
                <a href="/products" className="mt-2 inline-block text-sm text-primary hover:underline">
                  Clear filters
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
