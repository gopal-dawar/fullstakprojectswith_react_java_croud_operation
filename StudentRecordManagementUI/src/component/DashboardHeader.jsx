import React from "react";

const DashboardHeader = () => {
  return (
    <div className="px-10 bg-blue-950  py-5 flex border-b-white border-b-2 justify-between items-center">
      <div className="text-white font-bold text-3xl">
        Student Record Management
      </div>
      <div className="flex justify-center items-center text-white gap-5">
        <h1>Gopal Dawar</h1>
        <p className="w-10 bg-gray-700 h-10 rounded-full"></p>
      </div>
    </div>
  );
};

export default DashboardHeader;
