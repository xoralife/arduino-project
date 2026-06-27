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
    color: "from-emerald-500 to-emerald-700",
    icon: "📡",
  },
  {
    name: "Kits",
    slug: "kits",
    count: "8 items",
    color: "from-amber-500 to-amber-700",
    icon: "🧰",
  },
  {
    name: "Tools",
    slug: "tools",
    count: "15 items",
    color: "from-violet-500 to-violet-700",
    icon: "🔨",
  },
  {
    name: "Components",
    slug: "components",
    count: "30+ items",
    color: "from-rose-500 to-rose-700",
    icon: "⚡",
  },
  {
    name: "Soldering",
    slug: "soldering",
    count: "10 items",
    color: "from-yellow-500 to-yellow-600",
    icon: "🔥",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-secondary uppercase tracking-[0.15em]">
            Categories
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            Find exactly what you need for your next project
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group bg-surface rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 text-center"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                {cat.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900 group-hover:text-secondary transition-colors">
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
