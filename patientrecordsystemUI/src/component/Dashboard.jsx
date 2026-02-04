import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
