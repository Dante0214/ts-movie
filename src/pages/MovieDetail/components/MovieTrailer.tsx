import { useYoutubeTrailerQuery } from "../../../hooks/useMovieTrailer";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import YouTube from "react-youtube";

interface Props {
  open: boolean;
  onClose: () => void;
  id: number;
}

const MovieTrailer = ({ open, onClose, id }: Props) => {
  const {
    data: trailers,
    isError,
    error,
    isLoading,
  } = useYoutubeTrailerQuery({ id, enabled: open });

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !trailers) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "예고편을 불러오는 중 오류가 발생했습니다.";

    const finalMessage =
      !trailers && !error ? "예고편을 찾을 수 없습니다." : errorMessage;

    return <Error message={finalMessage} />;
  }

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  const trailersOnly = trailers?.filter(
    (video) => video.type === "Trailer" && video.site === "YouTube" && video.key
  );
  console.log(trailersOnly);
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3 md:p-0 ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg w-full max-w-4xl p-4 md:p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            예고편
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 font-semibold text-4xl cursor-pointer"
            aria-label="닫기"
          >
            &times;
          </button>
        </div>

        <div className="overflow-y-auto max-h-[50vh] md:max-h-[60vh] mb-4">
          {trailersOnly?.length > 0 ? (
            trailersOnly.map((trailer) => (
              <div key={trailer.id} className="mb-3">
                <h3 className="text-lg md:text-xl font-medium mb-2 text-black">
                  {trailer.name}
                </h3>
                <div className="aspect-video w-full">
                  <YouTube
                    videoId={trailer.key}
                    opts={opts}
                    className="w-full"
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">예고편이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieTrailer;
