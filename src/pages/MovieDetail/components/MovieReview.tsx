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
  console.log(review);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">리뷰</h2>
      {review.length === 0 ? (
        <p className="text-gray-400">등록된 리뷰가 없습니다</p>
      ) : (
        review.map((review) => <ReviewCard key={review.id} review={review} />)
      )}
    </div>
  );
};

export default MovieReview;
