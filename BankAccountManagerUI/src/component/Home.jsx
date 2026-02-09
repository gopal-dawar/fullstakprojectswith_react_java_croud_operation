import React from "react";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Total Accounts</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Active Accounts</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">95</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Pending Requests</h2>
          <p className="text-3xl font-bold text-red-500 mt-2">8</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3">
          <li className="flex justify-between text-gray-700">
            <span>New account added</span>
            <span className="text-sm text-gray-500">Today</span>
          </li>

          <li className="flex justify-between text-gray-700">
            <span>Account updated</span>
            <span className="text-sm text-gray-500">Yesterday</span>
          </li>

          <li className="flex justify-between text-gray-700">
            <span>Account closed</span>
            <span className="text-sm text-gray-500">2 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
