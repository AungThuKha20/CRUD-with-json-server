import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { FaInfoCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { RiRecycleFill } from "react-icons/ri";

const CreateDrawer = () => {
  const { create, createDrawer, addCourse } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const formHandle = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const newCourse = {
      name: formData.get("course_title"),
      short_name: formData.get("short_name"),
      fee: formData.get("fee")
    };
    console.log(formData.get("close"));
    const resp = await fetch("http://localhost:5173/api/courses", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(newCourse)
    });

    const json = await resp.json();
    addCourse(json);
    setLoading(false);
    if (formData.get("close")) {
      createDrawer();
    }
    formRef.current.reset();
  };
  return (
    <div
      className={`${
        !create && "translate-x-full"
      } lg:w-[30vw] md:w-[40vw] px-6 py-4 w-full right-0  transition-all duration-300 z-20 fixed top-0 shadow-md shadow-gray-500 bg-white h-[100vh] `}
    >
      <div
        onClick={() => createDrawer()}
        className=" cursor-pointer text-[25px]  flex justify-end"
      >
        <MdClose />
      </div>
      <div className=" text-gray-600 flex gap-x-2 items-center text-[25px] font-bold ">
        <span>
          {" "}
          <FaInfoCircle />
        </span>{" "}
        <h1> Create Courses </h1>
      </div>
      <form ref={formRef} onSubmit={formHandle} id="courseForm">
        <div className=" flex flex-col mt-10">
          <label htmlFor="course_title">Course Title</label>
          <input
            required
            type="text"
            id="course_title"
            disabled={loading}
            name="course_title"
            placeholder="eg: Computer Science"
            className={` outline-none mt-2 w-[300px] py-1 placeholder:text-[16px] placeholder:font-semibold px-2 bg-gray-50 rounded-md border-[1px] border-gray-700`}
          />
          <label htmlFor="short_name" className=" mt-5">
            Course ShortName
          </label>
          <input
            required
            type="text"
            id="short_name"
            name="short_name"
            placeholder="eg: CS"
            disabled={loading}
            className=" outline-none mt-2 w-[200px] py-1 placeholder:text-[16px] placeholder:font-semibold px-2 bg-gray-50 rounded-md border-[1px] border-gray-700"
          />
          <label htmlFor="fee" className=" mt-5">
            Course Fee
          </label>
          <input
            type="number"
            required
            id="fee"
            name="fee"
            placeholder=""
            disabled={loading}
            className={`   outline-none mt-2 w-[100px] py-1 placeholder:text-[16px] placeholder:font-semibold px-2 bg-gray-50 rounded-md border-[1px] border-gray-700`}
          />
          <div className=" mt-5 text-gray-900 justify-between flex items-center">
            <div className=" flex  items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                name="close"
                defaultValue
                className={`w-4 h-4   disabled:${loading}  text-blue-600 bg-gray-800 border-gray-300 rounded  outline-none `}
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
              className={`  bg-blue-700 py-2 px-6 w-[150px] text-white font-bold rounded-md`}
            >
              {!loading ? (
                <span>Create</span>
              ) : (
                <span className=" flex items-center">
                  Loading
                  <RiRecycleFill className=" ms-2 animate-spin" />
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateDrawer;
