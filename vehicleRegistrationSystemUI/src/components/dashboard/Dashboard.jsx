import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Header/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="h-screen overflow-hidden">
          <div>
            <Header />
          </div>
          <div className="flex w-full">
            <div className="w-1/4">
              <Sidebar />
            </div>
            <div className="overflow-y-auto bg-gray-500 w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
