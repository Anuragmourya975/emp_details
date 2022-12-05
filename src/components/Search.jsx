import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios
      .get("http://localhost:3003/users")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
  // console.log("data", data);
  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .post(`http://localhost:3003/users?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };

  const handleReset = () => {
    loadUserData();
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search..."
              required
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 
                    text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium
                    "
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <button
              className="absolute top-0 -right-10 p-2.5 text-sm font-medium  bg-red-700 rounded-lg border border-red-700 hover:bg-red-800  dark:bg-red-600 dark:hover:bg-red-700 
                    text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800
                    "
              onClick={() => {
                handleReset();
              }}
            >
              <i class="bi bi-x-circle"></i>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
