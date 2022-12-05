import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <Link to="/form">
        <button
          // onClick={navigateToForm}
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          <i className="bi bi-plus-square"></i> &nbsp; Add New Row
        </button>
      </Link>
    </>
  );
}

export default Navbar;
