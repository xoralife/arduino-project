"use client";

import { useState } from "react";
import { useFeedback } from "@/context/FeedbackContext";

export default function FeedbackSection({ postSlug }: { postSlug: string }) {
  const { getFeedback, addFeedback } = useFeedback();
  const feedbacks = getFeedback(postSlug);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    addFeedback({ postSlug, userName: name, comment });
    setName("");
    setComment("");
    setShowForm(false);
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Comments ({feedbacks.length})
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-xl transition-all"
        >
          {showForm ? "Cancel" : "Leave a Comment"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-5 mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
            <textarea required rows={3} value={comment} onChange={(e) => setComment(e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white" placeholder="Share your thoughts..." />
          </div>
          <button type="submit" className="px-6 py-2.5 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-xl transition-all">Post Comment</button>
        </form>
      )}

      {feedbacks.length === 0 && !showForm && (
        <p className="text-gray-400 text-sm text-center py-8">No comments yet. Be the first to share your thoughts!</p>
      )}

      <div className="space-y-4">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="bg-white border border-gray-100 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                {fb.userName.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium text-gray-900">{fb.userName}</span>
              <span className="text-xs text-gray-400 ml-auto">{fb.date}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{fb.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
