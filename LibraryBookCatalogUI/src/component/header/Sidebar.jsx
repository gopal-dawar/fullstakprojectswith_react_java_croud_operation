import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Add Books</NavLink>
          </li>
          <li>
            <NavLink to="/">Search By Author</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
