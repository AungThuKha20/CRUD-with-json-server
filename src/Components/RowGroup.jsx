import React, { useContext } from "react";
import Rows from "./Rows";
import { DataContext } from "../Context/DataContext";

const RowGroup = () => {
  const { createDrawer } = useContext(DataContext);
  return (
    <section>
      <div>
        <div>
          <button
            onClick={() => createDrawer()}
            className=" px-6 py-2 rounded-md hover:bg-blue-900 bg-blue-700 text-white font-semibold mt-10"
          >
            Create Course
          </button>
        </div>
        <div>
          <table className=" w-full mt-10 shadow-md shadow-gray-500">
            <thead>
              <tr>
                <th className=" md:px-6 px-2 py-2">#</th>
                <th className=" md:px-6 px-2 py-2">Course Name</th>
                <th className=" md:px-6 px-2 py-2">Short_Name</th>
                <th className=" md:px-6 px-2 py-2">Course Fee</th>
                <th className=" py-2">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <Rows />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RowGroup;
