import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addpatient">Add Patient</NavLink>
          </li>
          <li>
            <NavLink to="/patientlist">Patient List</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
