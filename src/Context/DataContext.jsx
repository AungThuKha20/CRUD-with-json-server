import React, { createContext, useState } from "react";

export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [create, setCreate] = useState(false);
  const createDrawer = () => {
    return setCreate(!create);
  };
  const [edit, setEdit] = useState(false);
  const editToggle = () => {
    return setEdit(!edit);
  };

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };
  const [ready, setReady] = useState(false);
  const deleteRow = (id) => {
    setCourses(courses.filter((el) => el.id != id));
  };
  //edit
  const [editCourse, setEditCourse] = useState([]);
  const updateCourse = (editedCourse) => {
    setCourses(
      courses.map((el) => {
        if (el.id === editedCourse.id) {
          return editedCourse;
        }
        return el;
      })
    );
  };

  return (
    <DataContext.Provider
      value={{
        courses,
        setCourses,
        createDrawer,
        create,
        addCourse,
        ready,
        setReady,
        deleteRow,
        setEdit,
        edit,
        editToggle,
        editCourse,
        setEditCourse,
        updateCourse
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
