import React, { useState } from "react";
import { createAccount } from "../api";

const AddAccount = () => {
  const [account, setAccount] = useState({
    accountHolder: "",
    accountType: "",
    balance: 0.0,
    openeDate: "",
  });

  const [newData, setNewData] = useState([]);

  const formhandling = async (e) => {
    e.preventDefault();
    const re = await createAccount(account);
    setNewData(re.data);

    setAccount({
      accountHolder: "",
      accountType: "",
      balance: 0.0,
      openeDate: "",
    });
  };

  const resetbtn = () => {
    setAccount({
      accountHolder: "",
      accountType: "",
      balance: 0.0,
      openeDate: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Add New Account
        </h1>

        {/* Form */}
        <form
          onSubmit={formhandling}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Account Holder */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Account Holder
            </label>
            <input
              type="text"
              value={account.accountHolder}
              onChange={(e) =>
                setAccount({ ...account, accountHolder: e.target.value })
              }
              placeholder="Enter full name"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Account Type */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Account Type
            </label>
            <select
              value={account.accountType}
              onChange={(e) =>
                setAccount({ ...account, accountType: e.target.value })
              }
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select type</option>
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
              <option value="Salary">Salary</option>
            </select>
          </div>

          {/* Balance */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Opening Balance
            </label>
            <input
              type="number"
              value={account.balance}
              onChange={(e) =>
                setAccount({ ...account, balance: Number(e.target.value) })
              }
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Open Date */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Open Date
            </label>
            <input
              type="date"
              value={account.openeDate}
              onChange={(e) =>
                setAccount({ ...account, openeDate: e.target.value })
              }
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-center gap-6 pt-4">
            <button
              type="submit"
              className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save Account
            </button>

            <button
              onClick={resetbtn}
              type="reset"
              className="px-8 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Result Card */}
        {newData?.id && (
          <div className="mt-10 border-t pt-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Account Created Successfully 🎉
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-green-50 p-5 rounded-lg">
              <p>
                <strong>ID:</strong> {newData.id}
              </p>
              <p>
                <strong>Name:</strong> {newData.accountHolder}
              </p>
              <p>
                <strong>Type:</strong> {newData.accountType}
              </p>
              <p>
                <strong>Balance:</strong> ₹{newData.balance}
              </p>
              <p>
                <strong>Open Date:</strong> {newData.openeDate}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddAccount;
