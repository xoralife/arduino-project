"use client";

import { useState, useEffect } from "react";

interface StoredUser {
  id: string;
  name: string;
  password: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<{ email: string; name: string }[]>([]);

  useEffect(() => {
    const loaded: { email: string; name: string }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("user_")) {
        try {
          const data: StoredUser = JSON.parse(localStorage.getItem(key)!);
          loaded.push({ email: key.replace("user_", ""), name: data.name });
        } catch {}
      }
    }
    setUsers(loaded);
  }, []);

  const handleDelete = (email: string) => {
    localStorage.removeItem(`user_${email}`);
    setUsers(users.filter((u) => u.email !== email));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Users</h1>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 font-medium text-gray-500">Name</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Email</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">Admin</td>
              <td className="px-4 py-3 text-gray-500">admin</td>
              <td className="px-4 py-3 text-right text-gray-400 text-xs">—</td>
            </tr>
            {users.map((user) => (
              <tr key={user.email} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">{user.name}</td>
                <td className="px-4 py-3 text-gray-500">{user.email}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => handleDelete(user.email)} className="text-rose-500 hover:text-rose-600 text-xs font-medium transition-colors">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-gray-400 text-sm">No registered users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
