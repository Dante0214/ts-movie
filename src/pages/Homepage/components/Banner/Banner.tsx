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
    <div className="relative h-[600px]">
      {data?.data.results[0] && (
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original${data.data.results[0].backdrop_path}`}
            alt={data.data.results[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
            <div className="absolute bottom-20 left-10 text-white">
              <h1 className="text-5xl font-bold mb-4">
                {data.data.results[0].title}
              </h1>
              <p className="text-lg max-w-2xl">
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
