import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="flex flex-col items-start gap-4 bg-sky-600 p-2 h-screen w-auto">
        <li className="hover:bg-white hover:text-black p-3 w-full">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:bg-white hover:text-black p-3 w-full">
          <NavLink to="/addemployee">Add Employee</NavLink>
        </li>
        <li className="hover:bg-white hover:text-black p-3 w-full">
          <NavLink to="/searchByName">SearchByName</NavLink>
        </li>
        <li className="hover:bg-white hover:text-black p-3 w-full">
          <NavLink to="/employeelist">Employees</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
