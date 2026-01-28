import React from "react";
import Header from "../header/Header";
import Sidebar from "../header/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Sidebar />
        <div className="w-full h-screen">
          <div>
            <Header />
          </div>
          <div className="overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
