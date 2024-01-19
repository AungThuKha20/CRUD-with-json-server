import React, { useContext, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { DataContext } from "../Context/DataContext";
import { GiCycle } from "react-icons/gi";

const Rowmap = ({ course, index }) => {
  const { id } = course;
  const { deleteRow, editToggle, setEditCourse, editCourse } =
    useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    const resp = await fetch("http://localhost:5173/api/courses/" + id, {
      method: "Delete"
    });
    if (resp.status === 204) {
      setLoading(false);
      deleteRow(id);
    }
  };
  ////edit
  const handleBtn = async () => {
    setEditLoading(true);
    const data = await fetch("http://localhost:5173/api/courses/" + id);
    const editData = await data.json();
    editToggle();
    // console.log(editData);
    setEditCourse(editData);
    setEditLoading(false);
    console.log(editCourse);
  };

  return (
    <tr className=" h-[80px]  text-center shadow">
      <td className="  md:px-6 px-2 py-2">{index + 1}</td>
      <td className="  md:px-6 px-2 py-2">{course.name}</td>
      <td className="  md:px-6 px-2 py-2">{course.short_name}</td>
      <td className="  md:px-6 px-2 py-2">{course.fee}</td>
      <td className=" flex h-[80px] me-3 gap-3 justify-end items-center">
        <button
          onClick={() => handleBtn(id)}
          className=" h-[40px] flex items-center justify-center w-[40px] rounded-full bg-gray-300"
        >
          {!editLoading ? <FaEdit /> : <GiCycle className=" animate-spin" />}
        </button>
        <button
          onClick={() => handleDelete(id)}
          className={` disabled:${loading} h-[40px] flex items-center justify-center w-[40px] rounded-full bg-gray-300`}
        >
          {!loading ? <FaTrashAlt /> : <GiCycle className=" animate-spin" />}
        </button>
      </td>
    </tr>
  );
};

export default Rowmap;
