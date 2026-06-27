"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export interface Feedback {
  id: string;
  postSlug: string;
  userName: string;
  comment: string;
  date: string;
}

interface FeedbackContextType {
  getFeedback: (postSlug: string) => Feedback[];
  addFeedback: (feedback: Omit<Feedback, "id" | "date">) => void;
  deleteFeedback: (id: string) => void;
}

const FeedbackContext = createContext<FeedbackContextType | null>(null);

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [allFeedback, setAllFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("blog_feedback");
    if (stored) setAllFeedback(JSON.parse(stored));
  }, []);

  const save = (feedback: Feedback[]) => {
    setAllFeedback(feedback);
    localStorage.setItem("blog_feedback", JSON.stringify(feedback));
  };

  const getFeedback = useCallback((postSlug: string) => {
    return allFeedback.filter((f) => f.postSlug === postSlug);
  }, [allFeedback]);

  const addFeedback = useCallback((feedback: Omit<Feedback, "id" | "date">) => {
    const newFeedback: Feedback = {
      ...feedback,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
    };
    save([newFeedback, ...allFeedback]);
  }, [allFeedback]);

  const deleteFeedback = useCallback((id: string) => {
    save(allFeedback.filter((f) => f.id !== id));
  }, [allFeedback]);

  return (
    <FeedbackContext.Provider value={{ getFeedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (!context) throw new Error("useFeedback must be used within a FeedbackProvider");
  return context;
}
