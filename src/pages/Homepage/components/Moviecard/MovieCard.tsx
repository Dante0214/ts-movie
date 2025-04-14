import { useGenreStore } from "../../../../stores/genreStore";
import { Movie } from "../../../../types/tmdb";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  movie: Movie;
}
const MovieCard = ({ movie }: MovieCardProps) => {
  const getGenreNamesByIds = useGenreStore((state) => state.getGenreNamesByIds);
  const genreNames = getGenreNamesByIds(movie.genre_ids);
  return (
    <div className="group relative w-full h-[360px] md:h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`,
        }}
      />

      {movie.adult && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow-md">
          19
        </div>
      )}

      <div
        className={`
          absolute bottom-0 w-full 
          bg-gradient-to-t from-black/80 to-transparent p-4 
          z-10 transition-all duration-500
          group-hover:translate-y-0 group-hover:opacity-100
          md:translate-y-10 md:opacity-0
        `}
        title={movie.title}
      >
        <h3 className="text-white text-base md:text-lg font-semibold truncate">
          {movie.title}
        </h3>
        <p className="text-gray-300 text-sm">{genreNames.join(", ")}</p>
        <p className="text-yellow-400 text-sm flex items-center gap-1">
          <FaStar className="text-sm" />
          {movie.vote_average.toFixed(1)}
        </p>
        <p className="text-gray-300 text-sm">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
