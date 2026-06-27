import Link from "next/link";

const categories = [
  {
    name: "Arduino Boards",
    slug: "boards",
    count: "12 items",
    color: "from-blue-500 to-blue-700",
    icon: "🔧",
  },
  {
    name: "Sensors",
    slug: "sensors",
    count: "24 items",
    color: "from-green-500 to-green-700",
    icon: "📡",
  },
  {
    name: "Kits",
    slug: "kits",
    count: "8 items",
    color: "from-orange-500 to-orange-700",
    icon: "🧰",
  },
  {
    name: "Tools",
    slug: "tools",
    count: "15 items",
    color: "from-purple-500 to-purple-700",
    icon: "🔨",
  },
  {
    name: "Components",
    slug: "components",
    count: "30+ items",
    color: "from-red-500 to-red-700",
    icon: "⚡",
  },
  {
    name: "Soldering",
    slug: "soldering",
    count: "10 items",
    color: "from-yellow-500 to-yellow-700",
    icon: "🔥",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
            Categories
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">
            Shop by Category
          </h2>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            Find exactly what you need for your next project
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 text-center"
            >
              <div
                className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform`}
              >
                {cat.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {cat.name}
              </h3>
              <p className="mt-1 text-xs text-gray-400">{cat.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
