"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: "📊" },
  { label: "Products", href: "/admin/products", icon: "📦" },
  { label: "Orders", href: "/admin/orders", icon: "📋" },
  { label: "Users", href: "/admin/users", icon: "👥" },
  { label: "Reviews", href: "/admin/reviews", icon: "⭐" },
  { label: "Settings", href: "/admin/settings", icon: "⚙️" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAdmin, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    } else if (!isAdmin) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, isAdmin, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-60 bg-primary text-white shrink-0 hidden lg:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="text-lg font-bold tracking-tight">
            <span className="text-accent">Admin</span> Panel
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-0.5">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Store
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-100 px-6 py-4 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="text-lg font-bold text-primary">
              <span className="text-accent">Admin</span> Panel
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                Store
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
