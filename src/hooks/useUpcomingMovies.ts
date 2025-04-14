// TopRatedMovies API 요청 훅
import { api } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { UpcomingMoviesResponse } from "../types/tmdb";

const fetchUpcomingMovies = () => {
  return api.get<UpcomingMoviesResponse>("/movie/upcoming");
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpcomingMovies,
  });
};
