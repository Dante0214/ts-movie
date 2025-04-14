import "./App.css";
import { Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/Homepage/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import NotFoundPage from "./pages/NotFoundpage/NotFoundPage";
//홈페이지
//영화전체 /movies
//상세 /movies/:id

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies:id" element={<MovieDetail />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
