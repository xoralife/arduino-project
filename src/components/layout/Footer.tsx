import Link from "next/link";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "Arduino Boards", href: "/products?category=boards" },
    { label: "Sensors", href: "/products?category=sensors" },
    { label: "Kits", href: "/kits" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Returns", href: "/returns" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white tracking-tight">
              <span className="text-accent">Electro</span>Kit Hub
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              Your trusted source for Arduino boards, sensors, kits, and soldering equipment.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} ElectroKit Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
