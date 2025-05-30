export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  adult: boolean;
  genre_ids: number[];
}

export interface PopularMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface TopRatedMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface UpcomingMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface SearchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface RecommendationsResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Genre {
  id: number;
  name: string;
}

export interface MovieDetailResponse {
  adult: boolean;
  backdrop_path: string;

  budget: number;
  genres: Genre[];

  id: number;

  overview: string;
  popularity: number;
  poster_path: string;

  release_date: string;
  revenue: number;
  runtime: number;

  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Review {
  id: number;
  page: number;
  results: MovieReviewResponse[];
  total_pages: number;
  total_results: number;
}

export interface MovieReviewResponse {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path?: string;
  rating: number;
}
export interface Trailer {
  id: string;
  name: string;
  key: string;
  site: string;
  type: string;
}

export interface TrailerResponse {
  results: Trailer[];
}
