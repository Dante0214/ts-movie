import { Movie } from "../../../../types/tmdb";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  movie: Movie;
}
const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div
      className="relative w-full h-[360px] md:h-[400px] bg-cover bg-center rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`,
      }}
    >
      {movie.adult && (
        <div className=" absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          19
        </div>
      )}
      <div
        className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4"
        title={movie.title}
      >
        <h3 className="text-white text-base md:text-lg font-semibold truncate">
          {movie.title}
        </h3>
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
