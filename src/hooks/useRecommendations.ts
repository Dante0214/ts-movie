import { api } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { RecommendationsResponse } from "../types/tmdb";
interface Parms {
  id: number;
}

const fetchRecommendations = ({ id }: Parms) => {
  return api.get<RecommendationsResponse>(`/movie/${id}/recommendations`);
};

export const useRecommendationQuery = ({ id }: Parms) => {
  return useQuery({
    queryKey: ["movie-recommendation", id],
    queryFn: () => fetchRecommendations({ id }),
    select: (response) => response.data.results,
  });
};
