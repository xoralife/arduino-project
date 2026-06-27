"use client";

import { useState, useEffect } from "react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    storeName: "ElectroKit Hub",
    contactEmail: "support@electrokit.com",
    contactPhone: "+1 234 567 890",
    address: "123 Maker Street, Tech City",
    codEnabled: true,
    easypaisaEnabled: true,
    cardEnabled: false,
    freeShippingThreshold: "50",
    shippingRate: "5.99",
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("store_settings");
    if (stored) {
      try { setSettings(JSON.parse(stored)); } catch {}
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("store_settings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      <form onSubmit={handleSave} className="max-w-2xl space-y-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-sm font-semibold text-gray-900">Store Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
              <input type="text" value={settings.storeName} onChange={(e) => setSettings({ ...settings, storeName: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
              <input type="email" value={settings.contactEmail} onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
              <input type="text" value={settings.contactPhone} onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input type="text" value={settings.address} onChange={(e) => setSettings({ ...settings, address: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-sm font-semibold text-gray-900">Payment Methods</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={settings.codEnabled} onChange={(e) => setSettings({ ...settings, codEnabled: e.target.checked })} className="rounded text-secondary focus:ring-secondary" />
              <span className="text-sm text-gray-700">Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={settings.easypaisaEnabled} onChange={(e) => setSettings({ ...settings, easypaisaEnabled: e.target.checked })} className="rounded text-secondary focus:ring-secondary" />
              <span className="text-sm text-gray-700">Easypaisa</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={settings.cardEnabled} onChange={(e) => setSettings({ ...settings, cardEnabled: e.target.checked })} className="rounded text-secondary focus:ring-secondary" />
              <span className="text-sm text-gray-700">Credit / Debit Card</span>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-sm font-semibold text-gray-900">Shipping</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Free Shipping Threshold ($)</label>
              <input type="number" value={settings.freeShippingThreshold} onChange={(e) => setSettings({ ...settings, freeShippingThreshold: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Rate ($)</label>
              <input type="number" step="0.01" value={settings.shippingRate} onChange={(e) => setSettings({ ...settings, shippingRate: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all">
            Save Settings
          </button>
          {saved && <span className="text-sm text-secondary font-medium">Saved!</span>}
        </div>
      </form>
    </div>
  );
}
