"use client";

import { useState, useEffect } from "react";
import { getCategories, getAllProducts } from "@/lib/products";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCat, setNewCat] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("store_categories");
    if (stored) {
      try { setCategories(JSON.parse(stored)); } catch { setCategories(getCategories()); }
    } else {
      setCategories(getCategories());
    }
  }, []);

  const saveCategories = (updated: string[]) => {
    setCategories(updated);
    localStorage.setItem("store_categories", JSON.stringify(updated));
  };

  const addCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newCat.trim();
    if (!trimmed || categories.includes(trimmed)) return;
    saveCategories([...categories, trimmed]);
    setNewCat("");
  };

  const products = getAllProducts();
  const productCounts = products.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
      </div>

      <form onSubmit={addCategory} className="flex items-center gap-3 mb-6">
        <input type="text" value={newCat} onChange={(e) => setNewCat(e.target.value)} placeholder="New category name" className="max-w-xs w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
        <button type="submit" className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-white text-sm font-medium rounded-lg transition-all">Add Category</button>
      </form>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 font-medium text-gray-500">Name</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Slug</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Products</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">{cat}</td>
                <td className="px-4 py-3 text-gray-500">{cat.toLowerCase()}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">{productCounts[cat] || 0} items</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}