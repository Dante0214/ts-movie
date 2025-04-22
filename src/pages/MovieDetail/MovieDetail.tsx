import { useParams } from "react-router";

import Loading from "../components/Loading";
import Error from "../components/Error";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { FaStar } from "react-icons/fa";
import MovieReview from "./components/MovieReview";
import MovieRecommendation from "./components/MovieRecommendation";
import { useState } from "react";

const MovieDetail = () => {
  const [tab, setTab] = useState<"review" | "recommendation">("review");

  const { id } = useParams();
  if (!id) return <Error message="잘못된 접근입니다." />;

  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });
  console.log(movie);
  if (isLoading) {
    return <Loading />;
  }
  if (isError || !movie) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "영화 정보를 불러오는 중 오류가 발생했습니다.";

    const finalMessage =
      !movie && !error ? "영화 정보를 찾을 수 없습니다." : errorMessage;

    return <Error message={finalMessage} />;
  }

  return (
    <div className=" min-h-screen bg-black text-white px-4 md:px-16 py-10">
      <div className=" flex flex-col lg:flex-row gap-10">
        <div className="flex-shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-lg w-full max-w-sm mx-auto lg:mx-0"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="italic text-red-400 text-xl">{movie.tagline}</p>
          <p className="text-gray-300">{movie.overview}</p>
          <div className="space-y-4 mt-4">
            <div>
              <span className="font-semibold text-gray-400">장르: </span>
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="inline-block bg-gray-700 text-sm rounded-full px-3 py-1 mr-2"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <div>
              <span className=" font-semibold text-gray-400">개봉일: </span>
              {movie.release_date}
            </div>
            <div className="flex items-center gap-2 font-semibold text-gray-400">
              <span>평점:</span>
              <span className="text-yellow-400 flex items-center gap-1">
                <FaStar />
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
            <div>
              <span className=" font-semibold text-gray-400">인기도: </span>
              {movie.popularity.toFixed(0)}점
            </div>
            <div>
              <span className="font-semibold text-gray-400">예산: </span>
              {movie?.budget ? (
                <span>$ {new Intl.NumberFormat().format(movie.budget)} </span>
              ) : (
                "정보 없음"
              )}
            </div>
            <div>
              <span className=" font-semibold text-gray-400">상영시간: </span>
              {movie.runtime}분
            </div>
          </div>
          <div>
            <div className="flex gap-2 my-6">
              <button
                onClick={() => setTab("review")}
                className={`px-4 py-2 rounded font-semibold transition cursor-pointer ${
                  tab === "review"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                리뷰
              </button>
              <button
                onClick={() => setTab("recommendation")}
                className={`cursor-pointer px-4 py-2 rounded font-semibold transition ${
                  tab === "recommendation"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                추천 영화
              </button>
            </div>

            {tab === "review" ? (
              <MovieReview id={movie.id} />
            ) : (
              <MovieRecommendation id={movie.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
