"use client";

import { useState } from "react";
import { useReviews } from "@/context/ReviewContext";
import { StarRatingDisplay, StarRatingInput } from "./StarRating";

export default function ReviewSection({ productId, productName }: { productId: string; productName: string }) {
  const { getReviews, addReview } = useReviews();
  const reviews = getReviews(productId);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) return;
    addReview({ productId, productName, userName: name, rating, comment });
    setName("");
    setRating(0);
    setComment("");
    setShowForm(false);
  };

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Reviews</h2>
          {reviews.length > 0 && (
            <p className="text-sm text-gray-500 mt-1">
              <StarRatingDisplay rating={Math.round(avgRating)} />
              <span className="ml-2">{avgRating.toFixed(1)} out of 5 ({reviews.length} review{reviews.length !== 1 ? "s" : ""})</span>
            </p>
          )}
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-xl transition-all"
        >
          {showForm ? "Cancel" : "Write a Review"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-5 mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text" required value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Rating</label>
            <StarRatingInput value={rating} onChange={setRating} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
            <textarea
              required rows={3} value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
              placeholder="Share your experience..."
            />
          </div>
          <button type="submit" className="px-6 py-2.5 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-xl transition-all">
            Submit Review
          </button>
        </form>
      )}

      {reviews.length === 0 && !showForm && (
        <p className="text-gray-400 text-sm text-center py-8">No reviews yet. Be the first to review this product!</p>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white border border-gray-100 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                  {review.userName.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-900">{review.userName}</span>
              </div>
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>
            <div className="mt-2">
              <StarRatingDisplay rating={review.rating} />
            </div>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
