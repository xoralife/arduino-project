import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

const blogPosts = [
  { title: "Getting Started with Arduino", slug: "getting-started-arduino" },
  { title: "How to Use an Ultrasonic Sensor", slug: "ultrasonic-sensor-guide" },
  { title: "Top 10 Arduino Projects for Kids", slug: "top-10-arduino-projects-kids" },
  { title: "Complete Guide to Soldering for Beginners", slug: "soldering-beginners-guide" },
  { title: "Building a Smart Home with Arduino", slug: "smart-home-arduino" },
  { title: "Understanding Arduino Sensors", slug: "arduino-sensors-guide" },
];

const kits = [
  { title: "LED Blink Magic Kit", slug: "kits" },
  { title: "Ultrasonic Distance Meter", slug: "kits" },
  { title: "Traffic Light System", slug: "kits" },
  { title: "Smart Night Lamp", slug: "kits" },
  { title: "DIY Robot Car", slug: "kits" },
  { title: "Weather Station Kit", slug: "kits" },
  { title: "RFID Door Lock", slug: "kits" },
  { title: "Music Player Shield", slug: "kits" },
];

export default async function SearchPage(props: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await props.searchParams;
  const query = q?.trim().toLowerCase() || "";

  const productResults = getAllProducts().filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );

  const blogResults = blogPosts.filter(
    (p) => p.title.toLowerCase().includes(query)
  );

  const kitResults = kits.filter(
    (k) => k.title.toLowerCase().includes(query)
  );

  const totalResults = productResults.length + blogResults.length + kitResults.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Search Results</h1>
          {query && (
            <p className="mt-1 text-gray-500">
              {totalResults} result{totalResults !== 1 ? "s" : ""} for &quot;{query}&quot;
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!query ? (
          <div className="text-center py-16">
            <p className="text-gray-400">Enter a search term to find products</p>
          </div>
        ) : totalResults === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No results found for &quot;{query}&quot;</p>
            <p className="mt-1 text-sm text-gray-400">Try a different search term</p>
          </div>
        ) : (
          <div className="space-y-10">
            {productResults.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Products ({productResults.length})
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {productResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}

            {kitResults.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Kits ({kitResults.length})
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {kitResults.map((kit) => (
                    <Link
                      key={kit.title}
                      href="/kits"
                      className="bg-surface rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center mx-auto text-white text-lg">
                        🧰
                      </div>
                      <h3 className="mt-3 text-sm font-semibold text-gray-900">{kit.title}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {blogResults.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Blog Posts ({blogResults.length})
                </h2>
                <div className="space-y-3">
                  {blogResults.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block bg-surface rounded-xl border border-gray-100 p-4 hover:shadow-sm hover:border-gray-200 transition-all"
                    >
                      <h3 className="text-sm font-semibold text-gray-900 hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
