import ProductCard from "@/components/product/ProductCard";

const featuredProducts = [
  { id: "1", name: "Arduino Uno R3 Board", price: 24.99, image: "/products/arduino-uno.jpg", category: "Boards" },
  { id: "2", name: "HC-SR04 Ultrasonic Sensor", price: 3.49, image: "/products/hc-sr04.jpg", category: "Sensors" },
  { id: "3", name: "Soldering Iron Kit 60W", price: 18.99, image: "/products/soldering-kit.jpg", category: "Tools" },
  { id: "4", name: "Arduino Starter Kit", price: 39.99, image: "/products/starter-kit.jpg", category: "Kits" },
  { id: "5", name: "Breadboard + Jumper Wires", price: 5.99, image: "/products/breadboard.jpg", category: "Accessories" },
  { id: "6", name: "RGB LED Module", price: 2.99, image: "/products/rgb-led.jpg", category: "Components" },
  { id: "7", name: "Arduino Nano V3.0", price: 14.99, image: "/products/arduino-nano.jpg", category: "Boards" },
  { id: "8", name: "5V Relay Module 4-Channel", price: 7.99, image: "/products/relay.jpg", category: "Modules" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Featured
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">
              Popular Products
            </h2>
          </div>
          <a
            href="/products"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
