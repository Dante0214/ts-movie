import { api } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { MovieDetailResponse } from "../types/tmdb";

interface movieDetailParms {
  id: string;
}

const fetchMovieDetail = ({ id }: movieDetailParms) => {
  return api.get<MovieDetailResponse>(`/movie/${id}`);
};

export const useMovieDetailQuery = ({ id }: movieDetailParms) => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => fetchMovieDetail({ id }),
    select: (response) => response.data,
  });
};
