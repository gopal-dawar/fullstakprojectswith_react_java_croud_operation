import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-5">
      {/* Title */}
      <h2 className="text-xl font-bold text-blue-600 mb-6">Account Manager</h2>

      {/* Menu */}
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold"
                : "block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/addaccount"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold"
                : "block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
            }
          >
            Add Account
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/viewaccount"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold"
                : "block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
            }
          >
            View Account
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
