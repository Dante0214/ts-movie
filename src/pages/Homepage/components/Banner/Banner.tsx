import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Error from "../../../components/Error";
import Loading from "../../../components/Loading";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <div className="relative h-64 sm:h-80 md:h-96 lg:h-128">
      {data?.data.results[0] && (
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original${data.data.results[0].backdrop_path}`}
            alt={data.data.results[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
            <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-20 left-4 sm:left-6 md:left-8 lg:left-10 text-white">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4">
                {data.data.results[0].title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                {data.data.results[0].overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
