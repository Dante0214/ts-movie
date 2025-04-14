import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Error from "../../../components/Error";
import Loading from "../../../components/Loading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import MovieCard from "../Moviecard/MovieCard";
import { useNavigate } from "react-router";

const PopulareMovieSlide = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold text-white mb-4">🔥 인기 영화</h2>
      <Swiper
        className="!px-10"
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {data?.data.results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="cursor-pointer"
            >
              <MovieCard movie={movie} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopulareMovieSlide;
