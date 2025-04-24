import { useNavigate, useSearchParams } from "react-router";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import Loading from "../components/Loading";
import Error from "../components/Error";
import MovieCard from "../Homepage/components/Moviecard/MovieCard";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const MoviePage = () => {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const keyword = query.get("q") ?? "";
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [keyword]);
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  const pageCount = Math.min(data?.data.total_pages ?? 1, 500);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  const goToSearchPage = () => {
    navigate("/movies");
  };
  return (
    <div className="min-h-screen bg-black px-4 md:px-16 lg:px-32">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error message={error?.message} />
      ) : data?.data.results.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md text-center shadow-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              검색 결과가 없습니다
            </h2>
            <p className="text-gray-300 mb-6">
              "{keyword}" 에 대한 검색 결과가 없습니다.
              <br />
              다른 키워드로 검색을 시도해보세요.
            </p>
            <div className="flex flex-col gap-3 justify-center">
              <button
                onClick={goToSearchPage}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors cursor-pointer"
              >
                영화 페이지로
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
            {data?.data.results.map((movie) => (
              <div
                key={movie.id}
                onClick={() => navigate(`/movies/${movie.id}`)}
              >
                <MovieCard movie={movie} alwaysShowDetails={true} />
              </div>
            ))}
          </div>

          <div className="flex justify-center pb-10 mt-6">
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              breakLabel={"..."}
              breakClassName="text-white"
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="flex justify-center space-x-2"
              pageClassName="rounded overflow-hidden cursor-pointer"
              pageLinkClassName="px-3 py-1 inline-block w-full h-full bg-gray-800 text-white hover:bg-red-500"
              previousClassName="rounded overflow-hidden cursor-pointer"
              previousLinkClassName="px-3 py-1 inline-block w-full h-full bg-gray-700 text-white hover:bg-gray-600"
              nextClassName="rounded overflow-hidden cursor-pointer"
              nextLinkClassName="px-3 py-1 inline-block w-full h-full bg-gray-700 text-white hover:bg-gray-600"
              activeClassName=""
              activeLinkClassName="bg-red-500"
              forcePage={page - 1}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MoviePage;
