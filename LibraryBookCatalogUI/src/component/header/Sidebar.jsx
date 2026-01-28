import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-sky-600 w-1/6 h-screen">
      <div>
        <ul className="flex flex-col text-white gap-2 ">
          <li className="hover:bg-sky-950 p-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:bg-sky-950 p-2">
            <NavLink to="/addbook">Add Books</NavLink>
          </li>
          <li className="hover:bg-sky-950 p-2">
            <NavLink to="/bookslist">Books List</NavLink>
          </li>
          <li className="hover:bg-sky-950 p-2">
            <NavLink to="/searchbookbyauthor">Search By Author</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
