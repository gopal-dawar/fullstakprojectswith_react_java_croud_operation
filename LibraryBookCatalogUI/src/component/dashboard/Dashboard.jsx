import React from "react";
import Header from "../header/Header";
import Sidebar from "../header/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div>
        <Header />
      </div>
      <div className="flex justify-between">
        <Sidebar />
        <div className="bg-gray-300 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
