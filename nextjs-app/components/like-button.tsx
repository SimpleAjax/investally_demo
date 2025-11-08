"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  postId: string;
  initialLikeCount: number;
}

export default function LikeButton({ postId, initialLikeCount }: LikeButtonProps) {
  const [likeCount, setLikeCount] = useState(initialLikeCount || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if user has already liked this post
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    setIsLiked(likedPosts.includes(postId));
  }, [postId]);

  const handleLike = async () => {
    if (isLiked || isLoading) return;

    setIsLoading(true);

    // Optimistic update
    setLikeCount((prev) => prev + 1);
    setIsLiked(true);

    try {
      const response = await fetch("/api/blog/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });

      if (!response.ok) {
        throw new Error("Failed to like post");
      }

      const data = await response.json();

      // Update like count with actual value from server
      setLikeCount(data.likeCount);

      // Save to localStorage
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
      likedPosts.push(postId);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    } catch (error) {
      console.error("Error liking post:", error);
      // Revert optimistic update on error
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={isLiked || isLoading}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
        isLiked
          ? "bg-red-50 border-red-500 text-red-600 cursor-not-allowed"
          : "bg-white border-slate-200 text-slate-700 hover:border-red-500 hover:text-red-600 hover:bg-red-50"
      }`}
      aria-label={isLiked ? "Already liked" : "Like this post"}
    >
      <Heart
        className={`h-5 w-5 transition-all ${
          isLiked ? "fill-red-600 text-red-600" : ""
        }`}
      />
      <span className="font-semibold">{likeCount}</span>
    </button>
  );
}
