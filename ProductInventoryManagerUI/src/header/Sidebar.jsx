import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-1/4  bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="font-bold text-3xl py-3 pl-2">
        Product Inventory Manager
      </h1>
      <div className="p-2 pt-5">
        <ul className="flex flex-col gap-5 ">
          <li className="hover:bg-black hover:text-white p-2">
            <NavLink className={"w-full"} to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:bg-black hover:text-white p-2">
            <NavLink className={"w-full"} to="/addproduct">
              Add Product
            </NavLink>
          </li>
          <li className="hover:bg-black hover:text-white p-2">
            <NavLink className={"w-full"} to="/productlist">
              Product List
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
