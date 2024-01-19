import React, { useContext } from "react";
import Header from "./Components/Header";
import RowGroup from "./Components/RowGroup";
import CreateDrawer from "./Components/CreateDrawer";
import EditDrawer from "./Components/EditDrawer";
import { DataContext } from "./Context/DataContext";

const App = () => {
  const { edit } = useContext(DataContext);
  return (
    <div className=" mx-1 md:mx-10 my-10">
      <Header />
      <RowGroup />
      <CreateDrawer />
      {edit && <EditDrawer />}
    </div>
  );
};

export default App;
