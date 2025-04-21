import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";
import { PopularMoviesResponse, SearchMoviesResponse } from "../types/tmdb";
interface SearchMoiveParms {
  keyword: string;
  page: number;
}
const fetchSearchMovie = ({ keyword, page }: SearchMoiveParms) => {
  return keyword
    ? api.get<SearchMoviesResponse>(
        `/search/movie?query=${keyword}&page=${page}`
      )
    : api.get<PopularMoviesResponse>(`/movie/popular?page=${page}`);
};
export const useSearchMovieQuery = ({ keyword, page }: SearchMoiveParms) => {
  return useQuery({
    queryKey: ["movie-search", keyword, page],
    queryFn: () => fetchSearchMovie({ keyword, page }),
  });
};
