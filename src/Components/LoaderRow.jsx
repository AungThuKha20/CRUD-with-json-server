import React from "react";

const LoaderRow = () => {
  return (
    <tr className=" h-[80px] w-full animate-pulse   text-center shadow">
      <td className=" px-6  py-2">
        <div className=" h-[30px] mx-auto bg-gray-300 rounded-full dark:bg-gray-600 w-[50px]"></div>
      </td>
      <td className=" px-6  py-2">
        <div className=" h-[30px] mx-auto bg-gray-300 rounded-full dark:bg-gray-600 w-[100px]"></div>
      </td>
      <td className=" px-6  py-2">
        <div className=" h-[30px] mx-auto bg-gray-300 rounded-full dark:bg-gray-600 w-[200px]"></div>
      </td>
      <td className=" px-6  py-2">
        <div className=" h-[30px] mx-auto bg-gray-300 rounded-full dark:bg-gray-600 w-[100px]"></div>
      </td>
      <td className=" flex h-[80px] justify-end gap-3 me-2 items-center">
        <div className=" h-[40px]   bg-gray-300 rounded-full dark:bg-gray-600 w-[40px]"></div>
        <div className=" h-[40px]   bg-gray-300 rounded-full dark:bg-gray-600 w-[40px]"></div>
      </td>
    </tr>
  );
};

export default LoaderRow;
