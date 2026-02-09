import React from "react";

const UpdateAccount = () => {
  return (
    <div className="max-w-2xl bg-white p-6 rounded-lg shadow">
      
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Update Account
      </h1>

      {/* Search by ID */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter Account ID"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Fetch
        </button>
      </div>

      {/* Update Form */}
      <form className="space-y-5">

        {/* Account Holder */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Holder
          </label>
          <input
            type="text"
            value="Gopal Dawar"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            disabled
          />
        </div>

        {/* Account Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Type
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Savings</option>
            <option>Current</option>
            <option>Salary</option>
          </select>
        </div>

        {/* Balance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Balance
          </label>
          <input
            type="number"
            placeholder="Update balance"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Open Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Open Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            disabled
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Update
          </button>

          <button
            type="button"
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default UpdateAccount;
