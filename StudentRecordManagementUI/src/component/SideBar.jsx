import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="h-screen flex flex-col bg-blue-950 text-white p-2">
        <NavLink className={"hover:bg-white hover:text-black p-5"} to="/">
          Home
        </NavLink>
        <NavLink
          className={"hover:bg-white hover:text-black p-5"}
          to="/addStudent"
        >
          AddStudent
        </NavLink>
        <NavLink
          className={"hover:bg-white hover:text-black p-5"}
          to="/studentlist"
        >
          StudentList
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
