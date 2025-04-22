import React, { useState } from "react";
import { MovieReviewResponse } from "../../../types/tmdb";

interface Props {
  review: MovieReviewResponse;
}

const ReviewCard = ({ review }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const contentLimit = 200;
  const isLong = review.content.length > contentLimit;
  const displayedContent = expanded
    ? review.content
    : review.content.slice(0, contentLimit);

  return (
    <div className="border border-gray-300 rounded-2xl p-4 mb-4 shadow-sm bg-white">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold text-gray-800">
          {review.author_details.username}
        </span>
        {review.author_details.rating !== null && (
          <span className="text-sm text-yellow-500">
            ⭐ {review.author_details.rating}/10
          </span>
        )}
      </div>
      <p className="text-gray-700 whitespace-pre-line">
        {displayedContent}
        {isLong && !expanded && "..."}
      </p>
      {isLong && (
        <button
          className="mt-2 text-blue-600 text-sm hover:underline cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "접기" : "더보기"}
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
