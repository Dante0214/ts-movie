import { TrailerResponse } from "../types/tmdb";
import { api } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
interface Parms {
  id: number;
}

const fetchYoutubeTrailer = ({ id }: Parms) => {
  return api.get<TrailerResponse>(`/movie/${id}/videos`);
};

export const useYoutubeTrailerQuery = ({ id }: Parms) => {
  return useQuery({
    queryKey: ["movie-YoutubeTrailer", id],
    queryFn: () => fetchYoutubeTrailer({ id }),
    select: (response) => response.data.results,
  });
};
