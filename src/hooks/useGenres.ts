import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { useGenreStore } from "../stores/genreStore";

const useGenres = () => {
  const [loading, setLoading] = useState(true);
  const setGenres = useGenreStore((state) => state.setGenres);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data } = await api.get("/genre/movie/list");
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, [setGenres]);

  return { loading };
};

export default useGenres;
