import React from "react";
import Header from "../header/Header";
import Sidebar from "../header/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="h-screen overflow-hidden">
        <div>
          <Header />
        </div>
        <div className="flex w-full">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
