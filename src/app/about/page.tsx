import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary via-[#151E3A] to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-accent border border-white/20 backdrop-blur-sm mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Empowering Makers of
            <br />
            <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">All Ages</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            ElectroKit Hub is your trusted source for Arduino boards, sensors, kits, and soldering equipment.
            We believe everyone should have access to the tools and knowledge to bring their electronic ideas to life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2024, ElectroKit Hub started as a small workshop project. We noticed how difficult it was
              for beginners and hobbyists to find quality electronics components and complete project kits at
              affordable prices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve thousands of customers — from young makers building their first LED circuit to
              experienced engineers prototyping advanced IoT systems. Every product we sell is tested and
              curated to ensure the best learning and building experience.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border border-secondary/10">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To make electronics education accessible, affordable, and fun for everyone. We believe in
              learning by doing — and we provide the tools to make that happen.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {[
            { icon: "🔬", title: "Quality Products", desc: "Every component is tested for quality and performance before it reaches your hands." },
            { icon: "📚", title: "Educational Focus", desc: "Our kits include detailed guides and sample code to help you learn as you build." },
            { icon: "💬", title: "Community Support", desc: "Our team of experienced makers is always ready to help with your projects." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Building?</h2>
          <p className="text-gray-500 mb-6">Browse our products and find everything you need for your next project.</p>
          <Link href="/products" className="inline-flex items-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl transition-all">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
