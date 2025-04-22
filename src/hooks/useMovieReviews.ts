import { api } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { Review } from "../types/tmdb";
interface MovieReviewParms {
  id: number;
}

const fetchMovieReviews = ({ id }: MovieReviewParms) => {
  return api.get<Review>(`/movie/${id}/reviews`);
};

export const useMovieReviewsQuery = ({ id }: MovieReviewParms) => {
  return useQuery({
    queryKey: ["movie-review", id],
    queryFn: () => fetchMovieReviews({ id }),
    select: (response) => response.data.results,
  });
};
