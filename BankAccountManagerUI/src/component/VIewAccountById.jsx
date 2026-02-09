import React, { useEffect, useState } from "react";
import { getAccountById } from "../api";

const ViewAccountById = () => {
  const [account, setAccount] = useState([]);

  const [id, setId] = useState(0);

  const fetchdata = async (id) => {
    const re = await getAccountById(id);
    setAccount(re.data);
    console.log(re.data);
  };

  return (
    <div className="max-w-3xl bg-white p-6 rounded-lg shadow">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">View Account</h1>

      {/* Search Section */}
      <div className="flex gap-4 mb-8">
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="Enter Account ID"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchdata}
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Account Details */}
      <div className="border rounded-lg p-5 bg-gray-50 space-y-6">
        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Account Holder</p>
            <p className="font-medium text-gray-800">Gopal Dawar</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Account Type</p>
            <p className="font-medium text-gray-800">Savings</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Balance</p>
            <p className="font-medium text-gray-800">₹25,000</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Open Date</p>
            <p className="font-medium text-gray-800">12-02-2025</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <button
            type="button"
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Edit
          </button>

          <button
            type="button"
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAccountById;
