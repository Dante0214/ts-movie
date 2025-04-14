import { create } from "zustand";

export interface Genre {
  id: number;
  name: string;
}

interface GenreState {
  genres: Genre[];
  setGenres: (genres: Genre[]) => void;
  getGenreNamesByIds: (ids: number[]) => string[];
}

export const useGenreStore = create<GenreState>((set, get) => ({
  genres: [],
  setGenres: (genres) => set({ genres }),
  getGenreNamesByIds: (ids) => {
    const { genres } = get();
    return ids
      .map((id) => genres.find((g) => g.id === id)?.name)
      .filter((name): name is string => Boolean(name)); // 타입 좁히기
  },
}));
