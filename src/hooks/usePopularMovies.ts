import { api } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { PopularMoviesResponse } from "../types/tmdb";

const fetchPopularMovies = () => {
  return api.get<PopularMoviesResponse>("/movie/popular");
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
  });
};
