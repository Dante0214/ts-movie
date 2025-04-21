import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import logo from "../assets/logo.svg";

const AppLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const searchByKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`movies?q=${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div>
      <div className="w-full flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-gray-800 to-black shadow-lg">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-6 md:h-8 w-auto" />
          </Link>

          <div className="hidden md:flex space-x-2">
            <Link
              to="/"
              className="px-3 md:px-4 py-2 text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="px-3 md:px-4 py-2 text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
            >
              Movies
            </Link>
          </div>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <form onSubmit={searchByKeyword}>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 lg:w-64 px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button type="submit" className="absolute right-3 top-2.5">
              <svg
                className=" h-4 w-4 text-gray-400 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>

            <div className="relative mt-2">
              <input
                type="text"
                placeholder="검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <svg
                className="absolute right-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default AppLayout;
