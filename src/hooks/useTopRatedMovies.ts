// TopRatedMovies API 요청 훅
import { api } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { TopRatedMoviesResponse } from "../types/tmdb";

const fetchTopRatedMovies = () => {
  return api.get<TopRatedMoviesResponse>("/movie/top_rated");
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-top-rated"],
    queryFn: fetchTopRatedMovies,
  });
};
