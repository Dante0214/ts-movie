import Banner from "./components/Banner/Banner";
import PopulareMovieSlide from "./components/MovieSlides/PopulareMovieSlide";
import TopRatedMovieSlide from "./components/MovieSlides/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/MovieSlides/UpcomingRatedMovieSlide";

const HomePage = () => {
  return (
    <div className="bg-black">
      <Banner />
      <PopulareMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  );
};

export default HomePage;
