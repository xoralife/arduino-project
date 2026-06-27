import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-[#151E3A] to-primary text-white overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/60 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-accent border border-white/20 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            New Arrivals Weekly
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Your Electronics
            <br />
            <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
              DIY Hub
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
            Arduino boards, ultrasonic sensors, soldering kits, and everything you need to build, learn, and create.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30"
            >
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kits"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl transition-all backdrop-blur-sm"
            >
              Explore Kits
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
