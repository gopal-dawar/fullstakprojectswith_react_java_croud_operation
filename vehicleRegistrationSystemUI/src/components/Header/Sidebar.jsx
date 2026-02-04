import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-sky-300 w-full h-screen">
        <ul className="flex flex-col justify-center gap-y-3">
          <li className="hover:bg-sky-400 p-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:bg-sky-400 p-2">
            <NavLink to="/addvehicle">Add Vehicles</NavLink>
          </li>
          <li className="hover:bg-sky-400 p-2">
            <NavLink to="/vehiclelist">Vehicles List</NavLink>
          </li>
          <li className="hover:bg-sky-400 p-2">
            <NavLink to="/searchByModelOrYear">Search Vehicles</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
