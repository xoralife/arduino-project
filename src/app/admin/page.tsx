"use client";

import { useState, useEffect } from "react";
import { getAllProducts } from "@/lib/products";

interface Order {
  id: string;
  customerName: string;
  email: string;
  total: number;
  status: string;
  date: string;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [users, setUsers] = useState<{ name: string }[]>([]);
  const products = getAllProducts();

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) setOrders(JSON.parse(storedOrders));
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) setUsers(JSON.parse(storedUsers));
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  const stats = [
    { label: "Total Products", value: products.length, color: "bg-blue-500" },
    { label: "Categories", value: [...new Set(products.map((p) => p.category))].length, color: "bg-green-500" },
    { label: "Total Orders", value: orders.length, color: "bg-amber-500" },
    { label: "Revenue", value: `$${totalRevenue.toFixed(2)}`, color: "bg-purple-500" },
  ];

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

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            <span className="text-xs text-gray-400">{orders.length} total</span>
          </div>
          {orders.length === 0 ? (
            <p className="text-gray-400 text-sm">No orders yet.</p>
          ) : (
            <div className="space-y-3">
              {orders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">#{order.id}</p>
                    <p className="text-xs text-gray-400">{order.customerName}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">${order.total.toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Users</h2>
            <span className="text-xs text-gray-400">{users.length} total</span>
          </div>
          {users.length === 0 ? (
            <p className="text-gray-400 text-sm">No registered users yet.</p>
          ) : (
            <div className="space-y-3">
              {users.slice(0, 5).map((user, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">{user.name[0]}</span>
                  </div>
                  <span className="text-sm text-gray-900">{user.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
