import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-[#0F2440] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30 mb-6">
            New Arrivals Weekly
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Your Electronics
            <br />
            <span className="text-accent">DIY Hub</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
            Arduino boards, ultrasonic sensors, soldering kits, and everything you need to build, learn, and create.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all"
            >
              Shop Now
            </Link>
            <Link
              href="/kits"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-all"
            >
              Explore Kits
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
