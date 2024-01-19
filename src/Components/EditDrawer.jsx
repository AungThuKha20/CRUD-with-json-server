import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { FaInfoCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { RiRecycleFill } from "react-icons/ri";

const EditDrawer = () => {
  const {
    edit,
    setEdit,
    editToggle,
    editCourse: { id, name, short_name, fee },
    updateCourse
  } = useContext(DataContext);
  const [loading, setLoading] = useState();
  const idRef = useRef();
  const nameRef = useRef();
  const shortNameRef = useRef();
  const feeRef = useRef();
  const formRef = useRef();
  const checkRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(checkRef.current.checked);
    setLoading(true);
    const editedCourse = {
      name: nameRef.current.value,
      short_name: shortNameRef.current.value,
      fee: feeRef.current.value
    };

    const res = await fetch("http://localhost:5173/api/courses/" + id, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(editedCourse)
    });
    const json = await res.json();
    updateCourse(json);
    setLoading(false);
    if (checkRef.current.checked === true) {
      return editToggle();
    }
  };
  useEffect(() => {
    idRef.current.value = id;
    nameRef.current.value = name;
    shortNameRef.current.value = short_name;
    feeRef.current.value = fee;
  }, []);

  return (
    <div
      className={`${
        !edit && "translate-x-full"
      } lg:w-[30vw] md:w-[40vw] px-6 py-4 w-full right-0  transition-all duration-300 z-20 fixed top-0 shadow-md shadow-gray-500 bg-white h-[100vh] `}
    >
      <div
        onClick={() => editToggle()}
        className=" cursor-pointer text-[25px]  flex justify-end"
      >
        <MdClose />
      </div>
      <div className=" text-gray-600 flex gap-x-2 items-center text-[25px] font-bold ">
        <span>
          {" "}
          <FaInfoCircle />
        </span>{" "}
        <h1> Edit Course </h1>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        id="editForm"
        className=" flex flex-col mt-10"
      >
        <input
          type="hidden"
          name="edit_course_id"
          id="edit_course_id"
          ref={idRef}
          disabled={loading}
        />
        <label htmlFor="course_title">Course Title</label>
        <input
          type="text"
          id="course_title"
          name="course_title"
          ref={nameRef}
          disabled={loading}
          className=" outline-none mt-2 w-[300px] py-1 placeholder:text-[16px] placeholder:font-semibold px-2 bg-gray-50 rounded-md border-[1px] border-gray-700"
        />
        <label htmlFor="short_name" className=" mt-5">
          Course ShortName
        </label>
        <input
          type="text"
          id="short_name"
          name="short_name"
          ref={shortNameRef}
          disabled={loading}
          className=" outline-none mt-2 w-[200px] py-1 placeholder:text-[16px] placeholder:font-semibold px-2 bg-gray-50 rounded-md border-[1px] border-gray-700"
        />
        <label htmlFor="fee" className=" mt-5">
          Course Fee
        </label>
        <input
          type="number"
          id="fee"
          name="fee"
          ref={feeRef}
          disabled={loading}
          className=" outline-none mt-2 w-[100px] py-1 placeholder:text-[16px] placeholder:font-semibold px-2 bg-gray-50 rounded-md border-[1px] border-gray-700"
        />
        <div className=" mt-5 text-gray-900 justify-between flex items-center">
          <div className=" flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              name="close"
              ref={checkRef}
              className="w-4 h-4  text-blue-600 bg-gray-800 border-gray-300 rounded  outline-none "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Close after saved
            </label>
          </div>
          <button
            type="submit"
            className=" bg-blue-700 py-2 px-6 w-[150px] text-white font-bold rounded-md"
          >
            {!loading ? (
              <span>Edit</span>
            ) : (
              <span className=" flex items-center">
                Loading <RiRecycleFill className=" ms-1 animate-spin" />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDrawer;
