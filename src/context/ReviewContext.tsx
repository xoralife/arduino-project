"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export interface Review {
  id: string;
  productId: string;
  productName: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewContextType {
  getReviews: (productId: string) => Review[];
  addReview: (review: Omit<Review, "id" | "date">) => void;
  deleteReview: (id: string) => void;
  allReviews: Review[];
}

const ReviewContext = createContext<ReviewContextType | null>(null);

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [allReviews, setAllReviews] = useState<Review[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("product_reviews");
    if (stored) setAllReviews(JSON.parse(stored));
  }, []);

  const save = (reviews: Review[]) => {
    setAllReviews(reviews);
    localStorage.setItem("product_reviews", JSON.stringify(reviews));
  };

  const getReviews = useCallback((productId: string) => {
    return allReviews.filter((r) => r.productId === productId);
  }, [allReviews]);

  const addReview = useCallback((review: Omit<Review, "id" | "date">) => {
    const newReview: Review = {
      ...review,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
    };
    save([newReview, ...allReviews]);
  }, [allReviews]);

  const deleteReview = useCallback((id: string) => {
    save(allReviews.filter((r) => r.id !== id));
  }, [allReviews]);

  return (
    <ReviewContext.Provider value={{ getReviews, addReview, deleteReview, allReviews }}>
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context = useContext(ReviewContext);
  if (!context) throw new Error("useReviews must be used within a ReviewProvider");
  return context;
}
