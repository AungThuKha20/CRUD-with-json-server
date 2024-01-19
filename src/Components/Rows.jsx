import React, { useContext, useEffect } from "react";
import Rowmap from "./Rowmap";
import { DataContext } from "../Context/DataContext";
import LoaderRow from "./LoaderRow";

const Rows = () => {
  const { courses, setCourses, ready, setReady } = useContext(DataContext);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("http://localhost:5173/api/courses");
      const data = await resp.json();

      setCourses(data);
      setReady(true);
    };

    fetchData();
  }, []);
  console.log(courses);

  const LoaderRowCount = Array.from({ length: 4 }, (_, index) => index);
  return (
    <>
      {!ready && LoaderRowCount.map((el, index) => <LoaderRow key={index} />)}

      {ready &&
        courses.map((el, index) => {
          return <Rowmap key={el.id} course={el} index={index} />;
        })}
    </>
  );
};

export default Rows;
