import React, { useState, useEffect } from "react";
// import Form from "./Form";
import { Link } from "react-router-dom";
import axios from "axios";
import TableHeader from "./TableHeader";
import Table from "./Table";
import Navbar from "./Navbar";
// import Table from "./Table";

function Home() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4);

  useEffect(() => {
    loadUsers(0, 4, 0);
  }, []);

  const loadUsers = async (start, end, increase) => {
    const result = await axios.get(
      `http://localhost:3003/users?_start=${start}&_end=${end}`
    );
    setUsers(result.data.reverse());
    setCurrentPage(currentPage + increase);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:3003/users?q=${value}`);
    setUsers(response.data.reverse());
    setValue("");
  };

  const handleReset = () => {
    loadUsers(0, 4, 0);
  };
  const renderPagination = () => {
    if (currentPage === 0) {
      return (
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-700 bg-white border border-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-700 bg-white border border-gray-500 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => {
                  loadUsers(4, 8, 1);
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      );
    } else if (currentPage < pageLimit - 1 && users.length === pageLimit) {
      return (
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                // href="#"
                className="px-3 py-2 ml-0 leading-tight text-gray-700 bg-white border border-gray-500 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => {
                  loadUsers((currentPage - 1) * 4, currentPage * 4, -1);
                }}
              >
                Previous
              </a>
            </li>
            <li>
              <a
                // href="#"
                className="px-3 py-2 leading-tight text-gray-700 bg-white border border-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {currentPage + 1}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-700 bg-white border border-gray-500 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => {
                  loadUsers((currentPage + 1) * 4, (currentPage + 2) * 4, 1);
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      );
    } else {
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-700 bg-white border border-gray-500 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => {
                loadUsers(4, 8, -1);
              }}
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-700 bg-white border border-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {currentPage + 1}
            </a>
          </li>
        </ul>
      </nav>;
    }
  };
  return (
    <>
      <div className=" m-8 mt-5 mb-3 flex justify-between ">
        <Link to="/">
          <h1 className="font-medium text-2xl ">Add New</h1>
        </Link>
        <div className="flex mr-5">
          <Navbar />
          {/* search bar */}
          <div className="flex justify-center">
            <form onSubmit={handleSearch}>
              <div className="flex justify-end mr-10">
                <div className="relative">
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
                    className="absolute top-0 -right-10 p-2.5  text-sm font-medium  bg-red-700 rounded-lg border border-red-700 hover:bg-red-800  dark:bg-red-600 dark:hover:bg-red-700 
                    text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 -mr-2
                    "
                    onClick={() => {
                      handleReset();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // width="16"
                      // height="16"
                      fill="currentColor"
                      className=" w-5 h-5 bi bi-r-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46 0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5V4.002Zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417H6.835Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />

      <Table users={users} loadUsers={loadUsers} />

      <div className="flex justify-center m-7">{renderPagination()}</div>
    </>
  );
}

export default Home;
