import React from "react";

function TableHeader() {
  return (
    <>
      <thead className="text-lg border-x-transparent text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-2">
        <tr>
          <th scope="col" className="py-3 px-6">
            S.No.
          </th>
          <th scope="col" className="py-3 px-6">
            Empployee Name
          </th>
          <th scope="col" className="py-3 px-6">
            Address
          </th>
          <th scope="col" className="py-3 px-6">
            Email
          </th>
          <th scope="col" className="py-3 px-6">
            Phone Number
          </th>
          <th scope="col" className="py-3 px-6">
            Salary
          </th>
          <th scope="col" className="py-3 px-6">
            Action
          </th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
