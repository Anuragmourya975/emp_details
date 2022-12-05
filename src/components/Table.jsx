import React from "react";
import TableHeader from "./TableHeader";
import { Link } from "react-router-dom";
import axios from "axios";
function Table(props) {
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    props.loadUsers(0, 4, 0);
  };
  return (
    <>
      {props.users.length === 0 ? (
        <div className="m-5 flex justify-center">
          <div role="status">
            <svg
              className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
          <div className="text-lg">No Data Found ☹! Add a new row above ☝</div>
        </div>
      ) : (
        <div className="overflow-x-auto relative m-0 mt-5 border-x-transparent ">
          <table className="w-full text-md text-left text-gray-900  dark:text-gray-400 border-2">
            <TableHeader />
            <tbody>
              {props.users?.map((user, index) => (
                <tr
                  key={user.id}
                  className="bg-white border-b-2  border-gray-300 dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="py-4 px-6 text-lg">{user.name}</td>
                  <td className="py-4 px-6 text-lg">{user.address}</td>
                  <td className="py-4 px-6 text-lg">{user.email}</td>
                  <td className="py-4 px-6 text-lg">{user.phone}</td>
                  <td className="py-4 px-6 text-lg ">{user.salary}</td>
                  <td className="py-4 px-6 text-lg">
                    <Link to={`/edit/${user.id}`}>
                      <button
                        href="#"
                        className="text-white bg-gradient-to-r from-purple-500 to-green-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                    </Link>

                    <button
                      href="#"
                      className=" text-white bg-gradient-to-r from-red-900 via-red-700 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Table;
