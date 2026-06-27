"use client";

import { getAllProducts } from "@/lib/products";

const stats = [
  { label: "Total Products", value: getAllProducts().length, color: "bg-blue-500" },
  { label: "Categories", value: 6, color: "bg-green-500" },
  { label: "Orders", value: 0, color: "bg-orange-500" },
  { label: "Customers", value: 0, color: "bg-purple-500" },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg opacity-20`} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
        <p className="text-gray-400 text-sm">No orders yet. Orders will appear here once customers start purchasing.</p>
      </div>
    </div>
  );
}
