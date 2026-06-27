"use client";

import { useState, useEffect } from "react";

interface Order {
  id: string;
  customerName: string;
  email: string;
  total: number;
  status: string;
  paymentMethod: string;
  date: string;
}

const statuses = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

const statusColors: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-violet-100 text-violet-700",
  Delivered: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-rose-100 text-rose-700",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("orders");
    if (stored) setOrders(JSON.parse(stored));
  }, []);

  const updateStatus = (id: string, status: string) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, status } : o));
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Orders</h1>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 font-medium text-gray-500">Order ID</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Customer</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Total</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Payment</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Status</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-gray-900">#{order.id}</td>
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-900">{order.customerName}</p>
                  <p className="text-xs text-gray-400">{order.email}</p>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900">${order.total.toFixed(2)}</td>
                <td className="px-4 py-3 text-gray-500">{order.paymentMethod}</td>
                <td className="px-4 py-3">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className={`px-2 py-1 rounded-full text-xs font-medium border-0 cursor-pointer ${statusColors[order.status] || "bg-gray-100 text-gray-700"}`}
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3 text-xs text-gray-400">{order.date}</td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400 text-sm">No orders yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
