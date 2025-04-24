import { useState } from "react";
import { useMovieReviewsQuery } from "../../../hooks/useMovieReviews";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import ReviewCard from "./ReviewCard";

interface Props {
  id: number;
}

const MovieReview = ({ id }: Props) => {
  const {
    data: review,
    isLoading,
    isError,
    error,
  } = useMovieReviewsQuery({ id });
  const [visibleCount, setVisibleCount] = useState(5);
  const visibleReviews = review?.slice(0, visibleCount) ?? [];
  if (isLoading) {
    return <Loading />;
  }
  if (isError || !review) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "리뷰 정보를 불러오는 중 오류가 발생했습니다.";

    const finalMessage =
      !review && !error ? "리뷰 정보를 찾을 수 없습니다." : errorMessage;

    return <Error message={finalMessage} />;
  }

  return (
    <>
      <div className="mt-10">
        {visibleReviews.length === 0 ? (
          <p className="text-gray-400">등록된 리뷰가 없습니다</p>
        ) : (
          visibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        )}
      </div>

      {visibleCount < (review?.length ?? 0) && (
        <div className="text-center mt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            더보기
          </button>
        </div>
      )}
    </>
    // <div className="mt-10">
    //   {review.length === 0 ? (
    //     <p className="text-gray-400">등록된 리뷰가 없습니다</p>
    //   ) : (
    //     review.map((review) => <ReviewCard key={review.id} review={review} />)
    //   )}
    // </div>
  );
};

export default MovieReview;
