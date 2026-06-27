"use client";

import { useState, useEffect } from "react";

interface Review {
  id: string;
  productId: string;
  productName: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("product_reviews");
    if (stored) {
      setReviews(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (id: string) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    localStorage.setItem("product_reviews", JSON.stringify(updated));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h1>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 font-medium text-gray-500">Product</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">User</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Rating</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Comment</th>
              <th className="text-left px-4 py-3 font-medium text-gray-500">Date</th>
              <th className="text-right px-4 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">{review.productName}</td>
                <td className="px-4 py-3 text-gray-500">{review.userName}</td>
                <td className="px-4 py-3">
                  <span className="text-amber-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs truncate">{review.comment}</td>
                <td className="px-4 py-3 text-gray-400 text-xs">{review.date}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => handleDelete(review.id)} className="text-rose-500 hover:text-rose-600 text-xs font-medium transition-colors">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {reviews.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400 text-sm">No reviews yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
