import React from "react";
import SideBar from "./SideBar";
import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-center items-center">
        <SideBar />
        <div className="bg-gray-500 w-full h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
