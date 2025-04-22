import { useRecommendationQuery } from "../../../hooks/useRecommendations";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import RecommendationCard from "./RecommendationCard";

interface Props {
  id: number;
}

const MovieRecommendation = ({ id }: Props) => {
  const {
    data: recommend,
    isLoading,
    isError,
    error,
  } = useRecommendationQuery({ id });
  if (isLoading) {
    return <Loading />;
  }
  if (isError || !recommend) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "추천 목록을 불러오는 중 오류가 발생했습니다.";

    const finalMessage =
      !recommend && !error ? "추천 목록을 찾을 수 없습니다." : errorMessage;

    return <Error message={finalMessage} />;
  }
  console.log(recommend);

  return (
    <>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {recommend.length === 0 ? (
          <p className="text-gray-400">추천영화가 없습니다</p>
        ) : (
          recommend.map((recommend) => (
            <RecommendationCard key={recommend.id} movie={recommend} />
          ))
        )}
      </div>
    </>
  );
};

export default MovieRecommendation;
