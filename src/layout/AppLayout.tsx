import { useState } from "react";
import { Link, Outlet } from "react-router";
import logo from "../assets/logo.svg";

const AppLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 to-black shadow-lg">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
          <div className="flex space-x-2">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
            >
              Movies
            </Link>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
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
      <Outlet />
    </div>
  );
};

export default AppLayout;
